<script lang="ts">
  import type { Alert, AppContext } from '../types.ts'

  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  import TitleBar from '../components/titlebar/index.svelte'
  import Section from '../components/section/index.svelte'
  import Footer from '../components/footer/index.svelte'

  import { MousePointerClick, Link } from 'lucide-svelte'

  const currentContext = writable<AppContext | null>(null)
  setContext('currentContext', currentContext)

  const alerts = writable<Alert[]>([])
  setContext('alerts', alerts)

  alerts.subscribe((alerts) => {
    if (alerts.length > 5) alerts.shift()
  })
</script>

<TitleBar />

<Section title="Utilidades" let:S>
  <S.ActionButton tooltip="Seleção">
    <MousePointerClick class="h-6 w-6" />
  </S.ActionButton>

  <S.ActionButton tooltip="Links">
    <Link class="h-5 w-5" />
  </S.ActionButton>
</Section>

<Footer />
