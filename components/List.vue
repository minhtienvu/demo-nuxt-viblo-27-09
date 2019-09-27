<template>
  <div class="post-list">
    <div class="posts">
      <post v-for="post in posts" :key="post.id" :post="post"></post>
    </div>
  </div>
</template>

<style>
.post-list {
  text-align: center;
  margin: 5rem;
}
.posts {
  flex-wrap: wrap;
  justify-content: space-around;
}

a {
    text-decoration: none;
    padding: 10px 15px;
    background: #1CB593;
    color: #fff;
    text-transform: uppercase;
    border-radius: 4px;
    border: none;
}
</style>

<script>
import Post from './Post.vue'
export default {
  props: ['posts'],
  components: {
    Post
  }
}
</script>