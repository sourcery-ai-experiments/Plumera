<script>
	import ThemeSwitcher from '../atoms/ThemeSwitcher.svelte';
	import Button from '../atoms/Button.svelte';

	import { FilePenLine } from 'lucide-svelte';

</script>

<nav class="c-topbar">
	<div class="c-topbar__logo">
		<h2 class="text-black text-xl">Hi Francis</h2>
	</div>

	<div class="c-topbar__container">
		<div class="c-topbar__container__left">
			<Button label="Create invoice">
				<FilePenLine class="w-5 h-5" />
			</Button>
		</div>
	</div>
	<div class="c-topbar__container__right">
		<div class="c-topbar__container__right__item">
			<div class="c-profile-avatar">
				<div class="flex justify-center items-center text-black gap-2">
					<ThemeSwitcher />
					<p>Déconnexion</p>
				</div>
			</div>
		</div>
	</div>
</nav>
