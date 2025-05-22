<template>
  <div class="relative w-full max-w-md">
    <input
      type="text"
      v-model="searchTerm"
      @input="handleInput"
      @focus="showSuggestions = true"
      @blur="hideSuggestions"
      @keydown.down.prevent="highlightNext"
      @keydown.up.prevent="highlightPrevious"
      @keydown.enter.prevent="selectHighlighted"
      @keydown.esc="showSuggestions = false"
      placeholder="Search..."
      class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />

    <div
      v-if="showSuggestions && filteredSuggestions.length > 0"
      class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
    >
      <ul>
        <li
          v-for="(suggestion, index) in filteredSuggestions"
          :key="index"
          @mousedown.prevent="selectSuggestion(suggestion)"
          :class="{
            'px-4 py-2 cursor-pointer hover:bg-blue-100': true,
            'bg-blue-200': index === highlightedIndex,
          }"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    // Optional prop for debounce delay
    debounceDelay: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      searchTerm: '',
      showSuggestions: false,
      highlightedIndex: -1,
      // To store the timeout for debouncing
      debounceTimeout: null,
    };
  },
  computed: {
    filteredSuggestions() {
      if (!this.searchTerm) {
        return [];
      }
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      return this.items.filter(item =>
        item.toLowerCase().includes(lowerCaseSearchTerm)
      );
    },
  },
  watch: {
    searchTerm() {
      this.highlightedIndex = -1; // Reset highlight when search term changes
    },
  },
  methods: {
    handleInput() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.showSuggestions = true;
        this.$emit('update:searchTerm', this.searchTerm); // Emit event for parent to know search term
      }, this.debounceDelay);
    },
    selectSuggestion(suggestion) {
      this.searchTerm = suggestion;
      this.showSuggestions = false;
      this.$emit('select', suggestion); // Emit event when a suggestion is selected
    },
    hideSuggestions() {
      // Use a timeout to allow click event on suggestion to register before hiding
      setTimeout(() => {
        this.showSuggestions = false;
      }, 150);
    },
    highlightNext() {
      if (this.filteredSuggestions.length === 0) return;
      this.highlightedIndex = (this.highlightedIndex + 1) % this.filteredSuggestions.length;
    },
    highlightPrevious() {
      if (this.filteredSuggestions.length === 0) return;
      this.highlightedIndex = (this.highlightedIndex - 1 + this.filteredSuggestions.length) % this.filteredSuggestions.length;
    },
    selectHighlighted() {
      if (this.highlightedIndex !== -1 && this.filteredSuggestions[this.highlightedIndex]) {
        this.selectSuggestion(this.filteredSuggestions[this.highlightedIndex]);
      } else if (this.searchTerm) {
        // If nothing is highlighted but there's a search term, you might want to "select" the current input
        this.showSuggestions = false;
        this.$emit('select', this.searchTerm);
      }
    },
  },
};
</script>

<style scoped>
/* No additional scoped styles needed as Tailwind handles most styling */
</style>
