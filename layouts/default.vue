<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Default',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Lorem ipsum',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../scss/default.scss';
</style>
