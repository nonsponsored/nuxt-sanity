<template>
  <main>
    <h1 class="title">Hello</h1>

    <ul>
      <li v-for="person in sanityPeople" :key="person._id">
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

    <nuxt-link to="/page-1/" class="button--green">Pulisic</nuxt-link>
    <nuxt-link to="/page-2/" class="button--green">MLS4THLOU</nuxt-link>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      social: "",
    };
  },
  computed: {
    ...mapState(["sanityPeople"]),
  },
};
</script>