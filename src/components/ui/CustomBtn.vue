<script>
export default {
  props: {
    textContent: {
      type: String
    },
    clr: {
      type: String
    }
  }
}
</script>

<template>
  <div>
		<button 
			v-if="clr === 'pink'" 
      class='bg-primary px-14 py-3 rounded-full text-light-yellow'>
      {{ textContent }}
    </button>
    <button 
      v-else-if="clr === 'transparent'" 
      class='border-light-purple border-2 px-14 py-3 rounded-full text-light-yellow'>
      {{ textContent }}
    </button>
  </div>
</template>