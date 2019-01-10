<template>
	<view class="content">
		<picker class="picker-item" mode="selector" :range="textList" @change="textChange">
			<view>数据格式为 Array 的选择器：{{textValue}}</view>
		</picker>
		<picker class="picker-item" mode="selector" :range="objList" range-key="text" @change="objChange">
			<view>数据格式为 Object Array 的选择器：{{objValue}}</view>
		</picker>
		<picker class="picker-item" mode="date" start="2018-01-01" end="2019-01-01" @change="dateChange">
			<view>日期选择器：{{date}}</view>
		</picker>
		<picker class="picker-item" mode="time" start="09:00" end="06:00" @change="timeChange">
			<view>时间选择器：{{time}}</view>
		</picker>
		<picker class="picker-item" mode="region" @change="areaChange" :value="area">
			<view>省市区选择器：{{area}}</view>
		</picker>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				textList: [
					'text1',
					'text2',
					'text3'
				],
				textValue: 0,
				objList: [{
					text: 'item1'
				}, {
					text: 'item2'
				}, {
					text: 'item3'
				}],
				objValue: 0,
				date: '2018-01-01',
				time: '09:00',
				area: ["山东省","青岛市","崂山区"]
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '新的标题'
			});
		},
		methods: {
			textChange(evt) {
				this.textValue = evt.detail.value;
			},
			objChange(evt) {
				this.objValue = evt.detail.value;
			},
			dateChange(evt) {
				this.date = evt.detail.value;
			},
			timeChange(evt) {
				this.time = evt.detail.value;
			},
			areaChange(evt) {
				console.log(evt)
				this.area = evt.detail.value;
			}
		}
	}
</script>

<style>

</style>
