<script setup>
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <main class="card-field">
    <Header />
    <Card
      :cardNumber="'01'"
      :word="'unadmitted'"
      :translate="'не допущенный'"
    />

    <Button>Начать игру</Button>
  </main>
</template>

<style scoped>
.card-field {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>
