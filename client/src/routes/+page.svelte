<script>
	import Navbar from '$lib/components/nav/navbar.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<div class="container mx-auto max-w-screen-xxl px-4 sm:px-6 lg:px-8">
	<Navbar />
	<section class="text-white">
		<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
			<div class="mx-auto max-w-3xl text-left">
				<h1
					class="bg-gradient-to-r from-blue-600 via-turquoise-500 to-green-300 bg-clip-text text-7xl font-extrabold text-transparent sm:text-7xl"
				>
					Hi, my name is

					<span class="sm:block"> Donta Smith. </span>
				</h1>

				<p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">I am a Web Developer!</p>

				<div class="mt-8 flex flex-wrap justify-left gap-4">
					<!-- <a
						class="group relative inline-block text-sm font-medium text-blue-600 focus:outline-none focus:ring active:text-blue-600"
						href="/download"
					>
						<span
							class="absolute inset-0 translate-x-0 translate-y-0 bg-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
						></span>

						<span class="relative block border border-current bg-white px-8 py-3"> Resume </span>
					</a> -->

					<a
						class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-600 sm:w-auto"
						href="/contact"
					>
						Get in touch!
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
