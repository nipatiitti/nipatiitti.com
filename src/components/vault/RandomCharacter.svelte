<script lang="ts">
  import { characterSets, type CharacterSet } from '$lib/utils/characterUtils'
  import type { HTMLAttributes } from 'svelte/elements'
  import { twMerge } from 'tailwind-merge'

  type Props = {
    set: CharacterSet
  } & HTMLAttributes<HTMLSpanElement>

  let { set, class: className, ...htmlAttributes }: Props = $props()

  let characters = $derived(characterSets[set])
  let randomCharacter = $derived(characters[Math.floor(Math.random() * characters.length)])
</script>

<span class={twMerge('', className)} {...htmlAttributes}>{randomCharacter}</span>
