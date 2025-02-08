<script setup>
import { onBeforeUnmount, onBeforeMount, ref } from 'vue'
import Hero from './components/hero/Hero.vue'
import Services from './components/services/Services.vue'

const hero = ref(null)
const services = ref(null)
let targetVal = 0
let currentVal = 0
let isAnimating = false
const isInitialized = ref(false)

const handleWheel = (event) => {
  if (window.scrollY === 0) {
    targetVal += event.deltaY

    targetVal = Math.max(0, Math.min(targetVal, 600))

    if (targetVal < 600) {
      event.preventDefault()
    }

    if (!isAnimating) {
      requestAnimationFrame(animate)
    }
  }
}

const animate = () => {
  isAnimating = true

  currentVal += (targetVal - currentVal) * 0.1

  hero.value.style.transform = `translateY(-${currentVal}px)`

  if (Math.abs(targetVal - currentVal) > 0.1) {
    requestAnimationFrame(animate)
  } else {
    isAnimating = false
  }
}

const initialize = async () => {
  console.log('Инициализация перед загрузкой страницы')
  await new Promise(resolve => setTimeout(resolve, 1000));
  isInitialized.value = true;
}

document.addEventListener('wheel', handleWheel, { passive: false })

onBeforeMount(() => {
  initialize()
})

onBeforeUnmount(() => {
  window.scrollTo(0,0)
  console.log('lol')
  document.removeEventListener('wheel', handleWheel)
})
</script>

<template>
  <div class="mask" v-if='!isInitialized'><div class="loader"></div></div>
  <div ref="hero" class="hero" v-if="isInitialized">
    <Hero />
  </div>
  <div ref="services" class="services" v-if="isInitialized">
    <Services />
  </div>
</template>

<style scoped>
.mask{
	width: 100%;
	height: 100%;
	position: fixed;
	background: #34274d;
	top: 0;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center; 
}
.loader{
	width: 75px;
	height: 75px;
	border: 6px solid #a371ff;
	border-left-color: 	#4e3975;
	border-radius: 50%;
	animation: loader 1s linear infinite;
}
@keyframes loader {
	100% {
		transform: rotate(360deg);
	}
}

.hero {
  position: relative;
  z-index: 2;
}
.services {
  position: absolute;
  bottom: 0;
  z-index: 1;
}
</style>