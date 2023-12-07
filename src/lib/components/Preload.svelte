<script lang="ts">
	import { browser } from '$app/environment'
	import Preload from 'preload-it'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	export let assets: string[] = []
	let done = false
	let progress = 0

	onMount(() => {
		if (!browser) return

		if (assets.length <= 0) {
			progress = 100
			return (done = true)
		}
		document.body.style.overflow = 'hidden'

		const preload = Preload()
		preload.fetch(assets)

		preload.oncomplete = () => {
			setTimeout(() => {
				done = true
				document.body.style.overflow = 'auto'
			}, 2000)
		}

		preload.onprogress = (event: any) => {
			progress = event.progress
		}
	})
</script>

{#if !done}
	<div
		transition:fade|local
		class="fixed inset-0 z-50 flex flex-col items-center justify-center text-2xl text-center text-white bg-black"
	>
		<!-- <div
			class="w-32 h-32 mb-4 border-t-2 border-b-2 border-white rounded-full animate-spin"
		/> -->
		<div
			class="fixed flex flex-col items-end justify-end w-1/5 bottom-8 right-8"
		>
			<span class="font-mono text-xs font-light uppercase">{`${progress}`}</span
			>
		</div>
	</div>
{/if}

<style>
</style>
