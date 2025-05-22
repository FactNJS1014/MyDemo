<template>
  <div id="app" class="p-8 flex justify-center items-start min-h-screen bg-gray-100">
    <Autocomplete
      :items="dataItems"
      @select="handleSelection"
      @update:searchTerm="updateSearchTerm"
      :debounceDelay="400"
    />
  </div>
</template>

<script>
import Autocomplete from './ItemTemplate.vue';

export default {
  name: 'App',
  components: {
    Autocomplete,
  },
  data() {
    return {
      dataItems: [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grape',
        'Lemon',
        'Mango',
        'Orange',
        'Peach',
        'Pear',
        'Pineapple',
        'Strawberry',
        'Watermelon',
        'Blueberry',
        'Raspberry',
        'Kiwi',
        'Apricot',
        'Plum',
        'Coconut',
        'Fig',
      ],
      selectedItem: null,
      currentSearchTerm: '',
    };
  },
  methods: {
    handleSelection(item) {
      this.selectedItem = item;
      console.log('Selected:', item);
      // You can do something with the selected item here, e.g., navigate, fetch data, etc.
      alert(`You selected: ${item}`);
    },
    updateSearchTerm(term) {
      this.currentSearchTerm = term;
      console.log('Current search term:', term);
    },
  },
};
</script>

