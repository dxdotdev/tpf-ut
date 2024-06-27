<script lang="ts">
  import { appWindow } from '@tauri-apps/api/window'

  import { ChevronDown, Minus, Maximize, X } from 'lucide-svelte'

  import ContextPicker from './context-picker.svelte'
</script>

<div class="flex flex-1 items-center justify-between">
  <div class="flex gap-2 ml-4">
    <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-sm">D</span>
    <span>Davi Reis</span>
  </div>

  <ContextPicker />

  <div class="flex">
    <!-- <details class="dropdown dropdown-end">
      <summary class="btn btn-ghost w-12 h-8 min-h-10 rounded-none">
        <ChevronDown class="w-5 h-5" />
      </summary>

      <ul class="dropdown-content menu rounded-box bg-secondary">
        TODO: add dropdown content
      </ul>
    </details> -->

    <button on:click={appWindow.minimize} class="btn btn-ghost w-12 h-8 min-h-10 rounded-none">
      <Minus class="w-5 h-5" />
    </button>

    <button on:click={appWindow.toggleMaximize} class="btn btn-ghost w-12 h-8 min-h-10 rounded-none">
      <Maximize class="w-5 h-5" />
    </button>

    <button on:click={appWindow.close} class="btn btn-ghost w-12 h-8 min-h-10 rounded-none hover:bg-error/80">
      <X class="w-5 h-5" />
    </button>
  </div>
</div>
