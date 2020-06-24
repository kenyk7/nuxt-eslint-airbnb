<template>
  <div class="container mt-5">
    <div>
      <Logo />
      <h1 class="title">
        {{ hello }}
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-dark"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(ctx) {
    return ctx.store.state.tplLayout;
  },
  data() {
    return {
      title: 'Nuxt project',
    };
  },
  computed: {
    hello() {
      return `Hello ${this.title}`;
    },
  },
  mounted() {
    // console.log(process.env.NODE_ENV);
  },
};
</script>
