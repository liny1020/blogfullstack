<template>
  <el-container>
    <!-- <el-asider width="200px">
      menu
    </el-asider> -->
    <el-container>
      <el-header class="el-header">
        <Header />
      </el-header>
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
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

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
  // height: unset !important;
  background: #fff;
  padding: 0 30px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
}
.el-main {
  height: 100vh;
  padding: 60px 0 0;
  overflow-y: hidden;
}
</style>
