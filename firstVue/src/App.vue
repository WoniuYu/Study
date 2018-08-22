<template>
  <div id="app">
    <app-header></app-header>
    <navigation-left class="top"></navigation-left>
    <template>
      <router-view class="bottom"></router-view>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .top {
    position: absolute;
    top: 68px;
    left: 0px;
    z-index: 10;
  }
</style>
