<template>
	<header class='flex items-center relative'>
		<h3 class='mr-auto font-black text-primary'>Web dev</h3>
		<nav class='flex gap-10 absolute left-1/2 transform -translate-x-1/2  font-semibold'>
			<p class='text-light-purple'>Services</p>
			<p class='text-btn-disabled'>Header</p>
			<p class='text-btn-disabled'>Header</p>
		</nav>
	</header>
</template>

<style scoped>
header h3, header p{
	cursor: pointer;
}
.text-btn-disabled{
	cursor: default;
}
</style>