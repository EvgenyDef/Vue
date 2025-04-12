<template>
  <div class="app">
    
    <div class="selectors-container">
      <div class="selector">
        <h2>Первый смайл</h2>
        <EmojiList 
          :emojis="emojis" 
          @selectEmoji="selectFirstEmoji"
        />
        <div v-if="selectedEmojis[0]" class="selected-preview">
          <span v-html="selectedEmojis[0].htmlCode[0]"></span>
          <span>{{ selectedEmojis[0].name }}</span>
        </div>
      </div>
      
      <div class="selector">
        <h2>Второй смайл</h2>
        <EmojiList 
          :emojis="emojis" 
          @selectEmoji="selectSecondEmoji"
        />
        <div v-if="selectedEmojis[1]" class="selected-preview">
          <span v-html="selectedEmojis[1].htmlCode[0]"></span>
          <span>{{ selectedEmojis[1].name }}</span>
        </div>
      </div>
    </div>
    
    <EmojiMixer 
      v-if="selectedEmojis[0] && selectedEmojis[1]"
      :first-emoji="selectedEmojis[0]" 
      :second-emoji="selectedEmojis[1]" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EmojiList from './components/EmojiList.vue';
import EmojiMixer from './components/EmojiMixer.vue';

const emojis = ref([]);
const selectedEmojis = ref([null, null]);

const fetchEmojis = async () => {
  try {
    const response = await fetch('https://emojihub.yurace.pro/api/all');
    emojis.value = await response.json();
  } catch (error) {
    console.error('Ошибка загрузки:', error);
  }
};

const selectFirstEmoji = (emoji) => {
  selectedEmojis.value[0] = emoji;
  console.log('Первый смайл выбран:', emoji);
};

const selectSecondEmoji = (emoji) => {
  selectedEmojis.value[1] = emoji;
  console.log('Второй смайл выбран:', emoji);
};

onMounted(() => {
  fetchEmojis();
});
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.selectors-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.selector {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.selector h2 {
  text-align: center;
  color: #34495e;
  margin-bottom: 15px;
}

.selected-preview {
  margin-top: 20px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.1rem;
}

.mixer-placeholder {
  text-align: center;
  padding: 30px;
  background: #f0f2f5;
  border-radius: 12px;
  color: #666;
  font-style: italic;
}
</style>