<script lang="ts">
	import ThemeSwitcher from '$lib/components/atoms/ThemeSwitcher.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	import ButtonUi from '$lib/components/atoms/ButtonUi.svelte';

	import { FilePenLine } from 'lucide-svelte';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import CommandK from '$lib/components/atoms/CommandK.svelte';

</script>

<nav class="c-topbar">
	<div class="c-topbar__logo flex justify-between items-center gap-6">
		<h2 class="text-black text-xl">Hi Francis</h2>
	</div>

	<div class="c-topbar__container">
		<div class="c-topbar__container__left">
			<a href="/dashboard/invoices/add">
				<ButtonUi label="Create invoice">
					<FilePenLine class="w-5 h-5" />
				</ButtonUi>
			</a>
		</div>
	</div>

	<div class="c-topbar__container__right">
		<div class="c-topbar__container__right__item">
			<div class="c-profile-avatar">
				<div class="flex justify-center items-center text-black gap-6">
					<CommandK />

					<ThemeSwitcher />

					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button builders={[builder]} variant="outlet" class="flex items-center gap-2 bg-transparent">
								<img src="https://avatars.githubusercontent.com/u/1402241?v=4" class="w-8 h-8 rounded-full"
										 alt="avatar" />
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-56">
							<DropdownMenu.Label>Profil</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Label>
								<a href="/dashboard/account">
									Compte
								</a>
							</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>Déconnexion</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
		</div>
	</div>
</nav>
