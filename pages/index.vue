<script setup lang="ts">
const options = {
  method: 'POST',
  body: JSON.stringify({
    name: 'dev' as string,
    id:1 as number,
  })
}

const {data} = await useFetch('/api/example',options)
</script>
<template>
  <h1>Home Page</h1>
  <Alert color="primary">{{data.mess}}</Alert>
</template>

<style scoped lang="css">
h1 {
  color: red;
}
</style>
