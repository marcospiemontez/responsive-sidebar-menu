<template>
  <main>
    <div>
      <SideBarMenu :isDarkMode="isDarkMode" @dark-mode-enabled="enableDarkMode" @dark-mode-disabled="disableDarkMode" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SideBarMenu from '@/components/SideBarMenu.vue';

const isDarkMode = ref(false);

const enableDarkMode = () => {
  isDarkMode.value = true;
  document.body.classList.add("dark");
};

const disableDarkMode = () => {
  isDarkMode.value = false;
  document.body.classList.remove("dark");
};
</script>

<style>
body {
  height: 100vh;
  background: var(--body-color);
  transition: var(--tran-02);
}

body.dark {
  --body-color: #18191A;
  --sidebar-color: #242526;
  --primary-color: #3A3B3C;
  --primary-color-light: #3A3B3C;
  --toggle-color: #FFF;
  --text-color: #CCC;
}
</style>
