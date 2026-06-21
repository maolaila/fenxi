# H5-v2 蓝白活动页头部固定渐变记录

- 记录时间：2026-06-21
- 端：h5-v2
- 版面：蓝白版面，`views7`
- 页面/路由：优惠活动页，`#/active`
- 影响路径：`h5-v2/src/views7/active/active.vue`
- 来源分支：`origin/BY8363-DS`
- 演示站基准：`origin/BY-Demo-H5V2-PC`
- 功能域：活动/红包/推广/下载、主题/颜色/静态资源

## 已确认功能

蓝白版面活动页的顶部活动分类导航固定使用蓝青渐变：

```less
.active-page {
  .van-tabs__nav--complete,
  .van-tabs__nav {
    background-image: linear-gradient(90deg, #2161fe 0%, #39e2e6 100%);
  }
}
```

该样式不随商户主题色切换，优先保留蓝白活动页视觉一致性。

## 本次同步状态

- 演示站分支 `BY-Demo-H5V2-PC` 已同步并推送，提交 `8ef73453c`。
- 客户分支已逐个核对远端 `h5-v2/src/views7/active/active.vue`，均确认存在非注释的固定渐变样式。
- 浏览器视觉验证：`http://localhost:9000/#/active`，移动端 375x812，顶部分类导航显示蓝青渐变；运行时 computed style 为 `linear-gradient(90deg, rgb(33, 97, 254) 0%, rgb(57, 226, 230) 100%)`。

