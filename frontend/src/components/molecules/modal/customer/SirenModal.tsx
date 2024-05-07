import { Dialog, Transition } from '@headlessui/react'
import React, {
  Fragment,
  useState,
  useCallback,
  FormEvent,
  ChangeEvent,
} from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from '@tanstack/react-query'
import { getSirenDetails } from '@/lib/customer'
import { ClientProps } from '@/types/ClientProps'

interface SirenModalProps {
  isOpen: boolean
  onClose: () => void
  onSirenSubmit: (data: any) => void
}

function SirenModal({ isOpen, onClose, onSirenSubmit }: SirenModalProps) {
  const [siren, setSiren] = useState<string>('')
  const queryClient = useQueryClient()

  const sirenMutation: UseMutationResult<any, Error, string, unknown> =
    useMutation({
      mutationFn: getSirenDetails,
      onError: (error: Error) => {},
      onSuccess: (data: ClientProps) => {
        queryClient.invalidateQueries({ queryKey: ['tax_information'] })
        onSirenSubmit(data)
        resetAndClose()
      },
    })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (newValue.match(/^[0-9]*$/)) {
      setSiren(newValue)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (siren) {
      sirenMutation.mutate(siren)
    }
  }

  const handleContinueWithoutSiren = () => {
    onSirenSubmit({})
    resetAndClose()
  }

  const resetAndClose = useCallback(() => {
    setSiren('')
    onClose()
  }, [onClose])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={resetAndClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Enter SIREN Number
              </Dialog.Title>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <Label htmlFor="siren">SIREN Number</Label>
                  <Input
                    id="siren"
                    type="text"
                    value={siren}
                    onChange={handleInputChange}
                    placeholder="Enter SIREN number"
                  />
                </div>
                <div className="flex justify-between">
                  <Button type="submit">Rechercher</Button>
                  <Button type="button" onClick={handleContinueWithoutSiren}>
                    Continuer sans SIREN
                  </Button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SirenModal
