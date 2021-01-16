<template>
  <div
    class="fixed flex flex-col h-screen flex-1 border-r border-gray-200 bg-white w-64 hidden lg:block"
  >
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 px-4">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          alt="Workflow"
        />
      </div>
      <nav class="mt-5 flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
        <Link icon="outline/home" text="Home" to="/" />

        <Link
          icon="outline/cash"
          text="Create a Contract"
          to="create-a-contract"
        />

        <Link
          icon="outline/clipboard-check"
          text="Compliance Documents"
          to="compliance-documents"
        />

        <Link icon="outline/collection" text="Invoices" to="invoices" />

        <Link icon="outline/chart-pie" text="Taxes" to="taxes" />

        <Link
          icon="outline/clock"
          text="Transaction History"
          to="transaction-history"
        />

        <Link icon="outline/shield-check" text="Insurance" to="insurance" />

        <Link
          icon="outline/currency-dollar"
          text="Deel Advance"
          to="deel-advance"
        />

        <Link icon="outline/star" text="Perks" to="perks" />
      </nav>
    </div>
    <div
      class="flex-shrink-0 flex border-t border-gray-200 p-4 fixed bottom-0 w-64"
    >
      <router-link
        to="/settings/general"
        class="flex-shrink-0 w-full group block"
      >
        <div class="flex items-center">
          <div>
            <img
              class="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p
              class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
            >
              Tom Brook
            </p>
            <p
              class="text-xs font-medium text-gray-400 group-hover:text-gray-700"
            >
              Open Settings
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Link from '@/components/navigation/Link'

export default {
  components: {
    Link
  }
}
</script>

<style lang="sass" scoped>
.router-link-exact-active
  @apply bg-gray-100
</style>
