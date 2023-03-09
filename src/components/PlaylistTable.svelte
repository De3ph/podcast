<script lang="ts">
    export let playlist;
</script>

<main class="overflow-x-auto">
  <table class="table table-zebra table-normal">
    <thead>
      <tr>
        <th> </th>
        <th>Name</th>
        <th>Host</th>
        <th>Platform</th>
        <th>Category</th>
        <th>Times Listened</th>
      </tr>
    </thead>
    <tbody>
        {#each playlist as item,index}
            <tr>
            <th>{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.host}</td>
            <td>{item.platform}</td>
            <td>{item.category}</td>
            <td>{item.timesListened}</td>
        </tr>
        {/each}
    </tbody>
  </table>
</main>
