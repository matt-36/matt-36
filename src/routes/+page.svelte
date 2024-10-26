<script>
  import JobCard from "$lib/components/JobCard.svelte";
	import "../lib/components/ProjectCard.svelte"
    import ProjectCard from "../lib/components/ProjectCard.svelte";


	let jobs = [
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"description": "Test Description",
			"img": {
				"small": "//"
			}
		},
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"description": "Test Description",
			"img": {
				"small": "//"
			}
		},
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"description": "Test Description",
			"img": {
				"small": "//"
			}
		}
	]
	let projects = [
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"description": "Test Description",
			"img": {
				"small": "//"
			}
		},
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"description": "Test Description",
			"img": {
				"small": "//"
			}
		},
		{
			"title": "test",
			"source":  "github.com/matt-36",
			"description": "Test Description",
			"img": {
				"small": "//"
			}
		}
	]
</script>

<svelte:head>
	<title>Matt Woods</title>
	<meta name="description" content="Portfolio site" />
</svelte:head>


<div class="w-full h-full flex flex-row flex-wrap items-start justify-center gap-10 pt-24">
	<div class="grow-1 shrink-1 basis-0 w-full h-full min-w-[300px]">
		<div class="text-5xl">
			<h1>Matthew Woods</h1>
		</div>
		<div class="text-md">
			Description text
		</div>
		<div>
			<a href="https://github.com/matt-36">github.com/matt-36</a>
			<a href="https://www.linkedin.com/in/matthew-woods-106600251/">linkedin</a>

		</div>
		
	</div>
	
	<div class="grow-1 shrink-1 basis-0">
		<div class="text-5xl w-full">
			<h1 class="align-self-center">Experience.</h1>
		</div>
		<div class="flex flex-row flex-wrap basis-full items-center justify-center gap-2 w-full h-fit pt-2">
			{#each jobs as j}
				<JobCard {j}/>
			{/each}
		</div>
	</div>
	<div class="grow-1 shrink-1 basis-0">
		<div class="text-5xl">
		<h1>Projects.</h1>
		</div>
		<div class="flex flex-row flex-wrap basis-full items-center justify-center gap-2 w-full h-fit pt-2">
			{#each projects as p}
				<ProjectCard {p}/>
			{/each}
		</div>
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