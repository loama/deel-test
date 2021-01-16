<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="sass">
/* stylelint-disable */
@import "@/styles/main.sass"
/* stylelint-enable */
</style>
