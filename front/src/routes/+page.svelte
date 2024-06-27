<script lang="ts">
  import { writable } from 'svelte/store'

  import TitleBar from '../components/titlebar/index.svelte'
  import Section from '../components/section/index.svelte'
  import Footer from '../components/footer/index.svelte'

  import { MousePointerClick, Link } from 'lucide-svelte'

  type Context = {
    path: string
  }

  const context = writable<Context | null>(null)

  type Alert = {
    type: 'info' | 'warning' | 'error'
    message: string
  }

  const alert = writable<Alert | null>()

  if (!$context) {
    alert.set({
      type: 'error',
      message: 'Sem contexto selecionado!',
    })
  }
</script>

<TitleBar />

<Section title="Utilidades" let:S>
  <S.ActionButton tooltip="Seleção">
    <MousePointerClick class="w-6 h-6" />
  </S.ActionButton>

  <S.ActionButton tooltip="Links">
    <Link class="w-5 h-5" />
  </S.ActionButton>
</Section>

<Footer />
