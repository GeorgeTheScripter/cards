<script setup>
import Score from "./Score.vue";

defineProps({
  score: Number,
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a href="#" class="header__logo">ЗАПОМНИ СЛОВО</a>

        <Score :score="score" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 40px 20px;
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0 auto;
}

.header__logo {
  color: var(--color-text-secondary);
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 12%;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
