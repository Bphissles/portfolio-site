<template>
  <p class="green">/* {{ comment }} */</p>
</template>

<script>
export default {
  name: "comment",
  props: {
    comment: String,
  },
};
</script>
