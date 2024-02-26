<script lang="ts">
	import { browser } from '$app/environment'
	import { fade } from 'svelte/transition'

	let showModal = false,
		bodyElement = browser ?? document.getElementsByTagName('BODY')[0]

	export const handleToggleModal = () => {
		showModal = !showModal
	}

	const handleScrollBar = () => {
		if (browser) {
			let body = document.getElementsByTagName('BODY')[0] as HTMLElement
			if (showModal) {
				body.style.overflowY = 'hidden'
			} else {
				body.style.overflowY = 'auto'
			}
		}
		return true
	}

	$: showModal, handleScrollBar()
</script>

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0 z-50 flex flex-col justify-center p-6 bg-black/80"
		transition:fade|local
		on:click|self={handleToggleModal}
	>
		<slot {handleToggleModal} />
	</div>
{/if}

<style>
</style>
