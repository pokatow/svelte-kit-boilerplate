<script lang="ts">
	import Marquee from '$lib/components/Marquee.svelte'
	import Seo from '$lib/components/Seo.svelte'
	let works = [1, 2, 3, 4]
	let counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
</script>

<Seo title={`Sherwin Variancia`} description={``} />

<div
	class="relative flex flex-col items-center justify-center min-h-screen border-b border-black p-[8px] md:p-[16px]"
>
	<div class="absolute flex items-center gap-1 bottom-6 left-7">
		<div class="w-1 h-1 bg-black" />
		<div class=" text-[.5rem] font-mono">01</div>
	</div>

	<!-- <img
		src="/images/golden-ratio.png"
		alt="Golden Ratio"
		class="absolute z-10 translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2"
	/> -->
	<div class="relative flex flex-col items-center w-full gap-8 text-[8rem]">
		<div class="pr-[16rem] z-10">DESIGN</div>
		<div class="pl-[16rem] z-0">DEVELOP</div>
		<div class="pr-[16rem] z-10">DELIVER</div>
	</div>
	<img
		src="/shapes/triangle.svg"
		alt="Triangle"
		class="absolute translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2"
	/>
	<img
		src="/shapes/grid.svg"
		alt="Grid"
		class="absolute inset-x-0 bottom-0 w-full"
	/>
</div>
<div class="flex flex-col w-full">
	<div class="flex border-b border-black divide-x divide-black">
		<div class="flex items-center justify-center w-1/3 aspect-square">
			<img src="/shapes/3.svg" alt="Shape" class="m-auto" />
		</div>
		<div class="w-1/2">
			<!-- <img src="/images/golden-ratio.jpg" alt="Shape" class="h-full" /> -->
		</div>
		<div class="relative flex flex-col w-1/2">
			<h1 class="pl-2 text-7xl">Works</h1>
			<p class=" text-[.5rem] absolute bottom-2 right-7 text-right w-1/2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
				explicabo mollitia quae veritatis aut, ratione praesentium porro nostrum
				reiciendis illo sint excepturi quaerat corporis quibusdam rem! Unde
				dolorem fuga perferendis.
			</p>
			<div class="absolute z-10 flex items-center gap-1 top-3 right-7">
				<div class="w-1 h-1 bg-black" />
				<div class=" text-[.5rem] font-mono">02</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col border-b border-black divide-y divide-black">
		{#each works as x}
			<a
				href="/"
				class="flex items-center gap-4 p-4 transition-all duration-300 cursor-not-allowed hover:bg-black hover:text-white"
			>
				<div class="text-5xl">0{x}</div>
				<div class="w-1/3 text-base">[REDACTED]</div>
			</a>
		{/each}
		<div class="relative flex justify-between">
			<div
				class="flex items-center flex-1 overflow-x-hidden font-mono uppercase border-r border-black"
			>
				<Marquee>
					{#each counter as x}
						<div class="px-2">[Research]</div>
						<div class="px-2">[Develop]</div>
						<div class="px-2">[Deploy]</div>
					{/each}
				</Marquee>
			</div>
			<a
				href="/works"
				class="flex items-center justify-center w-32 gap-1 p-2 mr-2 transition-all duration-300 hover:bg-black hover:text-white"
			>
				<span class="text-base font-medium">MORE</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>

<div class="flex flex-col w-full divide-y divide-black">
	<div class="flex divide-x divide-black">
		<div class="w-1/3 p-2">X</div>
		<a
			href="https://twitter.com/winchia"
			target="_blank"
			class="w-2/3 p-2 pr-8 text-right transition-all duration-300 hover:bg-black hover:text-white"
			>winchia</a
		>
	</div>
	<div class="flex divide-x divide-black">
		<div class="w-1/3 p-2">Instagram</div>
		<a
			href="https://instagram.com/sherwinchia"
			target="_blank"
			class="w-2/3 p-2 pr-8 text-right transition-all duration-300 hover:bg-black hover:text-white"
			>sherwinchia</a
		>
	</div>
	<div class="flex divide-x divide-black">
		<div class="w-1/3 p-2">Mail</div>
		<a
			href="mailto:sherwinchiaa@gmail.com"
			class="w-2/3 p-2 pr-8 text-right transition-all duration-300 hover:bg-black hover:text-white"
			>sherwinchiaa@gmail.com</a
		>
	</div>
	<div class="w-full overflow-hidden">
		<img
			src="/images/sherwin.svg"
			alt="Sherwin"
			class="w-full scale-[1.01] pr-4"
		/>
	</div>
	<div class="flex p-1 pb-5 text-xs">2024 Sherwin Variancia</div>
</div>

<style></style>
