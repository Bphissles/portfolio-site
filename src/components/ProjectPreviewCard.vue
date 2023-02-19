<script setup>
import Comment from "../components/Comment.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import ImageLarge from "../components/ImageLarge.vue";
</script>

<template>
  <article :class="'card project' + cardData.projectIndex">
    <!-- ?depending on strategy this class may go away -->
    <div class="top">
      <Breadcrumbs
        :projectIndex="cardData.projectIndex"
        :totalCount="totalProjectCount"
      />
      <Comment class="comment" :comment="cardData.comment" />
    </div>
    <ImageLarge
      :image="cardData.projectDetails.image"
      :altText="cardData.projectDetails.altText"
    />

    <div class="bottom">
      <div class="summary">
        <h1 class="heading-03 underline">{{ cardData.title }}</h1>
        <p>{{ cardData.summary }}</p>
        <p>
          <span class="bold">Technology: </span>
          {{ cardData.projectDetails.software }}
        </p>
      </div>

      <div class="details">
        <p>
          <span class="bold uppercase">Client </span> -
          {{ cardData.projectDetails.client }}
        </p>
        <p>
          <span class="bold uppercase">Role </span> -
          {{ cardData.projectDetails.role }}
        </p>
        <p>
          <span class="bold uppercase">Date </span> -
          {{ cardData.projectDetails.date }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "project-preview-card",
  props: ["totalProjectCount", "cardData"],
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 72px;
  .top {
    margin-bottom: 24px;
    .comment {
      margin-bottom: 0;
    }
  }

  .bottom {
    margin-top: 24px;
    .summary {
      margin-bottom: 24px;
      & > * {
        margin-bottom: 12px;
      }
    }
  }

  @media (min-width: 640px) {
    margin-bottom: 48px;
    .details {
      display: flex;
      flex-direction: column;
      width: max-content;
      margin-left: auto;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 72px;
    .top {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media (min-width: 992px) {
    .bottom {
      display: flex;
      .summary {
        margin-right: 50px;
      }

      .details {
        width: -webkit-fill-available;
        white-space: nowrap;
      }
    }
  }
  @media (min-width: 1200px) {
    &:nth-child(even) {
      margin-left: 100px;
    }
    &:nth-child(odd) {
      margin-right: 100px;
    }

    .bottom {
      .summary {
        margin-right: 195px;
      }
    }
  }
}
</style>
