<script lang="ts">
  import type { Alert } from '../../types'
  import type { Writable } from 'svelte/store'

  import { getContext } from 'svelte'

  import { CircleX, X } from 'lucide-svelte'

  const alerts: Writable<Alert[]> = getContext('alerts')

  function close(index: number) {
    alerts.update((alerts) => alerts.toSpliced(index, 1))
  }
</script>

<div class="toast flex-col-reverse pb-14">
  {#each $alerts as alert, i}
    <div role="alert" class="alert alert-error border-2 border-error/60 bg-error/40 p-3 shadow-md backdrop-blur-sm">
      <CircleX class="h-4 w-4" />

      <span class="text-sm">{alert.message}</span>

      <button
        on:click={() => {
          close(i)
        }}
        class="btn btn-circle btn-ghost btn-xs"
      >
        <X class="h-4 w-4" />
      </button>
    </div>
  {/each}
</div>
