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
	import { fade } from 'svelte/transition'

	$: if (browser && $lenis) {
		$lenis.start()
	}

	onMount(() => {
		window.history.scrollRestoration = 'manual'
		window.scrollTo(0, 0)

		const lenisInstance = new Lenis()
		setLenisStore(lenisInstance)

		let localTimeInterval = setInterval(function () {
			var now = new Date()
			var gmtPlus7Time = now.toLocaleString('en-US', {
				timeZone: 'Asia/Bangkok',
				hour12: false,
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			})
			localTime.textContent = gmtPlus7Time
		}, 1000)

		return () => {
			$lenis?.destroy()
			clearInterval(localTimeInterval)
		}
	})

	let localTime: HTMLSpanElement

	useFrame((time) => {
		$lenis?.raf(time)
	})
</script>

<div
	class="fixed inset-0 z-40 border-8 md:border-[16px] border-background pointer-events-none transition-colors duration-500 font-roboto"
>
	<div class="flex w-full h-full border border-black">
		<div class="flex flex-col w-64 border-r border-black">
			<div class="flex flex-col gap-2 p-2 text-sm pointer-events-auto">
				<a href="/">HOME</a>
				<a href="/works">WORKS</a>
				<a href="/profile">PROFILE</a>
			</div>
			<div class="flex flex-col mt-auto">
				<div class="p-2 border-black border-y" />
				<div class="flex flex-col p-2">
					<div class="pb-2 text-xs font-medium">Sherwin Variancia</div>
					<p class="text-[.7rem] w-4/5">
						Software engineer with a strong passion for both design and coding.
						I specialize in creating visually stunning and functional websites
						and currently working in the web3 space as an anonymous designer and
						developer. Outside of my professional work, I often engage in
						freelance projects or side projects during my leisure time.
					</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col flex-1">
			<header class="sticky top-0 z-50 flex">
				<div class="flex items-center flex-1">
					<div
						class="flex items-center h-full gap-1 px-2 font-mono text-xs text-white bg-black text-[.6rem] ml-auto"
					>
						<span>MY LOCALTIME</span>
						<span bind:this={localTime}> 00:00:00 </span>
					</div>
				</div>
			</header>
		</div>
	</div>
</div>

<main
	class="flex flex-col flex-1 ml-[272px] overflow-hidden font-mono border-inherit"
	id="main"
>
	<slot />
</main>
