<template>
  <div class="card">
    <img src="https://placekitten.com/500" alt="something lovely">
    <span><p class="heading-03 underline">Something</p>  <i class="arrow"></i></span>
  </div>
</template>

<script>
export default {
  name: 'secondary-preview-card',
}
</script>

<style lang="scss" scoped>
  .card {
    margin-bottom: 24px;
    img {
      width: 100%;
      border-radius: 18px;
      margin-bottom: 12px;
    }
    span {
      display: flex;
      align-items: center;
      p {
        margin: 0;
      }
    }
    .arrow {
      margin-left: 12px;
      width: 16px;
      height: 16px;
    }
  }
</style>