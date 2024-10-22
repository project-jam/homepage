<script>
    import { onMount } from 'svelte';

    onMount(() => {
        // Set the page metadata
        document.title = "Project Jam"; // Change to your desired title
        document
            .querySelector('meta[name="description"]')
            .setAttribute("content", "idk what to put here"); // Change to your desired description
    });
</script>

<main>
    <img src="/logo.svg" alt="Logo" />
</main>

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

