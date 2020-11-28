<template>
  <div class="home">
    <Primary />
    <Article />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Primary from "@/components/Home/Primary.vue"; // @ is an alias to /src
import Article from "@/components/Home/Article.vue"; // @ is an alias to /src

@Component({
  components: {
    Primary,
    Article,
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
.home{
  height: 100%;
}
</style>