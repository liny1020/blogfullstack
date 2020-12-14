<template>
  <el-container>
    <!-- <el-asider width="200px">
      menu
    </el-asider> -->
    <el-container>
      <el-header class="el-header">
        <Header />
      </el-header>
      <div class="banner"><img src="../assets/main/banner.jpg" alt="" /></div>
      <el-main class="el-main">
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

<style lang="scss" scoped>
.el-header {
  position: fixed;
  z-index: 1;
  width: 100%;
  background: #fff;
  padding: 0 30px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
}
.el-main {
  padding: 0;
}
.banner {
  position: relative;
  width: 100%;
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
</style>
