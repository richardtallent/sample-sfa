<template>
  <div id="app">
    <img src="./logo.png">
    <HelloWorld msg="Welcome to Your Single File Application!"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"

export default {
	name: "App",
	components: {
		HelloWorld,
	},
}
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
