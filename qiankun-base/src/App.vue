<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!--基座中可以放自己的路由-->
      <el-menu-item index="/">Home</el-menu-item>
      <!--引用其他子应用-->
      <el-menu-item index="/vue/">vue应用</el-menu-item>
      <el-menu-item index="/vue01/">vue应用01</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue"></div>
    <div id="vue01"></div>
    <!--<img src="./assets/zzh.jpg" alt="">-->
  </div>
</template>
