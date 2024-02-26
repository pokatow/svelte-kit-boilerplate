<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	/**
	 * Pause on hover
	 * @type {boolean}
	 */
	export let pauseOnHover = false
	/**
	 * Pause on click
	 * @type {boolean}
	 */
	export let pauseOnClick = false
	/**
	 * Animation direction
	 * @type {"left" | "right"}
	 */
	export let direction = 'left'
	/**
	 * Animation state
	 * @type {boolean}
	 */
	export let play = true

	let containerWidth: number,
		speed = 10,
		tempSpeed = 0

	$: duration = containerWidth / speed
	$: _style = `
		--pause-on-hover: ${pauseOnHover ? 'paused' : 'running'};
		--pause-on-click: ${pauseOnClick ? 'paused' : 'running'};
	`
	$: _marqueeStyle = `
		--play: ${play ? 'running' : 'paused'};
		--direction: ${direction === 'left' ? 'normal' : 'reverse'};
		--duration: ${duration}s;
	`

	onMount(() => {
		let screenWidth: any
		if (browser) {
			screenWidth = window.screen.availWidth
		}

		setTimeout(() => {
			if (screenWidth > 1280) {
				speed = 17
			} else if (screenWidth > 1023) {
				speed = 13
			} else if (screenWidth > 767) {
				speed = 9
			} else {
				speed = 7
			}
		}, 1000)
	})
</script>

<div class="marquee-container" style={_style} bind:clientWidth={containerWidth}>
	<!-- <div class="absolute inset-y-0 right-0 z-10 w-6 lg:w-12" />
  <div class="absolute inset-y-0 left-0 z-10 w-6 lg:w-12" /> -->
	<div
		class="absolute inset-y-0 right-0 z-10 w-6 lg:w-12 bg-gradient-to-r from-background-light/0 to-background-light/100 dark:from-background-dark/0 dark:to-background-dark/100"
	/>
	<div
		class="absolute inset-y-0 left-0 z-10 w-6 lg:w-12 bg-gradient-to-l from-background-light/0 to-background-light/100 dark:from-background-dark/0 dark:to-background-dark/100"
	/>
	<div class="marquee" style={_marqueeStyle}>
		<slot />
	</div>
	<div class="marquee" style={_marqueeStyle}>
		<slot />
	</div>
</div>

<style>
	.marquee-container {
		display: flex;
		width: 100%;
		overflow: hidden;
		flex-direction: row;
		position: relative;
	}
	.marquee-container:hover .marquee {
		animation-play-state: var(--pause-on-hover);
	}
	.marquee-container:active .marquee {
		animation-play-state: var(--pause-on-click);
	}
	.marquee {
		flex: 0 0 auto;
		min-width: 100%;
		z-index: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		animation-name: scroll;
		animation-duration: var(--duration);
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-play-state: var(--play);
		animation-direction: normal;
		animation-direction: var(--direction);

		-webkit-animation-name: scroll;
		-webkit-animation-duration: var(--duration);
		-webkit-animation-delay: 0s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
		-webkit-animation-play-state: var(--play);
		-webkit-animation-direction: normal;
		-webkit-animation-direction: var(--direction);
	}
	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@-webkit-keyframes scroll {
		0% {
			-webkit-transform: translateX(0%);
		}
		100% {
			-webkit-transform: translateX(-100%);
		}
	}
</style>
