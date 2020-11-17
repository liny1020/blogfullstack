<template>
  <div class="footer">
    Copyright © 2020- 2023 个人博客 个人网站
    <p>好好学习 天天向上</p>
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
<style scoped>
.footer {
  font-size: 13px;
  line-height: 2;
}
p {
  margin: 0;
}
</style>
