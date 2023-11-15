<script setup>

defineProps({
  pokedex: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <!-- <RouterLink to="book/100001"> -->
  <RouterLink :to="{ name: 'pokedex-details', params: {id: pokedex.id} }" >
    <div class="pokedex-card">
      <h1>{{ pokedex.name }}</h1>
      <img :src="pokedex.imageUrl" alt="Pokemon Image" />
      <h3>Type 1: {{ pokedex.type1 }}</h3>
      <h3>Type 2: {{ pokedex.type2 }}</h3>

    </div>
  </RouterLink>
</template>

<style scoped>

.pokedex-card {
  background-color: rgba(246, 247, 198, 0.8); 
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.pokedex-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>