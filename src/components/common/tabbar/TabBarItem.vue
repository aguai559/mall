<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name:"tabBarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return {
				// isActive:true
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
				// return this.$router.path ==this.path?true:false
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path).catch(res=>console.log(res))
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		height: 49px;
		font-size: 14px;
		text-align: center;
		/* background: pink; */
	}
	.tab-bar-item img{
		/* margin-top: 3px; */
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
	.active{
		color: red;
	}
</style>
