<script>
  import PodcastGrid from "../../components/PodcastGrid/PodcastGrid.svelte"

  import Navbar from "../../components/Layout/Navbar.svelte"

  let navLinks = [
    "Popular",
    "Finance",
    "Business",
    "Creativity",
    "Desing",
    "Team"
  ]
</script>

<main>
  <section class="flex gap-12 lg:gap-8 bg-section-pattern bg-cover">
    <section class="grow px-4 flex flex-col gap-16 pr-10">
      <div class="flex flex-col gap-6 justify-between items-start">
        <div class="title text-5xl md:text-7xl font-bold">DISCOVER</div>
      </div>
      <Navbar links={navLinks} />
      <PodcastGrid />
    </section>
  </section>
</main>
