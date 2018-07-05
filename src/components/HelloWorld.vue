<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: { type: String, default: () => "" },
	},
}
</script>
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
a {
	color: #42b983;
}
</style>
