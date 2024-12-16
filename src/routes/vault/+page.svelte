<script>
  import Flourish from '../../components/vault/Flourish.svelte'
  import Runes from '../../components/vault/Runes.svelte'
</script>

<main class="door relative flex h-svh w-svw items-center justify-center bg-[#141418] p-5 md:p-10">
  <div class="absolute h-full w-full">
    <Runes />
  </div>
  <Flourish />
</main>
