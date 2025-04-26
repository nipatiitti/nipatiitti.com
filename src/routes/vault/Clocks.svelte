<script lang="ts">
  import { onMount } from 'svelte'
  import Clock from '../../components/vault/Clock/Clock.svelte'
  import Sector from '../../components/vault/Clock/Sector.svelte'

  let now = $state(new Date())

  const animate = () => {
    now = new Date()
    requestAnimationFrame(animate)
  }

  onMount(() => {
    requestAnimationFrame(animate)
  })

  let timeString = $derived(
    now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  )
  let [hours, minutes, seconds] = $derived(timeString.split(':').map(Number))

  const [initialHours, initialMinutes, initialSeconds] = new Date()
    .toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
    .split(':')
    .map(Number)

  console.log((60 - initialMinutes) * 60 - (60 - initialSeconds))

  let sectors = $state({
    hours: {
      currentValue: initialHours.toString().padStart(2, '0'),
      targetValue: ((initialHours + 1) % 24).toString().padStart(2, '0'),
      duration: ((60 - initialMinutes) * 60 - (60 - initialSeconds)) * 1000
    },
    minutes: {
      currentValue: initialMinutes.toString().padStart(2, '0'),
      targetValue: ((initialMinutes + 1) % 60).toString().padStart(2, '0'),
      duration: (60 - initialSeconds) * 1000
    },
    seconds: {
      currentValue: initialSeconds.toString().padStart(2, '0'),
      targetValue: ((initialSeconds + 1) % 60).toString().padStart(2, '0'),
      duration: 1000
    }
  })

  $effect(() => {
    if (hours !== Number.parseInt(sectors.hours.currentValue, 10)) {
      sectors.hours = {
        currentValue: hours.toString().padStart(2, '0'),
        targetValue: ((hours + 1) % 24).toString().padStart(2, '0'),
        duration: 60 * 60 * 1000
      }
    }
    if (minutes !== Number.parseInt(sectors.minutes.currentValue, 10)) {
      sectors.minutes = {
        currentValue: minutes.toString().padStart(2, '0'),
        targetValue: ((minutes + 1) % 60).toString().padStart(2, '0'),
        duration: 60 * 1000
      }
    }
    if (seconds !== Number.parseInt(sectors.seconds.currentValue, 10)) {
      sectors.seconds = {
        currentValue: seconds.toString().padStart(2, '0'),
        targetValue: ((seconds + 1) % 60).toString().padStart(2, '0'),
        duration: 1000
      }
    }
  })
</script>

<div class="clocks flex h-full w-full flex-col items-center justify-center gap-8 bg-[#0b0c0f]">
  <div class="container flex h-full w-full max-w-5xl flex-col items-center justify-center gap-8 px-2">
    <div class="flex w-full flex-wrap gap-0.5 md:gap-3">
      <Sector
        currentSector={sectors.hours.currentValue}
        targetSector={sectors.hours.targetValue}
        duration={sectors.hours.duration}
      />
      <Sector
        currentSector={sectors.minutes.currentValue}
        targetSector={sectors.minutes.targetValue}
        duration={sectors.minutes.duration}
      />
      <Sector
        currentSector={sectors.seconds.currentValue}
        targetSector={sectors.seconds.targetValue}
        duration={sectors.seconds.duration}
      />
    </div>

    <span class="text-2xl text-slate-200">
      {now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })}
    </span>
  </div>
</div>

<style>
  @font-face {
    font-family: 'Train One';
    src: url('/fonts/TrainOne.ttf') format('truetype');
  }

  .clocks {
    font-family: 'Train One', system-ui;
  }
</style>
