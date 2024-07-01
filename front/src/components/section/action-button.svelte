<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { AppContext } from '../../types'

  import { getContext } from 'svelte'

  export let tooltip: string

  const currentContext: Writable<AppContext> = getContext('currentContext')
</script>

<div class="tooltip" data-tip={tooltip}>
  <button
    class="btn btn-square flex h-10 min-h-10 w-10 items-center justify-center border-2 border-neutral/10 hover:border-neutral/20 hover:bg-secondary"
    disabled={!$currentContext}
  >
    <slot />
  </button>
</div>
