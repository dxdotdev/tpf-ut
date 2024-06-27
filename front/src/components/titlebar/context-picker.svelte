<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { AppContext } from '../../types'

  import { setContext, getContext } from 'svelte'

  const currentContext: Writable<AppContext | null> = getContext('currentContext')

  function validateFile() {
    const input: HTMLInputElement = document.querySelector('#context-input')!
    const filePath = input.value
    const fileExtensionStart = filePath.lastIndexOf('.') + 1
    const fileExtension = filePath?.substring(fileExtensionStart, filePath.length)

    if (fileExtension !== 'ut') {
      setContext('currentContext', { path: 'janskdnsdk' })
    }
  }
</script>

<div class="tooltip tooltip-bottom" data-tip="Contexto">
  <label>
    <div class="btn btn-sm btn-ghost px-8">
      {$currentContext?.path.toUpperCase() || 'SEM CONTEXTO'}
    </div>

    <input on:change={validateFile} id="context-input" type="file" accept=".ut" class="hidden" />
  </label>
</div>
