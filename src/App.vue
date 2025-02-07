<script setup>
import { onBeforeUnmount, ref } from 'vue'
import Hero from './components/hero/Hero.vue'
import Services from './components/services/Services.vue'

const hero = ref(null)
const services = ref(null)
let targetVal = 0
let currentVal = 0
let isAnimating = false

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

document.addEventListener('wheel', handleWheel, { passive: false })

onBeforeUnmount(() => {
  document.removeEventListener('wheel', handleWheel)
})
</script>

<template>
  <div ref="hero" class="hero">
    <Hero />
  </div>
  <div ref="services" class="services">
    <Services />
  </div>
  <div class="lol">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem
    incidunt eius neque ratione. Voluptatum harum, autem ducimus necessitatibus
    possimus nemo optio ut maxime, similique ipsum inventore ipsam doloribus
    dicta!
  </div>
</template>

<style scoped>
.lol {
  height: 100vh;
}
.hero {
  position: relative;
  z-index: 1;
}
.services {
  position: absolute;
  bottom: 0;
}
</style>
