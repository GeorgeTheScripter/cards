<script setup>
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
import { ref, onBeforeMount } from "vue";

const score = ref(0);
const cards = ref([]);

const fetchCards = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/random-words");
    const data = await response.json();
    cards.value = data.map((card) => ({
      ...card,
      state: "closed",
      status: "pending",
    }));
  } catch (error) {
    console.log(error.message);
  }
};

onBeforeMount(() => {
  fetchCards();
});

const openCard = (cardWord) => {
  const card = cards.value.find((card) => card.word === cardWord);

  if (card) {
    card.state = card.state === "closed" ? "opened" : "closed";
  }
};

const statusChange = (cardWord, status) => {
  const card = cards.value.find((card) => card.word === cardWord);

  if (card) {
    card.status = status;
  }
};
</script>

<template>
  <main class="card-field">
    <Header :score="score" />

    <div class="card__list">
      <Card
        v-for="(card, i) in cards"
        :key="card.word"
        :cardNumber="`${cards.length < 10 ? '0' : ''}${i + 1}`"
        :word="card.word"
        :translate="card.translation"
        :status="card.status"
        :state="card.state"
        @flip="openCard"
        @changeStatus="statusChange"
      />
    </div>

    <Button>Начать игру</Button>
  </main>
</template>

<style scoped>
.card-field {
  display: grid;
  place-items: center;
  height: 100vh;
}

.card__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 120px;
  gap: 24px;
}
</style>
