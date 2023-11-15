<script setup>
import { ref, onMounted } from 'vue'
import PokedexCard from '@/components/PokedexCard.vue'
// import axios from 'axios'  // Don't need this anymore, will use via the service
import PokedexService from '@/services/PokedexService.js'

const pokedexs = ref(null)

onMounted(() => {
  PokedexService.getPokedex()
  .then((response)=> {
    pokedexs.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <div class="border">
    <div class="pokedex">
      <PokedexCard v-for="pokedex in pokedexs" :key="pokedex.id" :pokedex="pokedex" />
    </div>
  </div>
  
</template>

<style>
.border{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.pokedex {
  column-count: 3;
  display:block;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>


