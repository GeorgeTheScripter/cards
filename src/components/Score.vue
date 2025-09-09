<script setup>
import HeartIcon from "./icons/HeartIcon.vue";

const props = defineProps({
  score: Number,
});
</script>

<template>
  <div class="score">
    <p class="score__count">{{ props.score }}</p>

    <HeartIcon />
  </div>
</template>

<style scoped>
.score {
  padding: 12px 24px;
  gap: 8px;
  display: flex;
  align-items: center;
  background-color: var(--color-bg-accent-light);
  border-radius: 20px;
  cursor: pointer;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
}

.score:hover {
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
}

.score__count {
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: var(--color-bg-accent);
}
</style>
