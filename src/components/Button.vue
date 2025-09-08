<script setup></script>

<template>
  <button class="button"><slot /></button>
</template>

<style scoped>
.button {
  width: 335px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 28px;
  font-size: 24px;
  color: var(--color-text-btn);
  cursor: pointer;
  background: var(--color-bg-accent);
}

.button:hover {
  background: var(--color-bg-accent-hover);
}
</style>
