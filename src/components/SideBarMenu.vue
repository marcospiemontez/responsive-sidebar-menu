<template>
  <nav class="sidebar bg-sideBarColor">
    <header>
      <div class="image-text">
        <span class="image">
          <img src="../assets//logo.svg" alt="">
        </span>

        <div class="text header-text">
          <span class="name">CodingLab</span>
          <span class="profession">Web developer</span>
        </div>
      </div>

      <box-icon class="toggle" name='chevron-right'/>
    </header>

    <div class="menu-bar">
      <div class="menu">
        <li class="search-box">
          <box-icon name='search' class="icon" />
          <input type="search" placeholder="Search...">
        </li>
        <ul class="menu-links">
          <li class="nav.link">
            <a href="#">
              <box-icon name='home-alt' class="icon" />
              <span class="text nav-text">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import 'boxicons'

</script>

<style>
body {
  height: 100vh;
}

.sidebar .text {
  font-size: 16px;
  font-weight: 500;
  color: var(--textColor);
}

.sidebar .image {
  min-width: 60px;
  display: flex;
  align-items: center;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
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
  min-width: 30px;
  font-size: 20px;
}

.sidebar li .icon,
.sidebar li .text {
  color: var(--textColor);
}

.sidebar header {
  position: relative;
}

.sidebar .image-text img{
  width: 50%;
  border-radius: 6px;
}

.sidebar header .image-text{
  display: flex;
  align-items: center;
}

header .image-text .header-text {
  display: flex;
  flex-direction: column;
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
  transform: translateY(-50%);
  height: 25px;
  width: 25px;
  background: var(--primaryColor);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--sideBarColor);
}

.sidebar .search-box {
  background: var(--primaryColorLight);
}

.search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background: var(--primaryColorLight);
}

.sidebar li a {
  text-decoration: none;
  height: 100%;
  align-items: center;
}
</style>