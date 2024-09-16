<template>
  <div class="min-h-[76px] bg-white border border-b-slate-200">
    <div class="max-w-[1200px] mx-auto py-2 flex flex-row justify-between items-center">
      <div class="block">Logo<img src="" alt="" class="w-12" /></div>
      <div @click="goToCart">Items in cart: {{ store.cart.length }}</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ProductStore } from '@/stores/counter' // Adjust the path if necessary

const router = useRouter()
const store = ProductStore()

const goToCart = () => {
  router.push({ name: 'cart' })
}
</script>
