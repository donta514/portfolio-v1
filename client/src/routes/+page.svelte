<script>
	import ExampleCard from '$lib/components/cards/ExampleCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<div class="container mx-auto max-w-screen-xxl px-4 sm:px-6 lg:px-8">
	<!-- <ExampleCard /> -->
	<h1 class="text-3xl text-center">This is the beginning of a porfolio site for Donta Smith</h1>
	<Button on:click={toggleMode} variant="outline" size="icon">
		<Sun
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		/>
		<Moon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/>
		<span class="sr-only">Toggle theme</span>
	</Button>
</div>
