<script>
  import TitleBar from '../components/titlebar/index.svelte'
  import Footer from '../components/footer/index.svelte'

  import { MousePointerClick, Link } from 'lucide-svelte'
</script>

<TitleBar />

<section class="mx-4 mt-5 space-y-4">
  <h1 class="text-4xl font-bold">Utilidades</h1>

  <div class="flex flex-1 gap-2">
    <div class="tooltip" data-tip="Seleção">
      <button
        class="btn btn-square border-2 border-neutral/10 flex items-center justify-center hover:border-neutral/20 hover:bg-secondary"
      >
        <MousePointerClick class="w-6 h-6" />
      </button>
    </div>

    <div class="tooltip" data-tip="Links">
      <button
        class="btn btn-square border-2 border-neutral/10 flex items-center justify-center hover:border-neutral/20 hover:bg-secondary"
      >
        <Link class="w-5 h-5" />
      </button>
    </div>
  </div>
</section>

<Footer />
