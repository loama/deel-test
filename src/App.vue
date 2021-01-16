<template>
  <div id="app">
    <DesktopNav />
    <div id="content" class="min-h-screen w-screen">
      <router-view />
    </div>
  </div>
</template>

<script>
import DesktopNav from '@/components/navigation/desktop'

export default {
  components: {
    DesktopNav
  }
}
</script>

<style lang="sass">
/* stylelint-disable */
@import "@/styles/main.sass"
/* stylelint-enable */
</style>
