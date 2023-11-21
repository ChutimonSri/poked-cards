<script setup>
import { onMounted } from 'vue';
// import { db } from '@/src/js/firebase.js'
import { db } from '@/js/firebase.js'
import { collection, getDocs } from "firebase/firestore";

import PokedexCard from '@/components/PokedexCard.vue'

const cards = ref([])

async function getPokedex() {
  const querySnapshot = await getDocs(collection(db, "cards"));
    querySnapshot.forEach((doc) => {
      const pokemon = {
        "id": doc.id,
        "name": doc.data().name,
        "type1": doc.data().type1,
        "type2": doc.data().type2,
        "japaneseName": doc.data().japaneseName,
        "evolution": doc.data().evolution

      }
      cards.value.push(pokemon)
  
  })
}  

onMounted (async() => {
  console.log("Connecting to Firebase")
  await getPokedex()
})
</script>

<template>
  <div class="products">
    <div class="PokedexCards">
      <PokedexCard v-for="pokemon in cards" :key="pokemon.id" :pokemon="pokemon"/>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
