<template>
  <div class="copy-body">
    <p class="bold">{{ heading }}</p>
    <p>{{ bodyCopy }}</p>
  </div>
</template>

<script>
export default {
  name: "heading-with-copy",
  props: ["heading", "bodyCopy"],
};
</script>