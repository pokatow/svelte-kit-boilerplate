<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from '$lib/components/Navbar.svelte'
	import '../app.css'

	import { browser } from '$app/environment'
	import { onDestroy, onMount } from 'svelte'
	import { lenisStore as lenis, setLenisStore } from '$lib/stores/lenis'
	import { useFrame } from '$lib/lifecycle-functions/useFrame'
	import Lenis from '@studio-freight/lenis'
	import Preload from '$lib/components/Preload.svelte'

	$: if (browser && $lenis) {
		$lenis.start()
	}

	onMount(async () => {
		window.history.scrollRestoration = 'manual'
		window.scrollTo(0, 0)

		const lenisInstance = new Lenis()
		setLenisStore(lenisInstance)

		return () => {
			$lenis?.destroy()
		}
	})

	useFrame((time) => {
		$lenis?.raf(time)
	})
</script>

<Navbar />

<main
	class="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-neutral-800 dark:text-neutral-300"
>
	<slot />
	<Preload assets={[]} />
</main>

<Footer />
