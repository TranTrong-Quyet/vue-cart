import { defineStore } from 'pinia'

export const ProductStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    getProduct() {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => {
          this.products = json.products
        })
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
