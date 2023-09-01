<script setup>
  import Comment from "@/components/Comment.vue";
  import Breadcrumbs from "@/components/Breadcrumbs.vue";
  import ImageLarge from "@/components/ImageLarge.vue"
</script>

<template>
  <article :class="'card project' + cardData.projectIndex"> <!-- ?depending on strategy this class may go away -->
    <div class="top">
      <Breadcrumbs :projectIndex="cardData.projectIndex" :totalCount="totalProjectCount" />
      <Comment class="comment" :kanye="true"  :comment="cardData.comment" />
    </div>
    <RouterLink :to="{name:'project', params: {project: cardData.slug}}">
      <ImageLarge :image="cardData.projectDetails.image" :altText="cardData.projectDetails.altText" class="shadow-drop-2-center" />
    </RouterLink>

    <div class="bottom">
      <div class="summary">
        <h3 class="heading-03 underline">
          <RouterLink :to="{name:'project', params: {project: cardData.slug}}">{{ cardData.title }}</RouterLink>
        </h3>
        <p>{{ cardData.summary }}</p>
        <p><span class="bold orange">Technology: </span> {{ cardData.projectDetails.software }}</p>
      </div>

      <div class="details">
        <p><span class="bold uppercase">Client </span> - {{ cardData.projectDetails.client }} </p>
        <p><span class="bold uppercase">Role </span> - {{ cardData.projectDetails.role }} </p>
        <p><span class="bold uppercase">Date </span> - {{ cardData.projectDetails.date }}</p>
      </div>
    </div>

  </article>
</template>

<script>
export default {
  name: 'project-preview-card',
  props: ['totalProjectCount', 'cardData'],
}
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
      h3 {
        transition: color .75s ease-in-out;
        &:hover {
          color: #FF4136;
        }
        a {
          transition: color .75s ease-in-out;
        }
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