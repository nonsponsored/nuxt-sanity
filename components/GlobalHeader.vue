<template>
  <header class="global-header">
    <nuxt-link to="/">
      <div class="VueToNuxtLogo">
        <div class="Triangle Triangle--two" />
        <div class="Triangle Triangle--one" />
        <div class="Triangle Triangle--three" />
        <div class="Triangle Triangle--four" />
      </div>
    </nuxt-link>
    <nav>
      <postLinks />
    </nav>
  </header>
</template>

<style lang="scss">
.global-header {
  background-color: #ccc;
  padding: 20px;
  text-align: center;
}

nav {
  a {
    color: #35495e;
    font-weight: bold;
    padding: 0 10px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover:not(.nuxt-link-active) {
      text-decoration: underline;
    }
  }

  .nuxt-link-active {
    color: #000;
  }
}

.VueToNuxtLogo {
  display: block;
  margin: 0 auto 50px;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
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