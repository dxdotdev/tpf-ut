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

<div class="flex-col-reverse toast pb-14">
  {#each $alerts as alert, i}
    <div role="alert" class="alert alert-error p-3 bg-error/40 border-2 border-error/60 backdrop-blur-sm shadow-md">
      <CircleX class="w-5 h-5" />

      {alert.message}

      <button
        on:click={() => {
          close(i)
        }}
        class="btn btn-sm btn-ghost btn-circle"
      >
        <X class="w-4 h-4" />
      </button>
    </div>
  {/each}
</div>
