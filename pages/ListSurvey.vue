<template>
  <div>
    <h1>Day la danh sach survey</h1>
    <post-list :posts="posts"></post-list>
  </div>

</template>

<script>
import axios from 'axios'
import PostList from '~/components/List.vue';
export default {

  fetch({ store }) {
    return axios.get('https://viblo.asia/api/posts?limit=10')
    .then((res) => {
      store.commit('list_survey', res.data.data)
    })
  }, 

  computed: {
    posts() {
      return this.$store.state.surveys
    }
  },

  components: {
    PostList,
  }
};
</script>
