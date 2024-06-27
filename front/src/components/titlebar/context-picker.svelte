<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { Alert, AppContext } from '../../types'

  import { getContext } from 'svelte'

  const currentContext: Writable<AppContext | null> = getContext('currentContext')
  const alerts: Writable<Alert[]> = getContext('alerts')

  function validateFile() {
    const input: HTMLInputElement = document.querySelector('#context-input')!
    const filePath = input.value
    const fileExtensionStart = filePath.lastIndexOf('.') + 1
    const fileExtension = filePath?.substring(fileExtensionStart, filePath.length)

    if (fileExtension !== 'ut') {
      input.value = ''
      currentContext.set(null)

      alerts.update((alerts) => {
        alerts.push({
          type: 'error',
          message: 'Arquivo de contexto inválido!',
        })
        return alerts
      })

      return
    }

    currentContext.set({ path: filePath })
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
