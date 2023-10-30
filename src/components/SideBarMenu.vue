<template>
  <nav :class="['sidebar', { 'close': isSidebarClosed }]">
    <header>
      <div class="image-text">
        <span class="image">
          <img src="../assets//logo.svg" alt="">
        </span>

        <div class="text header-text">
          <span class="name">SidebarMenu</span><br>
          <span class="profession">Web developer</span>
        </div>
      </div>
      <i class='bx bx-chevron-right toggle' @click="toggleSidebar" />
    </header>

    <div class="menu-bar">
      <div class="menu">
        <li class="search-box">
          <i class='bx bx-search icon'></i>
          <input type="search" placeholder="Search...">
        </li>
        <ul class="menu-links">
          <li v-for="item in menuItems" :key="item.id" class="nav-link">
            <a :href="item.url">
              <i :class="item.iconClass"></i>
              <span class="text nav-text">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="bottom-content">
        <li class="">
          <a href="#">
            <i class='bx bx-log-out icon' />
            <span class="text nav-text">Logout</span>
          </a>
        </li>

        <li class="mode">
          <div class="moon-sun">
            <i class='bx bx-moon icon moon' />
            <i class='bx bx-sun icon sun' />
          </div>
          <span class="text mode-text">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>

          <div class="toggle-switch" @click="toggleDarkMode">
            <span class="switch"></span>
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const isDarkMode = ref(false);
const emit = defineEmits();

const isSidebarClosed = ref(true);

const toggleSidebar = () => {
  isSidebarClosed.value = !isSidebarClosed.value;
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    emit("dark-mode-enabled");
  } else {
    emit("dark-mode-disabled");
  }
};

const menuItems = ref([
  {
    id: 1,
    url: '#',
    iconClass: 'bx bx-home-alt icon',
    label: 'Dashboard',
  },
  {
    id: 2,
    url: '#',
    iconClass: 'bx bx-bar-chart-alt-2 icon',
    label: 'Revenue',
  },
  {
    id: 3,
    url: '#',
    iconClass: 'bx bx-bell icon',
    label: 'Notifications',
  },
  {
    id: 4,
    url: '#',
    iconClass: 'bx bx-pie-chart-alt icon',
    label: 'Analytics',
  },
  {
    id: 5,
    url: '#',
    iconClass: 'bx bx-heart icon',
    label: 'Likes',
  },
  {
    id: 6,
    url: '#',
    iconClass: 'bx bx-wallet icon',
    label: 'Wallets',
  },
]);
</script>
