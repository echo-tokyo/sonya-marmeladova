<script setup>
import CustomBtn from '../../ui/CustomBtn.vue'

const handleButtonClick = () => {
	alert('В разработке')
}

</script>

<template>
	<section class='flex items-center justify-between mt-16'>
		<div class="flex flex-col gap-10">
			<div>
				<h1 class='font-black text-light-yellow test'>Web design & <br> development</h1>
				<p class='mt-4 text-light-purple'>WHooooaao yoooo wazzup dude i can design or <br> develop your site cuz im so cool IT man</p>
			</div>
			<div class="flex gap-10">
				<CustomBtn textContent='Button' clr='pink' @click="handleButtonClick(e)"/>
				<CustomBtn textContent='Button' clr='transparent' @click="handleButtonClick(e)"/>
			</div>
		</div>
		<img src="../../../../public/digital_artist_male-Photoroom 1.png" alt="" class='img'>
	</section>
</template>

<style scoped>
	.img{
		width: 35%;
	}
</style>