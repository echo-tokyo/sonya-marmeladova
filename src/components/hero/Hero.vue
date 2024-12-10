<script setup>
import Header from './header/Header.vue';
import Section from './section/Section.vue';
import Stats from './stats/Stats.vue';
</script>

<template>
  <main class='px-14 pt-9 pb-14'>
    <Header />
    <Section />
    <Stats />
  </main>
</template>

<style scoped>
  main{
    background: linear-gradient(335deg, #572c62 0%, #34274d 68.89%);
    border-bottom-right-radius: 5rem;
    border-bottom-left-radius: 5rem;
  }
</style>