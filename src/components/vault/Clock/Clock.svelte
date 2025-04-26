<script lang="ts">
  import { cubicIn, cubicInOut, cubicOut } from 'svelte/easing'
  import { Tween } from 'svelte/motion'
  import type { ClockTime } from './numbers'

  type Props = {
    currentRotation: ClockTime
    targetRotation: ClockTime
    duration: number
  }

  let { currentRotation, targetRotation, duration }: Props = $props()

  let hourHand = $derived(
    new Tween(currentRotation[0], {
      duration,
      easing: cubicIn
    })
  )

  let minuteHand = $derived(
    new Tween(currentRotation[1], {
      duration,
      easing: cubicIn
    })
  )

  $effect(() => {
    hourHand.target = targetRotation[0]
    minuteHand.target = targetRotation[1]
  })
</script>

<div class="clock relative flex flex-1 items-center justify-center rounded-full">
  <div class="hand hour z-10 will-change-transform" style="--rotation: {hourHand.current}deg"></div>
  <div class="hand minute z-10 will-change-transform" style="--rotation: {minuteHand.current}deg"></div>
</div>

<style>
  .clock {
    aspect-ratio: 1 / 1;
    box-shadow:
      inset -5px 5px 9px #040506,
      inset 5px -5px 9px #121318;
    min-width: 40px;
  }

  .hand {
    position: absolute;
    background-color: #fff;
    border-radius: 4px;
    transform-origin: bottom center;
    transform: translateX(-50%) translateY(-50%) rotate(var(--rotation));
    transition: transform 0.1s linear;
  }

  .hand.hour {
    width: 3px;
    height: 40%;
  }

  .hand.minute {
    width: 3px;
    height: 40%;
  }
</style>
