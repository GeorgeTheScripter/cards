import { ref } from "vue";

export const useFetchCards = () => {
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

  return {
    fetchCards,
    cards,
  };
};
