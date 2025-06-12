<script setup lang="ts">
import type {User} from "~/types/type";

definePageMeta({
  layout:'users',
});

const { user_id } = useRoute().params as { user_id: string };

const {data} = await useFetch<User>(`https://dummyjson.com/users/${user_id}`);
const user = ref<User | null>(data.value)
</script>
<template>
  <div class="container">
    <Head>
      <Title>ID of user: {{user_id}}</Title>
      <Meta name="description" content="All user from Website<" />
    </Head>
    <h1>ID of user: {{user_id}}</h1>
    <p>{{user?.firstName}}</p>
  </div>
</template>

<style scoped lang="css">
h1 {
  color: red;
}
</style>
