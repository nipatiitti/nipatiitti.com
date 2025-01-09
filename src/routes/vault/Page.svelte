<script lang="ts">
  import type { Snippet } from 'svelte'

  type Props = {
    index: number
    children: Snippet
  }

  let { index, children }: Props = $props()
</script>

<section class="vault-page" style="--index: {index}">
  {@render children()}
</section>

<style>
  /* Vault page will be a sticky scrollable page, that adhers to top and is index * svh down */

  .vault-page {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100vw;
  }
</style>
