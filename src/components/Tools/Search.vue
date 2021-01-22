<template>
  <v-text-field
    :value="$store.state.search"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    @input="$store.commit('setSearch', $event)"
    placeholder="Search"
    filled
    outlined
    dense
    clearable
    prepend-inner-icon="mdi-magnify"
    class=" expanding-search  mt-5"
    :class="{ closed: searchClosed && !$store.state.search }"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      //   search: null,
      searchClosed: true,
    };
  },
};
</script>

<style lang="scss">
.expanding-search {
  transition: max-width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  .v-input__slot {
    cursor: pointer !important;
    &::before,
    &::after {
      border-color: transparent !important;
    }
  }
  &.closed {
    max-width: 45px;
    margin-right: 2rem !important;
    .v-input__slot {
      background: transparent !important;
    }
  }
}
</style>
