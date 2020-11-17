<template>
  <el-container>
    <!-- <el-asider width="200px">
      menu
    </el-asider> -->
    <el-container>
      <el-header>
        blog
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Home extends Vue {

}

</script>
