<script>
  import Icon from "./Icon.svelte"
  export let items
  export let __class = ""
</script>

<div class={"menu menu-vertical gap-4 items-start justify-center px-1 ".concat(__class)}>
  {#each items as item}
    <button class="btn btn-ghost flex w-full gap-1 justify-start text-base lg:text-lg">
      <svelte:component this={Icon} icon={item.icon} />
      {item.text}
    </button>
  {/each}
</div>
