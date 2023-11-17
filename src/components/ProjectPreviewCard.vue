<script setup>
  import Comment from "@/components/Comment.vue";
  import Breadcrumbs from "@/components/Breadcrumbs.vue";
  import ImageLarge from "@/components/ImageLarge.vue"
</script>

<template>
  <article :class="'card project' + cardData.projectIndex"> <!-- ?depending on strategy this class may go away -->
    <div class="top">
      <Breadcrumbs :projectIndex="cardData.projectIndex" :totalCount="totalProjectCount" />
      <Comment class="comment" :kanye="false"  :comment="cardData.comment" />
    </div>
    <RouterLink v-if="preview" :to="{name:'project', params: {project: cardData.slug}}">
      <ImageLarge :image="cardData.projectDetails.mainImage" :altText="cardData.projectDetails.altText" class="shadow-drop-2-center" />
    </RouterLink>
    <ImageLarge v-else :image="cardData.projectDetails.mainImage" :altText="cardData.projectDetails.altText" />

    <div class="bottom">
      <div class="summary">
        <h3 class="heading-03 underline" v-if="preview">
          <RouterLink :to="{name:'project', params: {project: cardData.slug}}">{{ cardData.title }}</RouterLink>
        </h3>
        <p>{{ cardData.summary }}</p>
        <p class="technology"><span class="bold orange">Technology: </span> <span v-html="cardData.projectDetails.software"></span></p>
      </div>

      <div class="details">
        <p><span class="bold uppercase">Client </span> - <span v-html="cardData.projectDetails.client"></span> </p>
        <p v-if="!preview"><span class="bold uppercase">Site </span> - <span><a :href="cardData.projectDetails.url" target="_blank" rel="noopener noreferrer">{{ cardData.projectDetails.site }}</a></span> </p>
        <p><span class="bold uppercase">Role </span> - <span v-html="cardData.projectDetails.role"></span> </p>
        <p><span class="bold uppercase">Date </span> - {{ cardData.projectDetails.date }}</p>
      </div>
    </div>
  </article>

  <div class="additional-content" v-if="!preview">
    <div v-for="content in cardData.additionalImages">
      <Comment class="comment" :kanye="false"  :comment="content.comment" />
      <ImageLarge :image="content.image" :altText="content.altText" />
      <p class="description" v-html="content.description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project-preview-card',
  props: ['totalProjectCount', 'cardData', 'preview'],
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 72px;
  .details {
      display: flex;
      flex-direction: column;
      width: max-content;
      // margin-left: auto;
      p {
        display: flex;
        gap: 10px;
      }
    }
  .top {
    margin-bottom: 24px;
    .comment {
      margin-bottom: 0;
      max-width: 400px;
    }
  }

  .bottom {
    margin-top: 24px;
    .summary {
      margin-bottom: 24px;
      & > * {
        margin-bottom: 12px;
      }
      h3 {
        transition: color .75s ease;
        &:hover {
          color: #FF4136;
        }
        a {
          transition: color .75s ease;
        }
      }
    }
  }
  
  @media (min-width: 640px) {
    margin-bottom: 48px;
    .details {
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

        .technology {
          display: flex;
          gap: 10px;
        }
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

.additional-content {
  .comment {
    text-align: right;
  }
  .description {
    margin-top: 24px;
    margin-bottom: 36px;
    max-width: 800px;
  }
}
//animation test
.shadow-drop-2-center {
	&:hover,:active {
    animation: shadow-drop-2-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
}

@keyframes shadow-drop-2-center {
  0% {
    transform: translateZ(0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    transform: translateZ(50px);
    box-shadow: 0 0 20px 0px #8BE9FD;
  }
}
</style>