<script setup lang="ts">
useHead({
  title: 'Contact',
  meta:[
    {name: 'description', content: 'Contact Page'},
  ]
})

const name = ref('');
const email = ref('');
const message = ref('');
const isSub = ref(false);
const resultMessage = ref('');

const submitForm = async () => {
  isSub.value = true;
  resultMessage.value = '';

  const {error} = await useFetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value,
    })
  });

  if (error.value) {
    resultMessage.value = 'Error: ' + error.value;
  } else {
    resultMessage.value = 'All is submitted';
    name.value = '';
    email.value = '';
    message.value = '';
    isSub.value = false;
  }
}
</script>
<template>
  <h1>Contacts</h1>
  <form @submit.prevent="submitForm">
    <input type="text" id="name" v-model="name" class="form-control" placeholder="Name"/>
    <input type="email" id="email" v-model="email" class="form-control" placeholder="Email"/>
    <textarea name="message" id="message" v-model="message" class="form-control" placeholder="message"></textarea>
    <button type="submit" class="btn btn-primary" :disabled="isSub">
      {{ isSub ? 'Sending...' : 'Submit' }}
    </button>
  </form>
  <div v-if="resultMessage" class="mt-3 alert alert-success" role="alert">
    {{ resultMessage }}
  </div>
</template>

<style scoped lang="css">

</style>
