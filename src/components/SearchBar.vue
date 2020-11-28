<template>
  <div>
    <form class="search">
      <input
        type="text"
        placeholder="Search..."
        v-model.trim="input"
        :input="search()"
        ref="input"
      />
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ListSearch',
  data() {
    return {
      input: ''
    }
  },

  computed: {
    ...mapGetters(['GET_INPUT'])
  },
  methods: {
    search() {
      this.$store.commit('SET_INPUT', this.input)
      console.log(this.input)
    }
  }
}
</script>
<style scoped>
.search {
  text-align: center;
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
