<script setup>
import Hero from './components/hero/Hero.vue'
import Services from './components/services/Services.vue'
import { onMounted } from 'vue'

// onMounted(() => {
//   gsap.registerPlugin(ScrollTriger, ScrollSmoother)
//   ScrollSmoother.create({
//     smooth: 1,
//     effects: true,
//   })
// })

</script>

<template>
	<div class="wrapper">
		<div class="content">
			<Hero />
			<Services />
		</div>
	</div>
</template>
