<script>
    export let title;
    export let author;
    export let position;
</script>

<main>
    <div class="bg-gradient-to-tr from-orange-400 to-pink-400 gap-3 card shadow-xl p-6 pt-12">
        <div class="text-white gap-4 card-body">
            <div class="text-4xl font-bold w-[8ch] mb-2">{title}</div>
            <div class="text-lg">{author}</div>
            <div class="text-sm text-gray-300">{position}</div>
        </div>
        <div class="card-actions justify-start">
            <button class="btn btn-outline">></button>
        </div>
    </div>
</main>