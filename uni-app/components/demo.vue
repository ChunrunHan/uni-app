<template>
	<view>
		{{title}}
		<view @click="edit">点击我啊</view>
	</view>
</template>

<script>
	export default {
		name: "page-demo",
		props:{
			title:{
				type: String,
				default: '全局组件对对对'
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			edit(){
				console.log("aaaaaaaaaaaaaaa")
				this.$emit('clickChildren','点击儿子了')
			}
		}
	}
</script>

<style>

</style>
