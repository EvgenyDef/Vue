<template>
    <div class="emoji-mixer">
    <h2>Результат микса</h2>
    <div class="mix-result">
      <img :src="kitchenEmoji" alt="Mixed emoji" class="mixed-image">
      <p>{{ firstEmoji.name }} + {{ secondEmoji.name }}</p>
    </div>
  </div>
  </template>


<script setup>
    import { computed } from 'vue';
    
    const props = defineProps({
        firstEmoji: Object,
        secondEmoji: Object
    })

    const kitchenEmoji = computed(() => {
	if (props.firstEmoji && props.secondEmoji) {
    	const unicodeFirst = props.firstEmoji.unicode[0].replace('U+', '').toLowerCase();
    	const unicodeSecond = props.secondEmoji.unicode[0].replace('U+', '').toLowerCase();
    	return `https://emk.vercel.app/s/${unicodeFirst}_${unicodeSecond}?size=96`
	}
})

</script>


<style>
.emoji-mixer {
  margin-top: 40px;
  padding: 25px;
  background: #f5f7fa;
  border-radius: 12px;
  text-align: center;
}

.mix-result {
  margin-top: 20px;
}

.mixed-image {
  width: 96px;
  height: 96px;
  object-fit: contain;
}

h2 {
  color: #2c3e50;
}
</style>