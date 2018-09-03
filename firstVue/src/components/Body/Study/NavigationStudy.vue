<!-- 左侧导航栏 -->
<template>
  <div class="container-fluid">
  <!-- 导航栏内容 -->
    <transition name="munu">
      <div class="row munuList" v-if="show">
        <div class="col-md-2 navigation">
          <ul class="nav nav-tabs nav-stacked navbar-inverse">
            <li>
              <router-link to='/study/indexstudy'>首页</router-link>
            </li>
            <li>
              <a href="#systemSetting" class="nav-header collapsed" data-toggle="collapse">
                系统管理
                <span class="pull-right glyphicon glyphicon-chevron-down"></span>
              </a>
              <ul id="systemSetting" class="nav nav-list collapse secondmenu" style="height: 0px;">
                <li><a href="mytask"><i class="glyphicon glyphicon-user"></i>用户管理</a></li>
                <li><a href="#"><i class="glyphicon glyphicon-th-list"></i>菜单管理</a></li>
                <li><a href="#"><i class="glyphicon glyphicon-asterisk"></i>角色管理</a></li>
                <li><a href="#"><i class="glyphicon glyphicon-edit"></i>修改密码</a></li>
                <li><a href="#"><i class="glyphicon glyphicon-eye-open"></i>日志查看</a></li>
              </ul>
            </li>
            <li>
              <a href="./plans.html">物料管理</a>
            </li>
            <li>
              <a href="./grid.html">分发配置</a>
            </li>
            <li>
              <a href="./charts.html">图表统计</a>
            </li>
            <li>
              <a href="#">关于系统</a>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <!-- 导航栏背景图片
	  导航栏显示 -->
    <transition name="leaveMunu">
      <div v-if="show" class="imgMunuLeave" @click="show = !show">
      </div>
    </transition>
    <!-- 导航栏隐藏 -->
    <transition name="enterMunu">
      <div v-if="!show" class="imgMunuEnter" @click="show = !show">
      </div>
    </transition>
  </div>
</div>
</template>

<script>
  export default {
    name: 'NavigationLeft',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        show: true
      }
    },
    methods: {
      // enter: function (el, done) {
      // },
      // leave: function (el, done) {
      // }
    }
  }
</script>

<style scoped>
  .container-fluid {
    position: absolute;
    /*top: 68px;*/
    z-index: 10;
    opacity: 0.8
  }
  .imgMunuLeave {
    width: 180px;
    height: 400px;
    background-color: #222222;
    position: absolute;
    margin-left: -15px;
    top: 0px;
    z-index: -1;
  }
  .imgMunuEnter {
    width: 20px;
    height: 400px;
    background-color: #222222;
    position: absolute;
    margin-left: -15px;
    z-index: -1;
  }
  .navigation {
    width: 160px;
    padding: 0px;
  }
  .nav>li>a:focus, .nav>li>a:hover {
    background-color: #716767;
  }
  .navigationButton {
    float: left;
  }
  .munuList {
    z-index: 10;
    float: left;
  }
  /*导航栏列表   过渡*/
  .munu-enter-active {
    transition: all 1.5s linear;
    transition-delay: 2s;
  }
  .munu-leave-active {
    transition: all 0.4s;
    transition-delay: 0.3s;
  }
  .munu-enter, .munu-leave-to {
    opacity: 0;
  }
  /*导航栏背景动画*/
  /*消失*/
  .leaveMunu-enter-active {
    animation: leaveMunuLeave 3s;
  }
  .leaveMunu-leave-active {
    animation: leaveMunuEnter 3s;
  }
  .leaveMunu-enter, .leaveMunu-leave-to {
    opacity: 0;
  }
  @keyframes leaveMunuLeave {
    0% {width: 0px; opacity: 0}
    100% {width: 180px; opacity: 1}
  }
  @keyframes leaveMunuEnter {
    0% {width: 180px; opacity: 1}
    100% {width: 0px; opacity: 0}
  }
  /*导航载入*/
  .enterMunu-enter-active {
    animation: enterMunuEnter 0.1s;
    /*animation-delay: 3s;*/
  }
  .enterMunu-leave-active {
    animation: enterMunuLeave 0.1s;
  }
  .enterMunu-enter, .enterMunu-leave-to {
    opacity: 0;
  }
  @keyframes enterMunuEnter {
    0% {width: 0px; opacity: 0}
    100% {width: 20px; opacity: 0.8}
  }
  @keyframes enterMunuLeave {
    0% {width: 20px; opacity: 0.8}
    100% {width: 0px; opacity: 0}
  }
</style>