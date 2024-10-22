<script>
  import { page } from '$app/stores';

  export let title = "Project Jam";
  export let description = "idk what to put here";
  export let image = "https://project-jam.vercel.app/logo.png"; 
</script>

<main>
    <img src="/logo.svg" alt="Logo" />
</main>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description} | Example.com">
  <meta property="og:url" content="https://project-jam.vercel.app/{$page.url.pathname.toString()}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="{image}">
</svelte:head>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Full viewport height */
        margin: 0;
        background-color: #f0f0f0; /* Optional background color */
    }

    img {
        max-width: 76%; /* Responsive image */
        height: auto;    /* Maintain aspect ratio */
    }
</style>
