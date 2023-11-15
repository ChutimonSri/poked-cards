<script setup>
import { ref, onMounted } from 'vue'
import PokedexService from '@/services/PokedexService.js'

const pokedex = ref(null)
// const id = ref(100001)

const props = defineProps({
    id: { required: true }
})

onMounted(() => {
    //BookService.getBook(id.value)
    PokedexService.getPokedex1(props.id)
    .then((response)=>{
        pokedex.value = response.data
    })
    .catch((error)=>{
        console.log(error)
    })
})
</script>

<template>
    <div v-if="pokedex">
        <h1>{{ pokedex.name }}</h1>
        <img :src="pokedex.imageUrl" alt="Pokemon Image" />
        <h3>Type 1: {{ pokedex.type1 }}</h3>
        <h3>Type 2: {{ pokedex.type2 }}</h3>
        <h3>Japanese Name : {{ pokedex.japaneseName }}</h3>
        <h3>Evolution 2: {{ pokedex.evolution }}</h3>
    </div>
</template>