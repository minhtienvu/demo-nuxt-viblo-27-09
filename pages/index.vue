<template>
  <div>
    <h2>Danh sach bai viet moi nhat viblo</h2>
    <post-list :posts="posts"></post-list>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
import PostList from '~/components/List.vue';
export default {

  fetch({ store }) {
    return axios.get('https://viblo.asia/api/posts?limit=10')
    .then((res) => {
      store.commit('put', res.data.data)
    })
  }, 

  computed: {
    posts() {
      return this.$store.state.posts
    }
  },

  components: {
    PostList,
  }
};
</script>


