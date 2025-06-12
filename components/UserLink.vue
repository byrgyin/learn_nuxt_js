<script setup lang="ts">
import type {User} from "~/types/type";
defineProps<{
  user: User;
}>();
</script>

<template>
  <NuxtLink
      class="btn btn-primary"
      :to="`/users/user-${user.id}`">
    {{user.firstName}}
  </NuxtLink>
</template>

<style scoped>

</style>