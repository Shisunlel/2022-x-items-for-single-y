import { ref } from 'vue'

const availableItems = ref([])
const isFetchingItems = ref(true)
const itemsToCompare = ref([])

export const useItemComparison = () => ({
  availableItems,
  isFetchingItems,
  itemsToCompare,
})
