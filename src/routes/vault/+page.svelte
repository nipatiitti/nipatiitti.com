<script>
  import { dark } from '$lib/utils/colors'
  import Clocks from './Clocks.svelte'
  import MagicCircle from './MagicCircle.svelte'
  import Page from './Page.svelte'
</script>

<main class="flex min-h-svh w-[100svw] flex-col items-center justify-center bg-[#141418]" style="--dark: {dark}">
  <Page index={0}>
    <Clocks />
  </Page>
  <MagicCircle />
  <Page index={1}>
    <div class="flex h-full w-full flex-col items-center justify-center bg-background-950 px-10 text-center">
      <h1 class="font-heading text-4xl text-text-50">⛏ Vault exploration WIP ⛏</h1>
      <p class="font-body text-xl text-primary-100">
        I primarily use the <span class="font-bold text-text-50">Vault</span> to experiment and play around with new ideas.
      </p>
      <p class="font-body text-xl text-primary-100">
        This page is a always a work in progress and will be updated as I continue to explore new concepts.
      </p>
    </div>
  </Page>
</main>
