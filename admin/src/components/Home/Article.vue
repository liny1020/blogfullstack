<template>
  <div class="article">
    <div class="left">
      <h1>
        标题标题标题标题标题标题标题标
      </h1>
      <div class="head">
        <label for="">TagsTagsTags</label>
        <span>02 NOV 2020</span>
      </div>
      <div class="covers"></div>
      <div class="btn">All articles</div>
    </div>
    <div class="right">
      <div class="items">
        <div class="cover"></div>
        <div class="info">
          <h3>标题标题标题标题标题标题标题标</h3>
          <p>
            概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述
          </p>
          <div class="btns">Read more</div>
        </div>
      </div>
      <div class="items">
        <div class="cover"></div>
        <div class="info">
          <h3>标题标题标题标题标题标题标题标</h3>
          <p>
            概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述
          </p>
          <div class="btns">Read more</div>
        </div>
      </div>
      <div class="items">
        <div class="cover"></div>
        <div class="info">
          <h3>标题标题标题标题标题标题标题标</h3>
          <p>
            概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述
          </p>
          <div class="btns">Read more</div>
        </div>
      </div>
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
.article {
  height: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 30px;
}
.left {
  width: 40%;
  text-align: left;
}
.right {
  margin-left: 100px;
  flex: 1;
}
.head {
  display: flex;
  justify-content: space-between;
}
.covers {
  margin-top: 20px;
  height: 50%;
  background: #eee;
  border-radius: 10px;
}
.btn {
  display: inline-block;
  margin-top: 35px;
  width: 150px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 50px;
  font-size: 14px;
  background: #ff6e8e;
  color: #fff;
  font-weight: bold;
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
.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.cover {
  width: 100%;
  height: 200px;
  background: #eee;
  border-radius: 10px;
}
.info {
  margin-left: 20px;
  text-align: left;
}
.btns {
  color: aqua;
}
</style>
