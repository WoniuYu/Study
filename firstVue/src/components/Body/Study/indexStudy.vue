<!-- 学习模块首页 -->
<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-3 col-md-offset-2">
					<p>{{indexx}}</p>
				</div>
				<div class="col-md-2">
					<button v-on:click="addcount()">+</button>
				</div>
			</div>
		</div>
		<transition name="tools" mode="out-in">
			<div class="tools">
				<form class="form-horizontal tools" v-if="show">
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-5 control-label">Password</label>
						<div class="col-sm-7">
							<input type="password" class="form-control" id="inputPassword3" placeholder="Password">
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-5 control-label">Password</label>
						<div class="col-sm-7">
							<input type="checkbox" class="toolsCheckBox">
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-5 control-label">Password</label>
						<div class="col-sm-7">
							<input type="radio" class="toolsCheckBox">
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-5 control-label">Password</label>
						<div class="col-sm-7">
							<select class="selectpicker" style="width:100%;height:30px">
								<option>A</option>
								<option>B</option>
								<option>C</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-5 control-label">Password</label>
						<div class="col-sm-7">
							<div class="progress">
								<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
									<span class="sr-only">20% Complete</span>
								</div>
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<button type="button" class="btn btn-default" @click="showTools()">Sign</button>
						</div>
					</div>
				</form>
				<div v-if="!show">
					<button type="button" class="btn btn-default" @click="showTools()">Sign</button>
				</div>
			</div>

		</transition>
	</div>
</template>

<script>
	export default {
		name: 'indexStudy',
		data() {
			return {
				indexx: 0,
				name: "yu",
				show: true
			}
		},
		methods: {
			addcount: function(event) {
				this.indexx = this.indexx + 1;
			},
			showTools() {
				this.show = !this.show;
			}
		}

	}
</script>
<style scoped>
	.tools {
		float: right;
	}
	.control-label {
		text-align: left;
	}
	.toolsCheckBox {
		width: 20px;
		height: 20px;
		margin: auto;
	}

	/*工具栏动画*/
	.tools-enter-active {
		transition: all 1.5s linear;
		/*transition-delay: 2s;*/
	}
	.tools-leave-active {
		transition: all 0.4s;
		transition-delay: 0.3s;
	}
	.tools-enter, .tools-leave-to {
		opacity: 0;
	}
</style>