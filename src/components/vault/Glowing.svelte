<script lang="ts">
  import type { Snippet } from 'svelte'

  type Props = {
    children: Snippet
    chance: number
  }

  let { children, chance }: Props = $props()

  let glowing = $derived(Math.random() < chance)
</script>

<span class:glowing class="rune">
  {@render children()}
</span>

<style>
  .rune {
    color: inherit;
  }

  .glowing {
    text-shadow: 0 0 10px #f13ab8;
    color: #f384d0;
  }
</style>
