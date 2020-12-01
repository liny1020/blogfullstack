<template>
  <el-container class="container">
    <!-- <el-asider width="200px">
      menu
    </el-asider> -->
    <el-container class="content">
      <el-header style="padding: 0 30px">
        <Header />
      </el-header>
      <el-main style="padding: 0">
        <router-view />
      </el-main>
      <!-- <el-footer>
        <Footer />
      </el-footer> -->
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.container {
  padding: 0 100px;
  height: 100vh;
  background-color: #f6f9fc;
}
@media screen and (max-width: 1200px) {
  .container {
    padding: 0;
  }
}
.content {
  background-color: #fff;
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.08);
}
</style>
