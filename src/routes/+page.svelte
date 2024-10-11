<script>
	import "../lib/components/ProjectCard.svelte"
    import ProjectCard from "../lib/components/ProjectCard.svelte";


	let projects = [
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"img": {
				"small": "//"
			}
		},
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"img": {
				"small": "//"
			}
		},
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"img": {
				"small": "//"
			}
		}
	]
</script>

<svelte:head>
	<title>MattWoods</title>
	<meta name="description" content="Portfolio site" />
</svelte:head>


<div class="container">
	<div class="title">
		<h1>Projects.</h1>
	</div>
	<div class="cards">
		{#each projects as p}
			<ProjectCard p={p}/>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title {
		text-decoration: underline;

	}
	.cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 90%;
		gap: 2em;
		height: fit-content;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
</style>