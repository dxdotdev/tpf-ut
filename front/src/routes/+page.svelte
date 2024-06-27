<script lang="ts">
  import type { AppContext } from '../types.ts'

  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  import TitleBar from '../components/titlebar/index.svelte'
  import Section from '../components/section/index.svelte'
  import Footer from '../components/footer/index.svelte'

  import { MousePointerClick, Link } from 'lucide-svelte'

  const currentContext = writable<AppContext | null>(null)
  setContext('currentContext', currentContext)
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
