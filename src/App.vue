<script setup>
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
import { ref } from "vue";

const score = ref(0);

const cards = ref([
  {
    id: 1,
    word: "Hello",
    translation: "Привет",
    state: "closed",
    status: "pending",
  },
  {
    id: 2,
    word: "Bye",
    translation: "Пока",
    state: "closed",
    status: "pending",
  },
  {
    id: 3,
    word: "Bear",
    translation: "Медведь",
    state: "closed",
    status: "pending",
  },
]);

const openCard = (cardId) => {
  const card = cards.value.find((card) => card.id === cardId);

  if (card) {
    card.state = card.state === "closed" ? "opened" : "closed";
  }
};

const statusChange = (cardId, status) => {
  const card = cards.value.find((card) => card.id === cardId);

  if (card) {
    console.log(status);
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
        :key="card.id"
        :id="card.id"
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
  display: flex;
  gap: 12px;
}
</style>
