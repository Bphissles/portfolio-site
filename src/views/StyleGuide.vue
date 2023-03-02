<template>
  <main>
    <div class="font-wrap">
      <h1 class="heading-01">{{ hello }}</h1>
      <h2 class="heading-02">{{ hello }}</h2>
      <h3 class="heading-03">{{ hello }}</h3>
      <h4 class="heading-03 underline">{{ hello }}</h4>
      <h5 class="heading-03 light">{{ hello }}</h5>

      <p class="bold">{{ hello }}</p>
      <p class="bold italic">{{ hello }}</p>
      <p class="bold underline">{{ hello }}</p>
      <p>{{ hello }}</p>
      <p class="italic">{{ hello }}</p>
      <p class="underline">{{ hello }} <i class="arrow"></i></p>
    </div>
  </main>
</template>

<script>
export default {
  name: "style-guide",
  data() {
    return {
      hello: "its a me a mario",
    };
  },
};
</script>
