<template>
  <div class="flex h-screen bg-background">
    <Transition name="slide">
      <Sidebar v-if="isSidebarOpen" />
    </Transition>
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import Header from '~/components/Header.vue'
import { useSidebar } from '~/composables/useSidebar'

const { isSidebarOpen } = useSidebar()
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
