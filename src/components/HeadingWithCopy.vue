<template>
  <div class="copy-body">
    <p class="bold">{{ heading }}</p>
    <p>{{ bodyCopy }}</p>
  </div>
</template>

<script>
export default {
  props: ["heading", "bodyCopy"],
};
</script>

<style lang="scss" scoped>
</style>
