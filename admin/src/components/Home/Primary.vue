<template>
  <div class="primary">
    <div class="covers"></div>
    <div class="info">
      <div class="head">
        <label for="">TagsTagsTags</label>
        <span>02 NOV 2020</span>
      </div>
      <h1>
        标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
      </h1>
      <p>
        摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要...
      </p>
      <div class="btn">Learn More</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Primary extends Vue {
  @Prop() private msg?: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.primary {
  height: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}
.covers {
  height: 90%;
  width: 35%;
  background: #eee;
  border-radius: 10px;
}
.info {
  margin: 0 190px 0 120px;
  flex: 1;
  text-align: left;
}
.head {
  display: flex;
  justify-content: space-between;
}
label {
  font-weight: bold;
  color: #6f6f6f;
}
span {
  font-weight: bold;
  color: #d0d0d0;
}
h1 {
  font-size: 35px;
}
p {
  font-size: 14px;
  color: #6d6d6d;
  line-height: 2;
}
.btn {
  margin-top: 35px;
  font-size: 14px;
  color: #6d6d6d;
  font-weight: bold;
}
</style>
