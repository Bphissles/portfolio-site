<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <nav id="main-nav">
    <RouterLink to="/">
      <img src="../assets/images/system/logo.png" alt="Ben Hislop">
    </RouterLink>
    <div class="nav-links">
      <p class=""><RouterLink to="/">Projects</RouterLink>  <i class="arrow"></i></p>
      <p class=""><RouterLink to="/style-guide">About</RouterLink> <i class="arrow"></i></p>
      <p class=""><RouterLink to="/style-guide">Contact</RouterLink> <i class="arrow"></i></p>
    </div>
  </nav>  
</template>

<style lang="scss" scoped>
#main-nav {
  padding: 30px;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-links {
    p {
      letter-spacing: 0.005em;
      margin-bottom: 14px;
      white-space: nowrap;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 640px) {
    padding-inline: 0;
    padding-bottom: 30px;
  }

  @media (min-width: 768px) {
    position: fixed;
    flex-direction: column;
    align-items: baseline;
    padding: 30px;
    padding-right: 23px;
    height: calc(100vh - 60px);
    width: 153px;
    left: 0;
    top: 0;
  }

  @media (min-width: 992px) {
    padding: 60px 26px 60px 55px;
    height: calc(100vh - 120px);
  }
  
  @media (min-width: 1200px) {
    padding: 60px 0px 60px 55px;
  }
}
</style>
