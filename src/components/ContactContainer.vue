<template>
  <div>
    <h3 class="heading-03 underline" v-for="data in sampleData">
      <a :href="data.link" target="_blank"><i :class="data.icon"></i> {{ data.title }}</a>
    </h3>
  </div>
</template>

<script>
export default {
  name: "contact-container",
  data() {
    return {
      sampleData: [
        {
          icon: 'fa-brands fa-linkedin',
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/benjaminhislop/'
        },
        
        {
          icon: 'fa-brands fa-github',
          title: 'Github',
          link: 'https://github.com/Bphissles'
        }
      ]
    }
  }
}
</script>
