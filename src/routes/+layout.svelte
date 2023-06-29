<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from '$lib/components/Navbar.svelte'
	import '../app.css'
	import 'iconify-icon'
</script>

<Navbar />

<main
	class="flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
>
	<slot />
	<!-- {#if preloadDone}
		
		{#if message}
			<div
				transition:fly={{ x: 200, duration: 500 }}
				class=" max-w-[100%] sm:max-w-[50%] lg:max-w-[30%] fixed right-4 bottom-4 border-primary bg-background border-2 px-3 py-2 text-primary text-sm font-semibold flex space-x-2 items-center"
			>
				<div
					class="w-4 h-4 my-auto border-2 border-solid rounded-full grid-1 border-t-transparent animate-spin border-primary"
				/>
				<span class="flex-1">{message}</span>
			</div>
		{/if}
		{#if isLoading}
			<div
				transition:fade
				class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur"
			>
				<p class="px-2 text-center">{isLoading}</p>
			</div>
		{/if}
	{:else}
		<Loading {progress} />
	{/if} -->
</main>

<Footer />
