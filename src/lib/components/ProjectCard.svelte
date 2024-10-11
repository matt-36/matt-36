<script>
    export let p = {
        "title": "Could not obtain projects.",
        "source": "https://github.com/matt-36",
        "img": {
            "small": ""
        }
    };
</script>

<div class="container">
    <div class="body">
        {p.title}
    </div>
    <div class="popover">

    </div>
</div>

<style>
    .container {
        flex: 1 1 0;
        aspect-ratio: 2 /1;
        min-width: 300px;
        background-color: aqua;

        border-radius: 15px;
        padding: 5px;
    }
</style>