<template>
    <div class="emoji-list">
      <div 
        v-for="emoji in emojis" 
        :key="emoji.name"
        class="emoji-item"
        @click="selectEmoji(emoji)"
      >
        <span v-html="emoji.htmlCode[0]"></span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    emojis: {
      type: Array,
      required: true
    }
  });
  
  const emit = defineEmits(['selectEmoji']);
  
  const selectEmoji = (emoji) => {
    emit('selectEmoji', emoji);
  };
  </script>
  
  <style scoped>
  .emoji-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 12px;
    max-height: 300px;
    overflow-y: auto;
    padding: 10px;
  }
  
  .emoji-item {
    font-size: 2rem;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    transition: all 0.2s;
  }
  
  .emoji-item:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }
  </style>