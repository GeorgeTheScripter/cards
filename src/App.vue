<script setup>
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
import { ref, provide } from "vue";
import { useFetchCards } from "./composables/useFetchCards";
import { scoreProvide } from "./constants";

const score = ref(0);
const { cards, fetchCards } = useFetchCards();

provide(scoreProvide, score);

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

const beginingAgain = () => {
  fetchCards();
  score.value = 0;
};
</script>

<template>
  <main class="card-field">
    <Header :score="score" />

    <div v-show="cards.length > 0" class="card__list">
      <Card
        v-for="(card, i) in cards"
        :key="card.word"
        :cardNumber="`${i + 1 < 10 ? '0' + (i + 1) : '' + (i + 1)}`"
        :word="card.word"
        :translate="card.translation"
        :status="card.status"
        :state="card.state"
        @flip="openCard"
        @changeStatus="statusChange"
      />
    </div>

    <Button v-if="cards.length < 1" @click="fetchCards()">Начать игру</Button>
    <Button
      v-else-if="cards.length > 0"
      @click="beginingAgain"
      class="refresh__btn"
      >Начать заново</Button
    >
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 120px;
  gap: 24px;
}

.refresh__btn {
  margin-top: 100px;
}
</style>
