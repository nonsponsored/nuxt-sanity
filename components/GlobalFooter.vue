<template>
  <footer>
    <h6>Footer</h6>

    <postLinks />
  </footer>
</template>

<style lang="scss">
footer {
  background-color: rgb(53, 73, 94);
  color: #fff;
  padding: 50px;
  text-align: center;

  a {
    color: #fff;
    padding: 0 10px;
  }

  .nuxt-link-active {
    font-weight: bold;
    text-decoration: none;
  }
}
</style>

<script>
import postLinks from "~/components/PostLinks.vue";

export default {
  components: {
    postLinks,
  },
};
</script>