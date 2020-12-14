<template>
  <div class="articles">
    <h2>Articles & Notes</h2>
    <el-row :gutter="35">
      <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6"
        ><div class="item"><Cover /></div
      ></el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6"
        ><div class="item"><Cover /></div
      ></el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6"
        ><div class="item"><Cover /></div
      ></el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6"
        ><div class="item"><Cover /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Cover from './Cover.vue';

@Component({
  components: {
    Cover
  }
})
export default class Primary extends Vue {
  @Prop() private msg?: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.articles {
  height: calc(100vh - 60px);
  padding: 0 66px;
  h2 {
    margin: 30px 0 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }
  .item {
    position: relative;
    margin-bottom: 30px;
    padding-bottom: 110%;
    box-shadow: 0px 2px 9px 0px rgb(0 0 0 / 15%);
  }
}
</style>
