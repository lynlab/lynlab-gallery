<template>
  <div class="index">
    <h2>LYnGallery</h2>
    <div class="group" v-for="group in groups" :key="group.groupName">
      <h3>{{ group.groupName }}</h3>
      <span v-for="photo in group.photos" :key="photo.src">
        <a :href="photo.src"><img class="image" :src="photo.thumbnail"></a>
      </span>
    </div>
  </div>
</template>

<script>
import { getGalleryGroups } from '../../lib/lynlab';

export default {
  name: 'Index',
  methods: {
    async loads() {
      this.groups = await getGalleryGroups();
    },
  },
  data() {
    return { groups: [] };
  },
  beforeCreate() {
    if (!this.$session.get('state-auth')) {
      this.$router.push('/login');
    }
  },
  created() {
    this.loads();
  },
};
</script>

<style>
  body {
    background-color: #fafafa;
    margin: 0;
  }
  .group {
    display: inline-block;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0;
    background-color: #ffffff;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
  }
  .group > h3 {
    margin: 0.7rem 0 0.7rem 0;
    font-family: 'NanumSquare', sans-serif;
  }
  .group > p {
    margin: 0.2rem 0 0.7rem 0.7rem;
    font-size: small;
  }
  .group .image {
    float: left;
    width: 33%;
    padding-bottom: 0.33%;
  }
  .group a:nth-of-type(3n + 1) > .image {
    padding-right: 0.33%;
  }
  .group a:nth-of-type(3n + 2) > .image {
    padding-right: 0.33%;
  }
</style>
