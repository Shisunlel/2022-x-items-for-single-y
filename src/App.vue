<script setup>
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
import { onMounted } from 'vue';
import {
  useItemComparison
} from './composables/itemComparison'

const {
  findProducts,
  compareProducts,
} = useItemComparison();
onMounted(async () => {
  await findProducts();
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect />
      <ItemSelect />
    </div>
    <ComparisonSummary v-if="(compareProducts.length > 1)" />
  </div>
</template>
