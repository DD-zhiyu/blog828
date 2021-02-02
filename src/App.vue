<template>
  <div id="app">
    <div id="nav" class="mx-1/5 mx-auto">
      <!-- 头部 -->
      <div
        class="w-4/6 mx-auto mx-2/6 lg:h-20 p-4 lg:mt-8 bg-white lg:rounded-lg head flex flex-row"
      >
        <div class="h-full flex flex-row">
          <div class="h-full w-12 rounded-full overflow-hidden">
            <img
              src="http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/stock-photo-1005217204-1-100x100.png"
              alt=""
            />
          </div>
          <div class="h-full ml-4 mr-10 my-auto">
            <h3><a class="text-lg leading-6 mb-4" href="">可可爱爱</a></h3>
            <p class="leading-6 text-gray-500 text-xs">
              <span>可可爱爱的demo站</span>
            </p>
          </div>
        </div>

        <div class="h-full flex flex-row">
          <div class="mx-2 my-auto">
            <a class="text-sm text-gray-500">
              <router-link :to="{ name: 'Home' }">首页</router-link></a
            >
          </div>
          <div class="mx-2 my-auto">
            <a class="text-sm text-gray-500">
              <router-link :to="{ name: 'doc' }">文档</router-link>
            </a>
          </div>
          <div class="mx-2 my-auto">
            <a class="text-sm text-gray-500">
              <router-link :to="{ name: 'game' }">游戏</router-link></a
            >
          </div>
          <div class="mx-2 my-auto">
            <a class="text-sm text-gray-500">
              <router-link :to="{ name: 'about' }">关于</router-link></a
            >
          </div>
          <div class="mx-2 my-auto">
            <a class="text-sm text-gray-500">
              <router-link :to="{ name: 'day' }">日志</router-link></a
            >
          </div>
          <div class="ml-6 my-auto">
            <img class="w-6 my-auto" src="..\public\icon\search.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="w-2/3 mx-auto mx-1/3">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <div
      class="w-2/3 mx-auto mx-1/3 h-16 mt-8 mb-12 p-2 bg-white rounded-lg text-gray-800 text-center"
    >
      <!-- 底部 -->
      <p class="text-base font-medium">Copyright © 2021</p>
    </div>
  </div>
</template>

<style>
html {
  background: #f1f2f9;
  margin: 0;
  padding: 0;
  font-family: "PingFang SC", "Lantinghei SC", "Helvetica Neue", Helvetica,
    Arial, "Microsoft YaHei", 微软雅黑, STHeitiSC-Light, simsun, 宋体,
    "WenQuanYi Zen Hei", "WenQuanYi Micro Hei", sans-serif;
}
</style>
