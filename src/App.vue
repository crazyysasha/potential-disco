<script setup>
import { ref } from 'vue';
import Decrement from './components/Decrement.vue';

const count = ref(0);
</script>

<template>
  <div>
    hello world
    <button @dblclick="count--" :style="{fontSize: `${0-count}px`}">
      count is {{ count }}
    </button>

    <Decrement>
    </Decrement>
  </div>
</template>
