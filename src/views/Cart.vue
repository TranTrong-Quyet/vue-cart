<template>
  <div class="py-16">
    <div class="w-[900px] mx-auto">
      <div v-if="!store.products.length">
        <h1>Your cart is empty</h1>
        <button @click="router.push({ name: 'catalog' })">Choose your product</button>
      </div>

      <div v-else>
        <div>
          <ul>
            <li
              v-for="addedProduct in store.cart"
              :key="addedProduct.id"
              class="flex flex-row gap-8 py-3 justify-start items-center border border-b-slate-700"
            >
              <div><img :src="addedProduct.thumbnail" alt="" class="w-32 h-32 rounded-md" /></div>
              <div>
                <h6 class="text-lg mb-3">{{ addedProduct.title }}</h6>
                <span class="mr-4 font-bold">{{ addedProduct.price }}</span>
                <span class="px-2 py-1 rounded-sm bg-green-100">{{ addedProduct.category }}</span>
              </div>
              <button @click="removeFromCart(addedProduct.id)">Remove from cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ProductStore } from '@/stores/counter'

const removeFromCart = (id) => {
  store.removeFromCart(id)
}

const store = ProductStore()
const router = useRouter()
</script>
