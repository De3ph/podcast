<script>
  export let links
</script>

<main>
  <ul class="flex flex-row flex-wrap gap-8">
    {#each links as link}
      <li class="text-2xl md:text-3xl text-black hover:underline hover:decoration-slate-600 hover:decoration-4">
        <a href=".">{link}</a>
      </li>
    {/each}
  </ul>
</main>
