<script lang="ts">
  import { appWindow } from '@tauri-apps/api/window'

  import { ChevronDown, Minus, Maximize, X } from 'lucide-svelte'

  import ContextPicker from './context-picker.svelte'
</script>

<header data-tauri-drag-region class="flex items-center justify-between">
  <div data-tauri-drag-region class="flex flex-1 items-center">
    <!-- <span class="ml-4 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs">D</span> -->
    <!-- <span class="text-sm">Davi Reis</span> -->
  </div>

  <ContextPicker />

  <div data-tauri-drag-region class="flex flex-1 justify-end">
    <!-- <details class="dropdown dropdown-end">
      <summary class="btn btn-ghost w-12 h-8 min-h-10 rounded-none">
        <ChevronDown class="w-5 h-5" />
      </summary>

      <ul class="dropdown-content menu rounded-box bg-secondary">
        TODO: add dropdown content
      </ul>
    </details> -->

    <button on:click={appWindow.minimize} class="btn btn-ghost h-8 min-h-8 rounded-none">
      <Minus class="h-3 w-3" />
    </button>

    <!-- <button on:click={appWindow.toggleMaximize} class="btn btn-ghost h-10 min-h-10 w-14 rounded-none"> -->
    <!-- <Maximize class="h-4 w-4" /> -->
    <!-- </button> -->

    <button on:click={appWindow.close} class="btn btn-ghost h-8 min-h-8 rounded-none rounded-tr-xl hover:bg-error/80">
      <X class="h-3 w-3" />
    </button>
  </div>
</header>
