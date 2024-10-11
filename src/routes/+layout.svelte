<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p><a href="https://github.com/matt-36">github</a></p>
	</footer>
</div>

<style>

</style>
