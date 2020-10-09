<template>
  <main>
    <article v-for="post in this.posts" :key="post._id">
      <h1>{{ post.title }}</h1>
      <h2>{{ post.sub_title }}</h2>
      <figure>
        <SanityImage
          :asset-id="post.hero_image.asset._ref"
          :alt="post.hero_image.alt_text"
          auto="format"
        />
        <!--
        <img
          :src="urlFor(post.hero_image).width(680).url()"
          :alt="post.hero_image.alt_text"
        />
        -->
        <figcaption>{{ post.caption }}</figcaption>
      </figure>

      <SanityContent :blocks="post.post_text" />
    </article>

    <nuxt-link to="/" class="button--green">Home</nuxt-link>
    <nuxt-link to="/page-1/" class="button--green">Pulisic</nuxt-link>
    <nuxt-link to="/page-2/" class="button--green">MLS4THLOU</nuxt-link>
  </main>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { urlFor } from "../../store/modules/sanity-img-builder.js";

const query = groq`*[_type == "post"]`;

export default {
  async fetch() {
    this.posts = await this.$sanity.fetch(query);

    console.log(this.posts);
  },
  fetchOnServer: true,
  data() {
    return {
      posts: [],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title,
        },
      ],
    };
  },
  methods: {
    urlFor,
  },
};
</script>