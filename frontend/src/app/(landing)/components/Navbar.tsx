import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/app/(landing)/components/MaxWidthWrapper'
import { MobileNav } from '@/app/(landing)/components/MobileNav'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useEffect } from 'react'

const Navbar = () => {
  const isUserSignedIn = false
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    return localStorage.setItem('theme', theme as string)
  }, [theme])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  return (
    <nav
      className={cn(
        'sticky h-14 inset-x-0 top-0 z-30 border-b border-gray-200 backdrop-blur-lg transition-all',
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 justify-center items-center gap-1"
          >
            <img
              src="/logo/icon-logo.png"
              alt="Plumera logo"
              className="w-40 h-40"
            />
            <span className="text-2xl font-semibold">Plumera</span>
          </Link>
          <div className="flex gap-1 sm:gap-4 items-center">
            {!isUserSignedIn ? (
              <MobileNav />
            ) : (
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'sm:hidden mr-3',
                })}
                href="/dashboard"
              >
                Dashboard
              </Link>
            )}

            <div className="hidden items-center space-x-4 sm:flex">
              {!isUserSignedIn ? (
                <>
                  <Link
                    href="#pricing"
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    Prix
                  </Link>
                  <Link
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                    href="/login"
                  >
                    Connectez-vous
                  </Link>
                  <Link
                    className={buttonVariants({
                      size: 'sm',
                    })}
                    href="/sign-up"
                  >
                    Get started
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className={buttonVariants({
                      size: 'sm',
                    })}
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>

            {/* User profile mockup below, e.g using Clerk: <UserButton afterSignOutUrl="/" /> */}
            {isUserSignedIn && (
              <div className="bg-emerald-600 border-2 border-black shadow-lg rounded-full w-10 h-10"></div>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
