<script>
  import Compass from '../../components/vault/Compass.svelte'
  import Runes from '../../components/vault/Runes.svelte'
</script>

<main class="door relative flex h-svh w-svw items-center justify-center overflow-hidden bg-[#141418] p-5 md:p-10">
  <div class="absolute h-full w-full">
    <Runes />
  </div>
  <div class="absolute h-[70vh] w-[70vw]">
    <Compass />
  </div>
</main>
