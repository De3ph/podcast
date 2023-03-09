<script lang="ts">
  import { beforeUpdate } from "svelte"
    import {PodcastList} from "../../data"
    import PlaylistTable from "../../components/PlaylistTable.svelte"
    let tableData;
    let inputValue;

    beforeUpdate(()=>{
      tableData = PodcastList.slice()  

    })

    const filterTable = (node, inputValue)=> {
        return{
            update(inputValue){
                let newData = tableData.filter((item)=>{
                    return item.name.toLowerCase().includes(inputValue.toLowerCase())
                })

                tableData = newData
            }
               
        }

    }
</script>

<main class="flex flex-col gap-16 w-full items-center">
    <input bind:value={inputValue} use:filterTable={inputValue} type="text" placeholder="Search By Name" class="mx-auto input input-bordered input-primary w-full max-w-xs" />

    <PlaylistTable bind:playlist={tableData} />



</main>