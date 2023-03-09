import Home from "../pages/Home/Home.svelte"
import Playlist from "../pages/Playlist/Playlist.svelte"

const routes = [
  {
    name: "/",
    component: Home
  },
  { name: "/playlist", component: Playlist }
]

export { routes }
