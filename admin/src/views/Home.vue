<template>
  <div class="home">
    <!-- <Primary />
    <Article /> -->
    <div class="banner"><img src="../assets/main/banner.jpg" alt="" /></div>
    <Articles />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Primary from "@/components/Home/Primary.vue"; // @ is an alias to /src
// import Article from "@/components/Home/Article.vue"; // @ is an alias to /src
import Articles from "../components/Home/Articles.vue"; // @ is an alias to /src

@Component({
  components: {
    // Primary,
    // Article,
    Articles,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  // max-width: 1800px;
  .banner {
    position: relative;
    padding-bottom: 45%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
@media screen and (max-width: 700px) {
  .banner {
    padding-bottom: 60%!important;
  }
}
</style>
