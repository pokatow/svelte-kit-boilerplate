<script lang="ts">
	export let title: undefined | string = undefined

	export let description: undefined | string = undefined

	export let keywords: undefined | string = undefined

	export let base: undefined | string = undefined

	export let applicationName: undefined | string = undefined

	export let themeColor: undefined | string = undefined

	export let nofollow = false

	export let noindex = false

	export let nositelinkssearchbox = false

	export let notranslate = false

	export let canonical: undefined | string = undefined

	export let amp: undefined | string = undefined

	export let manifest: undefined | string = undefined

	// export let languageAlternates = undefined

	// export let twitter = undefined

	// export let openGraph = undefined

	// export let facebook = undefined

	// export let jsonLd = undefined
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}

	{#if description}
		<meta name="description" content={description} />
	{/if}

	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	{#if amp}
		<link rel="amphtml" href={amp} />
	{/if}

	{#if manifest}
		<link rel="manifest" href={manifest} />
	{/if}

	{#if applicationName}
		<meta name="application-name" content={applicationName} />
	{/if}

	<!-- {#if languageAlternates}
		{#each languageAlternates as { href, hreflang }}
			<link rel="alternate" {href} {hreflang} />
		{/each}
	{/if} -->

	{#if themeColor}
		<meta name="theme-color" content={themeColor} />
	{/if}

	{#if base}
		<base href={base} />
	{/if}

	<!-- {#if facebook?.appId}
		<meta property="fb:app_id" content={facebook.appId} />
	{/if} -->

	<meta
		name="robots"
		content={`${noindex ? 'noindex' : 'index'},${
			nofollow ? 'nofollow' : 'follow'
		}`}
	/>
	<meta
		name="googlebot"
		content={`${noindex ? 'noindex' : 'index'},${
			nofollow ? 'nofollow' : 'follow'
		}`}
	/>

	{#if nositelinkssearchbox}
		<meta name="google" content="nositelinkssearchbox" />
	{/if}

	{#if notranslate}
		<meta name="google" content="notranslate" />
	{/if}

	<!-- {#if twitter}
		{#each Object.entries(twitter) as [key, value]}
			{@const transformed = key
				.replace(/([a-z])([A-Z])/g, '$1:$2')
				.toLowerCase()}

			<meta name="twitter:{transformed}" content={value} />
		{/each}
	{/if} -->

	<!-- {#if jsonLd}
		{@const data = Object.assign({ '@context': 'https://schema.org' }, jsonLd)}
		{@html `<script type="application/ld+json">${
			JSON.stringify(data) + '<'
		}/script>`}
	{/if} -->

	<slot />
</svelte:head>
