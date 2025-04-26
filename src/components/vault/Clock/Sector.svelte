<script lang="ts">
  import Clock from './Clock.svelte'
  import { type ClocksNumber, numbers } from './numbers'

  type Props = {
    currentSector: string
    targetSector: string
    duration: number
  }

  let { currentSector, targetSector, duration }: Props = $props()

  let chars = $derived(currentSector.split('').map(Number))
  let nums = $derived(chars.map((c) => numbers[c]))

  let targetChars = $derived(targetSector.split('').map(Number))
  let targetNums = $derived(targetChars.map((c) => numbers[c]))
</script>

{#snippet clocks(clocks: ClocksNumber, targetClocks: ClocksNumber)}
  <div class="flex flex-1 flex-col gap-0.5 md:gap-3">
    {#each clocks as row, i}
      <div class="flex flex-1 gap-0.5 md:gap-3">
        {#each row as clock, j}
          <Clock currentRotation={clock} targetRotation={targetClocks[i][j]} {duration} />
        {/each}
      </div>
    {/each}
  </div>
{/snippet}

<div class="flex flex-1 gap-0.5 md:gap-3">
  {#each nums as num, i}
    {@render clocks(num, targetNums[i])}
  {/each}
</div>
