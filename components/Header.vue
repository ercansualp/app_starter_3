<template>
  <header class="flex items-center justify-between p-6 border-b border-border-color bg-sidebar">
    <div class="flex items-center gap-4">
      <button @click="toggleSidebar" class="text-text-secondary hover:text-text-primary">
        <Menu class="w-6 h-6" />
      </button>
      <div class="relative">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
        <input type="text" placeholder="Ara..."
          class="bg-input-bg border border-border-color rounded-lg pl-10 pr-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary" />
      </div>
    </div>
    <div class="flex items-center gap-4">
      <ThemeSwitcher />
      <button class="relative text-text-secondary hover:text-text-primary">
        <Bell class="w-6 h-6" />
        <span class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
      </button>
      <div class="relative">
        <div class="flex items-center gap-3 cursor-pointer" @click="togglePopover">
          <img src="https://i.pravatar.cc/40?u=admin" alt="User Avatar" class="w-10 h-10 rounded-full" />
          <div>
            <p class="font-semibold text-text-primary">Admin</p>
            <p class="text-sm text-text-secondary">admin@example.com</p>
          </div>
          <ChevronDown :class="{ 'rotate-180': showPopover }" class="w-5 h-5 text-text-secondary transition-transform duration-200" />
        </div>

        <div v-if="showPopover" ref="popoverRef"
          class="absolute top-full right-0 mt-2 w-48 bg-sidebar border border-border-color rounded-lg shadow-lg p-2 z-10">
          <!-- Popover Arrow -->
          <div class="absolute -top-2 right-4 w-4 h-4 bg-sidebar transform rotate-45 border-t border-l border-border-color"></div>
          <ul class="text-text-primary">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-background rounded-md">Profil</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-background rounded-md">Ayarlar</a>
            </li>
            <li>
              <hr class="border-border-color my-1" />
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-background rounded-md text-red-500 dark:text-red-400">Çıkış Yap</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Search, Bell, Menu, ChevronDown } from 'lucide-vue-next'
import { useSidebar } from '~/composables/useSidebar'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'

const { toggleSidebar } = useSidebar()

const showPopover = ref(false)
const popoverRef = ref(null)

const togglePopover = () => {
  showPopover.value = !showPopover.value
}

const handleClickOutside = (event) => {
  if (popoverRef.value && !popoverRef.value.contains(event.target) && !event.target.closest('.cursor-pointer')) {
    showPopover.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
