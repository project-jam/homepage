<script>
	import { page } from '$app/stores';
</script>

<style>
	.error-container {
		padding: 2rem;
		text-align: center;
		margin: 2rem;
		border: 3px dashed black; /* Dashed border */
		display: inline-block;
	}

	.error-code {
		font-size: 8vw; /* Responsive font size */
		position: relative;
		display: inline-block;
		cursor: pointer;
		text-decoration: underline;
		text-decoration-style: dashed;
	}

	.hover-box {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 110%;
		width: 40vw; /* Responsive width */
		max-width: 300px; /* Maximum width */
		min-width: 150px; /* Minimum width */
		border: 2px dashed black;
		padding: 1vw;
		background-color: #fff;
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.3s ease, visibility 0.3s ease;
	}

	.error-code:hover .hover-box {
		visibility: visible;
		opacity: 1;
	}

	.error-message {
		font-size: 4vw;
		margin-top: 1rem;
	}

	@media (max-width: 600px) {
		.error-code {
			font-size: 10vw;
		}

		.error-message {
			font-size: 6vw;
		}

		.hover-box {
			width: 60vw;
			padding: 2vw;
		}
	}

	@media (min-width: 1200px) {
		.error-code {
			font-size: 4vw;
		}

		.hover-box {
			width: 20vw;
		}
	}
</style>

<div class="error-container">
	<div class="error-code">
		{$page.status}
		<div class="hover-box">
			{#if $page.status === 404}
				Not Found
			{:else}
				{$page.error.message}
			{/if}
		</div>
	</div>
	<div class="error-message">
		{#if $page.status === 404}
			Oh no! You got a 404!
		{:else}
			{$page.error.message}
		{/if}
	</div>
</div>

