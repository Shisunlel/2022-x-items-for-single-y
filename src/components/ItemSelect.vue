<script setup>
import { ref, watch } from 'vue'
import { useItemComparison } from '../composables/itemComparison'

const selected = ref()
const {
  products,
  isLoading,
  compareProducts,
} = useItemComparison()

watch(selected, (newVal, oldVal) => {
  compareProducts.value = compareProducts.value.filter((item) => item.id !== oldVal?.id)
  compareProducts.value.push(newVal)
})
</script>

<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark min-w-[365px]">
    <option disabled value="">Select an item</option>
    <template v-if="!isLoading">
      <option v-for="product in products" :value="product" :key="product.id">{{ product.title }} - {{ product.price }}</option>
    </template>
  </select>
</template>
