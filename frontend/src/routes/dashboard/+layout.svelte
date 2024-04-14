<script>
    import '../../styles/_main.scss';
    import SideBar from "$lib/components/organisms/SideBar.svelte";
    import TopBar from "$lib/components/organisms/TopBar.svelte";
</script>

<svelte:head>
    <title>Ava | Dashboard</title>
    <meta name="description" content="Invoicer.ia est un outil de facturation en ligne pour les auto-entrepreneurs.">
    <meta name="keywords" content="facturation, auto-entrepreneur, freelance, facture, devis, comptabilité">
    <meta name="author" content="Invoicer.ia">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<section class="c-layout-dashboard">
    <SideBar/>
    <main class="c-layout-dashboard__container">
        <TopBar/>
        <slot/>
    </main>
</section>
