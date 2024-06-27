<script lang="ts">
  export let tooltip: string
</script>

<div class="tooltip" data-tip={tooltip}>
  <button
    class="btn btn-square border-2 border-neutral/10 flex items-center justify-center hover:border-neutral/20 hover:bg-secondary"
  >
    <slot />
  </button>
</div>
