<template>
  <div class="container-fluid">

    <div class="row" v-if="show">
      <div class="col-md-2 navigation">
        <ul class="nav nav-tabs nav-stacked navbar-inverse">
          <li>
            <a href="#">
              首页
            </a>
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
      <div class="navigationButton">
       <transition
       v-on:enter="enter"
       v-on:leave="leave"
       v-bind:css="false">
       <button v-if="show" v-model="show">点我</button>
       <button v-else>点我</button>
     </transition>
   </div>
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
      enter: function (el, done) {

      }
    }
  }
</script>

<style scoped>
  .container-fluid {
    position: absolute;
    top: 68px;
    left: -15px;
    z-index: 10;
  }
  .navigation {
    width: 160px;
    padding: 0px;
  }
  .nav>li>a:focus, .nav>li>a:hover {
    background-color: #716767;
  }
  .navigationButton {
    margin-left: 160px;
    height: 100%;
  }
</style>

