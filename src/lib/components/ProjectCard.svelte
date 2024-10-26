<script>
    export let p = {
        "title": "Could not obtain projects.",
        "source": "https://github.com/matt-36",
        "description": "...",
        "img": {
            "small": ""
        }
    };
    
  import { Motion, useMotionValue, useMotionTemplate } from "svelte-motion";
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let background = useMotionTemplate`
						radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(244, 44, 4, 0.5), transparent 300%)
					`;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mousemove={(e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }}
  class="group min-w-[500px] aspect-[4/1] grow shrink basis-0 relative w-full overflow-hidden rounded-xl"
>
  <Motion
    style={{
      background,
    }}
    let:motion
  >
    <div
      use:motion
      class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-50"
    ></div>
  </Motion>
  <div
    class="relative flex flex-col gap-3 px-4 py-5 h-full"
  >
    <div class="space-y-2">
      <h3 class="text-3xl font-medium text-neutral-200 underline">
        {p.title}
      </h3>
      <p class="text-md leading-[1.5] text-neutral-300">
        {p.description}
      </p>
    </div>
  </div>
</div>