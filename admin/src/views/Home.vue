<template>
  <div class="home">
    <!-- <Primary />
    <Article /> -->
    <Articles />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Primary from "@/components/Home/Primary.vue"; // @ is an alias to /src
// import Article from "@/components/Home/Article.vue"; // @ is an alias to /src
import Articles from "@/components/Home/Articles.vue"; // @ is an alias to /src

@Component({
  components: {
    // Primary,
    // Article,
    Articles
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
.home{
  display: inline-block;
  width: 100%;
  max-width: 1800px;
}
</style>