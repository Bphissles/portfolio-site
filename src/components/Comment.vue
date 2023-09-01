<template>
  <p v-if="kanye" class="green">/* {{ yeezySays }} */</p>
  <p v-else class="green">/* {{ comment }} */</p>
  
</template>

<script>
import axios from 'axios'
export default {
  name: "comment",
  props: {
    kanye: Boolean,
    comment: String,
  },
  data() {
    return {
      yeezySays: 'Wake Up'
    }
  },
  mounted() {
    axios.get(`https://api.kanye.rest/`).then(response => {
      this.yeezySays = response.data.quote
    })
  }
};
</script>