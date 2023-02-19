<template>
  <img :src="image" :alt="altText" class="image-large">
</template>

<script>
export default {
  name: 'image-lrg',
  props: ['image', 'altText']
}
</script>
<style scoped>
  .image-large {
    width: 100%;
    border-radius: 24px;
  }
</style>