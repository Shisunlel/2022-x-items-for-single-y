<script setup>
import { onMounted } from 'vue'

import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
import { useItemComparison } from './composables/itemComparison'

const { isFetchingItems, availableItems, itemsToCompare } = useItemComparison()

onMounted(async () => {
  try {
    const { products } = await (
      await fetch('https://dummyjson.com/products')
    ).json()

    availableItems.value = products
  } catch (error) {
    console.error(error)
    alert('Something went wrong!')
  } finally {
    isFetchingItems.value = false
  }
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect />
      <ItemSelect />
    </div>
    <ComparisonSummary v-if="itemsToCompare.length === 2" />
  </div>
</template>
