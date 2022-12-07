<script setup>
import { computed } from 'vue';
import { useItemComparison } from '../composables/itemComparison';

const {
  compareProducts,
} = useItemComparison();
const summaryProducts = computed(() => {
  if (compareProducts.value[0].id === compareProducts.value[1].id) {
    return {
      productA: '',
      productB: '',
      isTheSame: true,
      times: 1,
    }
  }
  compareProducts.value = compareProducts.value.sort((a, b) => a.price - b.price);
  return {
    productA: compareProducts.value[0].title,
    productB: compareProducts.value[1].title,
    isTheSame: false,
    times: Math.floor(compareProducts.value[1].price / compareProducts.value[0].price)
  }
})
</script>
<template>
  <p class="mx-5 text-center">
    <template v-if="summaryProducts.isTheSame">
      These are the same item
    </template>
    <template v-else>
        You can get <strong>{{ summaryProducts.times }}</strong> <em>X {{ summaryProducts.productA }}</em> for about the same price as a single <em>{{ summaryProducts.productB }} </em>
    </template>
  </p>
</template>
