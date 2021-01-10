<template>
  <div class="articles">
    <h2>Articles & Notes</h2>
    <el-row :gutter="35">
      <el-col
        v-for="(item, index) in list"
        :key="index"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6"
        ><div class="item" @click="goDetail(item, index)"><Cover /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Cover from "./Cover.vue";
import { getArticles } from "../../api/articles";

@Component({
  components: {
    Cover,
  },
})
export default class Primary extends Vue {
  @Prop() private msg?: string;

  public list: any = [];

  private goDetail(item: any, index: number) {
    console.log(item, index);
    this.$router.push({
      name: "article",
      params: {
        id: index.toString(),
      },
    });
  }

  @Watch("list")
  public listWatch(oldVal: any, newVal: any) {
    console.log(oldVal, newVal);
  }

  created() {
    this.fetchData();
  }
  private async fetchData() {
    const { data } = await getArticles({
      /* Your params here */
    });
    this.list = data.items;
    // Just to simulate the time of the request
    setTimeout(() => {}, 0.5 * 1000);
  }

  mounted() {
    this.list = [{}, {}, {}, {}, {}, {}];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.articles {
  // height: calc(100vh - 60px);
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

@media screen and (max-width: 700px) {
  .articles {
    padding: 0 30px;
  }
}
</style>
