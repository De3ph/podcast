<script>
  import MdExplore from "svelte-icons/md/MdExplore.svelte"
  import MdWhatshot from "svelte-icons/md/MdWhatshot.svelte"
  import MdBookmark from "svelte-icons/md/MdBookmark.svelte"
  import MdSearch from "svelte-icons/md/MdSearch.svelte"
  import MdPlaylistPlay from "svelte-icons/md/MdPlaylistPlay.svelte"
  import MdAccountCircle from "svelte-icons/md/MdAccountCircle.svelte"
  import MdSettings from "svelte-icons/md/MdSettings.svelte"
  import Card from "./components/Card.svelte"
  import CardSlide from "./components/CardSlide.svelte"
  import User from "./components/User.svelte"
  import Navbar from "./components/Navbar.svelte"
  import SideNav from "./components/SideNav.svelte"

  let firstListTexts = [
    {
      icon: MdExplore,
      text: "Discover"
    },
    {
      icon: MdWhatshot,
      text: "Popular"
    },
    {
      icon: MdBookmark,
      text: "Bookmarks"
    },
    {
      icon: MdSearch,
      text: "Search"
    }
  ]
  let secondListTexts = [
    {
      icon: MdPlaylistPlay,
      text: "Playlists"
    },
    {
      icon: MdAccountCircle,
      text: "Account"
    },
    {
      icon: MdSettings,
      text: "Preferences"
    }
  ]
  let navLinks = [
    "Popular",
    "Finance",
    "Business",
    "Creativity",
    "Desing",
    "Team"
  ]
</script>

<main class="py-6">
  <div class="flex justify-between px-10 py-6">
    <div class="font-semibold text-2xl">Podcast</div>
    <User />
  </div>
  <section class="flex pt-6 gap-12 lg:gap-8 bg-section-pattern bg-cover">
    <nav class="hidden gap-16 sm:flex w-1/5 pl-4 h-screen flex-col">
      <SideNav __class="w-full" items={firstListTexts} />
      <SideNav __class="w-full" items={secondListTexts} />
    </nav>
    <!-- <nav class="sm:hidden h-screen">Drawer</nav> -->
    <section class="grow px-4 flex flex-col gap-16 pr-10">
      <div class="flex flex-col gap-6 justify-between items-start">
        <div class="title text-5xl md:text-7xl font-bold">DISCOVER</div>
      </div>
      <Navbar links={navLinks} />
      <CardSlide>
        <Card
          title="Creative Confidence"
          author="Natasha Rose"
          position="Senior Designer"
        />
        <Card
          title="Creative Confidence"
          author="Natasha Rose"
          position="Senior Designer"
        />
        <Card
          title="Creative Confidence"
          author="Natasha Rose"
          position="Senior Designer"
        />
        <Card
          title="Creative Confidence"
          author="Natasha Rose"
          position="Senior Designer"
        />
        <Card
          title="Creative Confidence"
          author="Natasha Rose"
          position="Senior Designer"
        />
        <Card
          title="Creative Confidence"
          author="Natasha Rose"
          position="Senior Designer"
        />
        <Card
          title="Creative Confidence"
          author="Natasha Rose"
          position="Senior Designer"
        />
        <Card
          title="Creative Confidence"
          author="Natasha Rose"
          position="Senior Designer"
        />
      </CardSlide>
    </section>
  </section>
</main>
