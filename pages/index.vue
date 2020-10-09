<template>
  <main>
    <h1 class="title">Hello</h1>

    <ul>
      <li v-for="person in this.people" :key="person._id">
        {{ person.name }}

        <ul v-if="person.social">
          <li v-if="person.social.twitter">
            <a :href="person.social.twitter">Twitter</a>
          </li>
          <li v-if="person.social.instagram">
            <a :href="person.social.instagram">Instagram</a>
          </li>
          <li v-if="person.social.github">
            <a :href="person.social.github">Github</a>
          </li>
          <li v-if="person.social.linkedin">
            <a :href="person.social.linkedin">LinkedIn</a>
          </li>
          <li v-if="person.social.website">
            <a :href="person.social.website">Website</a>
          </li>
        </ul>
      </li>
    </ul>

    <postLinks :linkClass="`button--green`" />
  </main>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { urlFor } from "../store/modules/sanity-img-builder.js";
import postLinks from "~/components/PostLinks.vue";

const query = groq`*[_type == "person"]`;
const query2 = groq`*[_type == "post"]`;

export default {
  async fetch() {
    this.people = await this.$sanity.fetch(query);

    this.posts = await this.$sanity.fetch(query2);

    //console.log(this.people);
  },
  fetchOnServer: true,
  components: {
    postLinks,
  },
  data() {
    return {
      people: [],
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