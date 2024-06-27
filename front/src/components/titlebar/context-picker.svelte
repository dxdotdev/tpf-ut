<script>
  import { setContext } from 'svelte'

  function validateFile() {
    /** @type {HTMLInputElement | null} */
    const input = document.querySelector('#context-input')
    const filePath = input?.value || ''
    const fileExtensionStart = filePath.lastIndexOf('.') + 1
    const fileExtension = filePath?.substring(fileExtensionStart, filePath.length)

    if (fileExtension !== 'ut') {
      setContext('alert', { type: 'error', message: 'Arquivo Inválido!' })
    }
  }
</script>

<div class="tooltip tooltip-bottom" data-tip="Contexto">
  <label>
    <div class="btn btn-sm btn-ghost px-8">SEM CONTEXTO</div>

    <input on:change={validateFile} id="context-input" type="file" accept=".ut" class="hidden" />
  </label>
</div>
