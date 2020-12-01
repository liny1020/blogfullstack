<template>
  <div class="header">
    <!-- <img class="logo" src="../assets/main/blogging.svg" /> -->
    <span>羊蜀黍</span>
    <div class="menu">
      <span>Join Us</span>
      <span>Login</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg?: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 35px;
    height: 35px;
  }
  span {
    font-weight: bold;
  }
  .menu span {
    display: inline-block;
    margin-left: 30px;
  }
}
</style>
