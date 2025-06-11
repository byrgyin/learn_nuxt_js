<template>
  <header class="bg-dark p-3">
    <ul class="nav container">
      <li class="nav-item"><NuxtLink class="nav-link text-white" to="/">HP</NuxtLink></li>
      <li class="nav-item"><NuxtLink class="nav-link text-white" to="/contact">Contact</NuxtLink></li>
      <li class="nav-item"><NuxtLink class="nav-link text-white" to="/users">users</NuxtLink></li>
    </ul>
  </header>

  <div class="container py-5">
    <slot/>
  </div>
</template>

<style scoped lang="css">
header a:not(.a.router-link-exact-active):hover{
  text-decoration: underline;
}
header a.router-link-exact-active{
  color: red !important;
  font-weight: 500;
}
</style>
<script setup lang="ts">
</script>