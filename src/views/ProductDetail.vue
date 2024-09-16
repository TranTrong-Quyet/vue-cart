<template>
  <div class="py-32">
    <button @click="router.push({ name: 'catalog' })" class="bg-slate-600 p-2">
      Back to catalog
    </button>
    <div class="flex flex-row gap-8 max-w-[1080px] mx-auto">
      <div class="w-[300px]">
        <img :src="selectedProduct.thumbnail" alt="" />
      </div>
      <div class="flex flex-col">
        <h1>{{ selectedProduct.title }}</h1>
        <p>{{ selectedProduct.price }}</p>
        <p>{{ selectedProduct.description }}</p>
        <div class="flex flex-row gap-4">
          <button class="px-4 py-2 bg-green-400 hover:bg-green-600">Buy now</button>
          <button @click="addToCart" class="px-4 py-2 bg-green-400 hover:bg-green-600">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { ProductStore } from '@/stores/counter'

const addToCart = () => {
  router.push({ name: 'cart' })
  store.cart.push(selectedProduct.value)
}

const store = ProductStore()
const route = useRoute()
const router = useRouter()

const selectedProduct = computed(() => {
  return store.products.find((product) => product.id === Number(route.params.id))
})
console.log(selectedProduct)
</script>
