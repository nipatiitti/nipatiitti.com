<script>
  import { accent, dark, highlight } from '$lib/utils/colors'
  import Canvas from '../../components/vault/MagicCircle/Canvas/Canvas.svelte'
  import Compass from '../../components/vault/MagicCircle/Compass.svelte'
  import Runes from '../../components/vault/MagicCircle/Runes.svelte'
  import SubCircles from '../../components/vault/MagicCircle/SubCircles.svelte'
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-5">
  <div class="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden bg-[#141418] p-5 md:p-10">
    <div class="absolute h-full w-full">
      <Runes />
    </div>

    <div class="absolute h-[70%] w-[70%]">
      <Compass size="lg" dir="counterclockwise" speed={1.5} />
    </div>

    <div class="absolute h-[55%] w-[55%]">
      <SubCircles />
    </div>

    <div class="absolute h-[40%] w-[40%] rotate-45">
      <Compass dir="clockwise" speed={2} color="#c2ac9b" />
    </div>

    <div class="absolute h-[40%] w-[40%] rotate-90">
      <Canvas />
    </div>
  </div>

  <div
    class="text-container mx-5 -mt-20 mb-44 flex max-w-3xl flex-col items-center justify-center gap-5 rounded-lg bg-[#141418] bg-opacity-60 p-5 md:mx-0 md:p-10"
    style="--dark: {dark}; --accent: {accent}; --highlight: {highlight}"
  >
    <h1 style="color: var(--accent)" class="text-4xl">The Magic Circle</h1>
    <p class="text-xl" style="color: var(--dark)">
      This semi-procedurally generated (and quite responsive) magic circle is a combination of &lt;svg /&gt;, &lt;canvas
      /&gt; and just plain old HTML and CSS. Can you guess which is which?
    </p>
    <p class="text-xl" style="color: var(--dark)">
      The runes and alchemical symbols are all from the unicode character sets.
    </p>
    <p class="text-xl" style="color: var(--dark)">
      You might also notice that on every refresh, the circle is slightly different. This is because none of it is hard
      coded but rather derived from the size of the container.
    </p>
    <p class="text-xl" style="color: var(--dark)">
      It's purpose you ask? Well it serves as a teleportation anchor for the Vault ofc! Simple basics of magic really...
    </p>
  </div>
</div>

<style>
  @font-face {
    font-family: 'Rune';
    src: url('/fonts/Norse.otf') format('opentype');
  }

  .text-container {
    backdrop-filter: blur(3px);
    border: 1px solid var(--highlight);

    font-family: 'Rune', sans-serif;
  }
</style>
