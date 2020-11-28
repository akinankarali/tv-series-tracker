<template>
  <div class="home">
    <div class="results">
      <Card
        v-for="show in showSearch"
        :key="show.id"
        :name="show.name"
        :average="show.rating.average"
        :genres="show.genres"
        :year="show.premiered"
        :img="show.image.medium"
        :id="show.id"
      />
      <div v-if="SHOW_LIST < 1">
        <jumper class="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { Jumper } from 'vue-loading-spinner'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    Card,
    Jumper
  },
  computed: {
    ...mapGetters(['SHOW_LIST', 'GET_INPUT']),
    showSearch() {
      return this.SHOW_LIST.filter(show => {
        return show.name.toLowerCase().includes(this.GET_INPUT.toLowerCase())
      })
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllShows')
  }
}
</script>

<style scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.results .container {
  max-width: 240px;
}
/deep/.loading div {
  background-color: rgb(var(--yellow)) !important;
}
</style>
