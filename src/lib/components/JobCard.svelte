<script>
    export let j = {
        "title": "Could not obtain projects.",
        "source": "https://github.com/matt-36",
        "description": "...",
        "img": {
            "small": ""
        }
    };


</script>

<div class="group min-w-[500px] aspect-[4/1] grow shrink basis-0 relative w-full overflow-hidden rounded-xl">
    <div class="flex flex-col">
        <div class="rounded-5xl grow shrink basis-0">
            <img src={j.img.small} alt={j.title}>
        </div>
        <div class="grow-2 shrink basis-0 w-full">
            <div class="flex flex-row">
                <div class="text-3xl">
                    {j.title}
                </div>
                <div>
                    {j.description}
                </div>
            </div>
        </div>
    </div>
</div>