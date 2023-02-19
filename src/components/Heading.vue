<script setup>
import Breadcrumbs from "./Breadcrumbs.vue";
</script>

<template>
  <section class="header">
    <Breadcrumbs
      v-if="projectName.length > 0"
      projectIndex="Projects"
      :totalCount="projectName"
    />
    <h1 class="heading-01">{{ heading }}</h1>
    <h2 class="heading-02">{{ subHeading }}</h2>
  </section>
</template>

<script>
export default {
  name: "heading",
  props: {
    heading: String,
    subHeading: String,
    projectName: String,
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 60px;
  .breadcrumbs {
    margin-bottom: 26px;
  }

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
  @media (min-width: 992px) {
    margin-bottom: 100px;
  }
}
</style>
