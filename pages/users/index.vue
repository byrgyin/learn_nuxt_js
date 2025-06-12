<script setup lang="ts">
import type {User,ApiResponse} from "~/types/type";

const some:string = 'info';
definePageMeta({
  layout:'users',
});


const { data } = await useFetch<ApiResponse>('https://dummyjson.com/users');
const users = ref<User[]>(data.value?.users || []);
</script>
<template>
  <div class="container">
    <Head>
      <Title>All user from Website</Title>
      <Meta name="description" content="All user from Website<" />
    </Head>
    <h1>I'm users</h1>
    <p>{{some}}</p>
    <ul v-if="users.length" class="d-flex justify-content-between flex-wrap list-unstyled gap-3">
      <li
          v-for="user in users"
          :key="user.id"
      ><UserLink :user="user"/></li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped lang="css">
h1 {
  color: red;
}
</style>
