<template>
  <div class="flex bg-slate-300">
    <ul class="grid gap-6 grid-cols-4 m-auto pt-12">
      <li
        v-for="product in store.products"
        :key="product.id"
        class="bg-white rounded-md max-w-[350px]"
        @click="goToEvent(product.id)"
      >
        <div class="object-cover">
          <img :src="product.thumbnail" alt="" class="object-cover" />
        </div>
        <div class="flex flex-col p-4">
          <p class="text-2xl text-green-600 mb-3 rounded-md">
            {{ product.price }}
          </p>
          <h1 class="text-xl font-medium">{{ product.title }}</h1>
          <p class="text-slate-600">{{ product.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { ProductStore } from '@/stores/counter'
import { useRouter } from 'vue-router'

const store = ProductStore()
onMounted(async () => {
  await store.getProduct()

  console.log('monted >>>')
})

const router = useRouter()
const goToEvent = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}
</script>
