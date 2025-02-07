<script setup>
import { onBeforeUnmount, ref } from 'vue'
import Hero from './components/hero/Hero.vue';
import Services from './components/services/Services.vue';

const hero = ref(null);
const services = ref(null);
let currentOffset = 0;
let targetOffset = 0;
let animationFrameId;

const MAX_OFFSET = 900;

const updatePosition = () => {
    if (hero.value && window.scrollY === 0) {
        currentOffset += (targetOffset - currentOffset) * 0.1;
		hero.value.style.transform = `translateY(-${currentOffset}px)`;
	}
    
	animationFrameId = requestAnimationFrame(updatePosition);
};
updatePosition();

const handleWheel = (event) => {
    // console.log('TargetOffset', targetOffset, '\n ScrollY', window.scrollY)
    targetOffset += event.deltaY * 2;
	targetOffset = Math.max(0, Math.min(targetOffset, MAX_OFFSET));

    console.log(window.scrollY)
	

	if (targetOffset < MAX_OFFSET && window.scrollY === 0) {
		event.preventDefault();
        // console.log('нет скролла')
	} else{
		// console.log('скролл')    
	}
};

document.addEventListener('wheel', handleWheel, { passive: false });

onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId);
    document.removeEventListener('wheel', handleWheel);
});
</script>

<template>
    <div ref="hero" class="hero">
        <Hero />
    </div>
    <div ref='services' class="services">
        <Services/>
    </div>
    <div class="lol">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem incidunt eius neque ratione. Voluptatum harum, autem ducimus necessitatibus possimus nemo optio ut maxime, similique ipsum inventore ipsam doloribus dicta!    
    </div>
</template>

<style scoped>
.lol {
    height: 100vh;
}
.hero {
    position: relative;
    z-index: 1;
    transition: transform 0.2s;
}
.services {
    position: absolute;
    bottom: 0;
}
</style>