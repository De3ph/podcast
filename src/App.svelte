<script>
  import { Router } from "svelte-router-spa"

  import { routes } from "./router/router"

  import MdExplore from "svelte-icons/md/MdExplore.svelte"
  import MdWhatshot from "svelte-icons/md/MdWhatshot.svelte"
  import MdBookmark from "svelte-icons/md/MdBookmark.svelte"
  import MdSearch from "svelte-icons/md/MdSearch.svelte"
  import MdPlaylistPlay from "svelte-icons/md/MdPlaylistPlay.svelte"
  import MdAccountCircle from "svelte-icons/md/MdAccountCircle.svelte"
  import MdSettings from "svelte-icons/md/MdSettings.svelte"

  import SideNav from "./components/Layout/SideNav.svelte"
  import User from "./components/User.svelte"


  let firstListTexts = [
    {
      icon: MdExplore,
      text: "Discover",
      href: "."
    },
    {
      icon: MdWhatshot,
      text: "Popular",
      href: "."
    },
    {
      icon: MdBookmark,
      text: "Bookmarks",
      href: "."
    },
    {
      icon: MdSearch,
      text: "Search",
      href: "."
    }
  ]
  let secondListTexts = [
    {
      icon: MdPlaylistPlay,
      text: "Playlists",
      href: "/playlist"
    },
    {
      icon: MdAccountCircle,
      text: "Account",
      href: "."
    },
    {
      icon: MdSettings,
      text: "Preferences",
      href: "."
    }
  ]
</script>

<main class="flex flex-col pt-6 gap-12 lg:gap-8 bg-section-pattern bg-cover">

  <div class="flex justify-between px-10 pt-6">
    <div class="font-semibold text-2xl">Podcast</div>
    <User />
  </div>
  
  <main class="flex gap-6 px-3">
    <nav class="hidden gap-16 sm:flex w-1/5 pl-4 h-screen flex-col py-5">
      <SideNav __class="w-full" items={firstListTexts} />
      <SideNav __class="w-full" items={secondListTexts} />
    </nav>
  
      <section class="overflow-x-auto py-5 w-full">
        <Router {routes} />
      </section>
  </main>
  
</main>
