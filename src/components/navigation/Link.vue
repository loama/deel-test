<template>
  <router-link
    :to="to"
    class="text-gray-900 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm rounded-md"
  >
    <img class="pr-4" :src="'/heroicons/' + icon + '.svg'" />
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String,
    to: String
  }
}
</script>
