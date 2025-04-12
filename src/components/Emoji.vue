<template>
    <div class="emoji-item">
      <span v-html="emoji.htmlCode[0]"></span>
      <div class="emoji-name">{{ emoji.name }}</div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    emoji: {
      type: Object,
      required: true,
    }
  });
  </script>
  
  <style scoped>
  .emoji-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: transform 0.2s;
  }
  
  .emoji-item:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .emoji-item span {
    font-size: 2rem;
  }
  
  .emoji-name {
    margin-top: 8px;
    font-size: 0.8rem;
    text-align: center;
    word-break: break-word;
  }
  </style>