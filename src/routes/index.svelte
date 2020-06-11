<script lang="typescript">
	import Heading from '../markdown/Heading.svelte';
	export let title = "CoTranslator";
	import { setContext } from 'svelte';

	setContext('editable', true);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<p>Home page</p>
	<Heading editable depth={1}>Testing Heading</Heading>
</main>

<style>

</style>