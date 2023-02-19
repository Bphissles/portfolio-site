<script setup>
import { onMounted } from "vue";
import Comment from "./Comment.vue";
import SecondaryPreviewCard from "./SecondaryPreviewCard.vue";
</script>
<template>
  <section class="tile-container">
    <h2 class="heading-02">{{ heading }}</h2>
    <div class="tiles">
      <SecondaryPreviewCard v-for="card in cardCount" />
    </div>
    <Comment class="comment" comment="Space for another comment" />
  </section>
</template>

<script>
export default {
  name: "tile-container",
  props: ["heading", "cardCount"],
  components: { SecondaryPreviewCard },
  data() {
    return {}
  },
  Mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
.tile-container {
  margin-top: 8px;
  .tiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
      flex: 0 0 47%;
    }
  }

  .comment {
    text-align: end;
  }

  @media (min-width: 640px) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    margin-top: 8px;
  }
  @media (min-width: 992px) {
    margin-top: 28px;
  }

  @media (min-width: 1200px) {
    .tiles {
      .card {
        flex: 0 0 31%;
      }
    }
  }
}
</style>
