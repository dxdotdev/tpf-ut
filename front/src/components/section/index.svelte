<script lang="ts">
  import ActionButton from './action-button.svelte'

  export let title: string

  export const S = {
    ActionButton,
  }
</script>

<section class="mx-8 space-y-5 pt-8">
  <h1 class="text-3xl font-semibold">{title}</h1>

  <div class="flex flex-1 gap-2">
    <slot {S} />
  </div>
</section>
