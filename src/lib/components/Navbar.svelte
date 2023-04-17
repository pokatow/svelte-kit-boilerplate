<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	let showMobileNavbar = false,
		showNavbarStyle = false,
		showNavbar = true,
		lastScrollTop = 0;
	const handleToggleMobileNavbar = () => {
		showMobileNavbar = !showMobileNavbar;
	};
	const handleScroll = () => {
		let screenViewHeight = Math.round(window.innerHeight / 100) * 100;
		var st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollTop && window.pageYOffset > screenViewHeight) {
			showNavbar = false;
		} else {
			showNavbar = true;
		}
		if (window.pageYOffset > screenViewHeight) {
			showNavbarStyle = true;
		} else {
			showNavbarStyle = false;
		}
		lastScrollTop = st <= 0 ? 0 : st;
	};
	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
		}
	});
	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

{#if showNavbar}
	<div
		in:fly={{ y: -100 }}
		class={`fixed z-40 top-0 w-full  border-black transition-all duration-300 ${
			showNavbarStyle ? 'border-b bg-background' : ''
		}`}
	>
		<nav
			class={` flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto inset-x-0  p-4 `}
		>
			<div class="flex items-center justify-between w-full">
				<a href="/">
					<h1 class="text-xl font-bold">Logo</h1>
				</a>

				<button class="block md:hidden" on:click={handleToggleMobileNavbar}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>

				<ul class="hidden space-x-6 md:flex">
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</div>

			{#if showMobileNavbar}
				<div
					in:fade
					class="fixed inset-0 z-50 bg-black/60"
					on:click|self={handleToggleMobileNavbar}
				>
					<div
						in:fly={{ x: 200 }}
						class={`absolute right-0 w-1/2 inset-y-0 bg-black p-4 flex flex-col justify-center items-center text-white transition-all duration-300 ${
							!showMobileNavbar ? 'translate-x-full' : ' translate-x-0'
						}`}
					>
						<button on:click={handleToggleMobileNavbar} class="absolute top-6 right-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						<ul class="w-full space-y-2 text-right">
							<li><a href="/">Home</a></li>
							<li><a href="/about">About</a></li>
						</ul>
					</div>
				</div>
			{/if}
		</nav>
	</div>
{/if}
