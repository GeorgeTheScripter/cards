<script setup>
import { computed, inject } from "vue";
import WrongIcon from "./icons/WrongIcon.vue";
import CorrectIcon from "./icons/CorrectIcon.vue";
import { scoreProvide } from "../constants";

const props = defineProps({
  cardNumber: String,
  word: String,
  translate: String,
  status: "success" | "fail" | "pending",
  state: "closed" | "opened",
});

const emit = defineEmits(["flip", "changeStatus"]);

const score = inject(scoreProvide);

const cardWord = computed(() => {
  return props.state === "opened" ? props.translate : props.word;
});

const flipCard = () => {
  emit("flip", props.word);
};

const statusChange = (status) => {
  if (status === "fail") {
    score.value -= 4;
  } else if (status === "success") {
    score.value += 10;
  }
  emit("changeStatus", props.word, status);
};

const isFlipped = computed(() => {
  return props.state === "opened" && props.status === "pending";
});

const isDone = computed(() => {
  return props.status !== "pending";
});

const completedText = computed(() => {
  if (props.status === "success") {
    return "УСПЕХ";
  } else if (props.status === "fail") {
    return "НЕУДАЧА";
  }

  return "";
});
</script>

<template>
  <div class="card">
    <div class="card__container">
      <WrongIcon v-if="props.status === 'fail'" class="wr-ico" />
      <CorrectIcon v-if="props.status === 'success'" class="wr-ico" />

      <p class="card__number">{{ cardNumber }}</p>
      <p class="card__word">{{ cardWord }}</p>
      <div>
        <p
          class="card__action"
          v-if="props.status === 'pending'"
          @click="flipCard"
        >
          ПЕРЕВЕНУТЬ
        </p>
        <p class="card__action" v-if="isDone">{{ completedText }}</p>
      </div>

      <div v-if="isFlipped" class="card__buttons">
        <button class="card__button" @click="statusChange('fail')">
          <WrongIcon />
        </button>
        <button class="card__button" @click="statusChange('success')">
          <CorrectIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 16px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
  padding: 28px 20px;
  background: var(--color-bg-card);
}

.card:hover {
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.05);
  transform: scale(1.01) rotate(-0.3deg);
}

.card__container {
  border: 1px solid var(--color-bg-accent-light);
  border-radius: 12px;
  width: 212px;
  height: 320px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__number {
  position: absolute;
  top: -8px;
  left: 16px;
  background: var(--color-bg-card);
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  padding: 0 2px;
}

.card__word {
  text-align: center;
}

.card__action {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 12%;
  background: var(--color-bg-card);
  padding: 0 2px;
  cursor: pointer;
}

.card__action {
  font-family: Roboto;
  font-weight: 700;
  font-style: Bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 12%;
  color: var(--color-text-secondary);
}

.card__buttons {
  position: absolute;
  background-color: var(--color-bg-card);
  display: flex;
  gap: 32px;
  padding: 0 8px;
  bottom: -14px;
}

.card__button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.card__button svg {
  width: 24px;
}

.wr-ico {
  width: 48px;
  position: absolute;
  top: -24px;
  background-color: var(--color-bg-card);
}
</style>
