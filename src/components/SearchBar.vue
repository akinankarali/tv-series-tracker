<template>
  <form class="search">
    <input
      type="text"
      placeholder="Search..."
      v-model.trim="input"
      :input="search()"
      ref="input"
    />
  </form>
</template>
<script>
export default {
  name: 'ListSearch',
  data: () => ({
    input: ''
  }),
  mounted() {
    //this.$store.dispatch('fetchSearchInput', this.input)
  },
  methods: {
    search() {
      console.log(this.input)
    }
  }
}
</script>
<style scoped>
.search {
  text-align: center;
  visibility: hidden;
  input {
    width: 250px;
    height: 32px;
    border: 1px solid rgb(var(--b6a));
    background-color: rgb(var(--b3f));
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
