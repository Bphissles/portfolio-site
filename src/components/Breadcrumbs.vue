<template>
  <div class="breadcrumbs">
    <p class="bold">{{projectIndex}}</p><span>/</span><p>{{ totalCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'breadcrumbs',
  props: ['projectIndex', 'totalCount']
}
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    span {margin-inline: 10px}
    p {margin-bottom: 0}
  }
</style>