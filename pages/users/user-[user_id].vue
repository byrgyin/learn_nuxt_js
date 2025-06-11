<script setup lang="ts">
definePageMeta({
  layout:'users',
});
const some:string = 'info';
const {user_id}:string = useRoute().params;

</script>
<template>
  <h1>ID of user: {{user_id}}</h1>
  <p>{{some}}</p>
</template>

<style scoped lang="css">
h1 {
  color: red;
}
</style>
