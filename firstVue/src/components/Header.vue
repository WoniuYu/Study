<!-- 项目头部导航栏
固定在页面头部 -->
<template>
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid">
			<!-- 定义响应式导航栏   和左侧图标-->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand headMark" href="#">
					<img src="" alt="图标" />
				</a>
			</div>

			<!-- 不进行折叠样式 -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li><router-link to="/home">首页</router-link></li>
					<li><router-link to="/home">组件</router-link></li>
					<li class="dropdown">
						<router-link to="/study" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">学习<span class="caret"></span></router-link>
						<ul class="dropdown-menu">
							<li><router-link to="/study">学习</router-link></li>
							<li><router-link to="/home">首页</router-link></li>
							<li><router-link to="/home">首页</router-link></li>
							<li role="separator" class="divider"></li>
							<li><router-link to="/home">首页</router-link></li>
							<li role="separator" class="divider"></li>
							<li><router-link to="/home">首页</router-link></li>
						</ul>
					</li>
					<li><router-link to="/home">放松</router-link></li>
					<li><router-link to="/home">关于</router-link></li>
				</ul>
				<!-- 登录右浮动 -->
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#">帮助</a></li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">登录 <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">Separated link</a></li>
						</ul>
					</li>
				</ul>
				<!-- 搜索框 -->
				<form class="navbar-form navbar-right searchTable">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
					</div>
					<button type="submit" class="btn btn-default">搜索</button>
				</form>
				
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>
</template>
<script>
	export default {
		name: 'Header',
		data () {
			return {
				msg: "header"
			}
		}
	}
</script>

<style scoped>
	.navbar {
		margin-bottom: 0px;
	}
	.headMark {
		width: 180px;
	}
	.searchTable {
		margin-right: 60px;
	}
</style>