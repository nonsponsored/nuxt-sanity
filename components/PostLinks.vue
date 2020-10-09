<template>
  <div>
    <router-link :to="`/post/${this.posts[0].slug}`" :class="`${linkClass}`"
      >MLS4THLOU</router-link
    >
    <router-link :to="`/post/${this.posts[1].slug}`" :class="`${linkClass}`"
      >Pulisic</router-link
    >
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";

const query = groq`*[_type == "post"]`;

export default {
  async fetch() {
    this.posts = await this.$sanity.fetch(query);
  },
  fetchOnServer: true,
  data() {
    return {
      posts: [],
    };
  },
  props: {
    linkClass: null,
  },
  methods: {},
};
</script>