<template>
  <div class="cover">
    <div class="top">
      <img src="../../assets/main/cover.jpg" alt="" />
    </div>
    <div class="buttom">
      <div class="info">
        <div class="row">
          <h3><a>Git学习笔记</a></h3>
        </div>
        <div class="row">
          <label for="">工程化</label>
          <span>December 12, 2020</span>
        </div>
      </div>
      <div class="footer">
        <div class="footer-left">BY <strong>linyang</strong></div>
        <div class="footer-right">
          <label for="">FE</label>
          <label for="">Project</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Cover extends Vue {
  @Prop() private msg?: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .top {
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      transition: all 0.3s ease-in-out;
      opacity: 1;
      &:hover {
        transform: scale(1.1);
        opacity: 0.9;
      }
    }
  }
  .buttom {
    .info {
      padding: 15px;
      .row {
        margin-bottom: 12px;
        line-height: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: left;
        &:last-child {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0;
          font-size: 13px;
          label {
            height: 20px;
            padding-right: 10px;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          line-height: 25px;
        }
      }
    }
    .footer {
      position: relative;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      border-top: 1px solid #f4f7f6;
      .footer-right {
        label {
          display: inline-block;
          margin-left: 10px;
          padding: 2px 8px;
          border-radius: 11px;
          color: #fff;
          &:nth-child(1){
            background: #9FD2D6;
          }
          &:nth-child(2){
            background: #8154EF;
          }
          &:nth-child(3){
            background: #FF4E4E;
          }
        }
      }
    }
  }
}
</style>
