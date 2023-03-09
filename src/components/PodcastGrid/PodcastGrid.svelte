<script lang="ts">
  import Card from "./components/Card.svelte"
  import CardSlide from "./components/CardSlide.svelte"
  import { PodcastList } from "../../data/index"
</script>

<main>
  <CardSlide>
    {#each PodcastList as podcast}
      <Card
        name={podcast.name}
        host={podcast.host}
        platform={podcast.platform}
      />
      {:else}
	    <p class="mx-auto text-4xl font-bold">No podcast for today!</p>
    {/each}
  </CardSlide>
</main>
