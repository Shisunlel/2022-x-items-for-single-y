import { ref } from 'vue'

const isLoading = ref(true)
const products = ref([])
const compareProducts = ref([])
const findProducts = async () => {
    isLoading.value = true
    try {
      const data = await (await fetch('https://dummyjson.com/products')).json()
      products.value = data.total ? data.products : [];
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false
    }
}

export const useItemComparison = () => {
    return {
        products,
        isLoading,
        findProducts,
        compareProducts,
    }
}
