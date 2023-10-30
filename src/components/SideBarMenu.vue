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

<style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    padding: 10px 14px;
    background: var(--sidebar-color);
    transition: var(--tran-05);
  }

  .sidebar.close {
    width: 88px;
  }

  .sidebar .text {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-color);
    transition: var(--tran-03);
    white-space: nowrap;
    opacity: 1;
  }

  .sidebar.close .text {
    opacity: 0;
  }

  .sidebar .image {
    min-width: 60px;
    display: flex;
    align-items: center;
  }

  .sidebar .image-text img {
    width: 40px;
    border-radius: 6px;
  }

  .sidebar header {
    position: relative;
  }

  .sidebar header .image-text {
    display: flex;
    align-items: center;
  }

  .header-text .name {
    font-weight: 600;
  }

  .header-text .profession {
    margin-top: -2px;
  }

  .sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--sidebar-color);
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-03);
  }

  .sidebar.close header .toggle {
    transform: translateY(-50%);
  }

  body.dark .sidebar header .toggle {
    color: var(--text-color);
  }

  .sidebar li {
    height: 50px;
    margin-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;
  }

  .sidebar li .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    font-size: 20px;
    color: var(--text-color);
  }

  .sidebar li .icon,
  .sidebar li .text {
    color: var(--text-color);
    transition: var(--tran-02);
  }

  .sidebar .search-box {
    background: var(--primary-color-light);
    border-radius: 6px;
  }

  .search-box input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    background: var(--primary-color-light);
  }

  .sidebar li a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 6px;
    transition: var(--tran-04);
  }

  .sidebar li a:hover {
    background: var(--primary-color);
  }

  .sidebar li a:hover .text {
    color: var(--sidebar-color);
  }

  .sidebar li a:hover .icon {
    color: var(--sidebar-color);
  }

  .sidebar .menu-bar {
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu-bar .mode {
    position: relative;
    border-radius: 6px;
    background: var(--primary-color-light);
  }

  .menu-bar .mode .moon-sun {
    height: 50px;
    width: 60px;
    display: flex;
    align-items: center;
  }

  .menu-bar .mode .icon {
    position: absolute;
  }

  .menu-bar .mode .icon.sun {
    opacity: 0;
  }

  body.dark .menu-bar .mode .icon.sun {
    opacity: 1;
  }

  body.dark .menu-bar .mode .icon.moon {
    opacity: 0;
  }

  .menu-bar .mode .toggle-switch {
    position: absolute;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 60px;
    cursor: pointer;
    border-radius: 6px;
    background: var(--primary-color-light);
  }

  .toggle-switch .switch {
    position: relative;
    height: 22px;
    width: 44px;
    border-radius: 25px;
    background: var(--toggle-color);
  }

  .switch::before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background: var(--sidebar-color);
    transition: var(--tran-03);
  }

  body.dark .switch::before {
    left: 24px;
  }
</style>
