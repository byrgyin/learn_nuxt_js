<script setup lang="ts">
const some:string = 'info';
definePageMeta({
  layout:'users',
});
</script>
<template>
  <h1>I'm users</h1>
  <p>{{some}}</p>
</template>

<style scoped lang="css">
h1 {
  color: red;
}
</style>
