<!-- 学习模块
左侧导航栏作为组件引入
主体内容由二级路由跳转 -->
<template>
	<div class="context">
		<NavigationStudy>
			<!-- 这是左侧导航栏 -->
		</NavigationStudy>
		<div>
			<!-- 主体内容 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import NavigationStudy from './NavigationStudy.vue'
	export default {
		name: 'Study',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
				show: true
			}
		},
		components: {
			'NavigationStudy':NavigationStudy
		}
	}
</script>

<style scoped>
	.context {
		position: absolute;
		top: 50px;
		z-index: 10;
		width: 100%;
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
</style>