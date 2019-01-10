<template>
	<view class="content">
		<image @click="show" class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<page-demo @clickChildren="go" :title="title"></page-demo>
			<view>
				{{avatarUrl}}
				{{login}}
				{{userName}}
			</view>
			<button type="primary" @click="login">登陆</button>
			<button type="primary">获取用户信息</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import demo from '../../components/demo'
	import {api} from '../../common/js/api.js'
	import {util} from '../../common/js/util.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			'page-demo': demo
		},
		computed: {
			...mapState(['avatarUrl', 'login', 'userName'])
		},
		onLoad() {

		},
		methods: {
			go(msg) {
				console.log(msg)
				console.log("gogogoogogo")
				this.title = msg
			},
			show(e) {
				console.log(e)
				console.log("showshowshow")
			},
			login() {
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						console.log(res.provider)
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									console.log(JSON.stringify(loginRes));
									console.log(loginRes.code)
									util.get(api.getopenid(loginRes.code)).then(res=>{
										console.log(res)
									}).catch(err=>{
										console.log(res)
									})
								}
							});
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		text-align: center;
		height: 400upx;

		.logo {
			height: 200upx;
			width: 200upx;
			margin-top: 200upx;
		}

		.title {
			font-size: 36upx;
			color: #8f8f94;
		}

	}
</style>
