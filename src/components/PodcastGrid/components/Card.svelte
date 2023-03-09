<script>
    export let name;
    export let host;
    export let platform;

    import Atropos from "atropos/svelte"
</script>

<main>
    <Atropos
    activeOffset={30}
    shadowScale={.90}
    >
    <div class="bg-gradient-to-tr from-orange-400 to-pink-400 gap-3 card shadow-xl p-6 pt-12">
        <div class="text-white gap-4 card-body">
            <div class="text-4xl font-bold w-[8ch] h-[6ch] mb-2">{name}</div>
            <div class="text-lg">{host}</div>
            <div class="text-sm text-gray-300">{platform}</div>
        </div>
        
    </div>
</Atropos>
</main>