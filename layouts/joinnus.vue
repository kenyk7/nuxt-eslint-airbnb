<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Joinnus',
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
          href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../scss/joinnus.scss';
</style>
