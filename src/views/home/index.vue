<template>
  <div class="home">
    <div class="results">
      <Card
        v-for="show in shows"
        :key="show.id"
        :name="show.name"
        :average="show.rating.average"
        :genres="show.genres"
        :year="show.premiered"
        :img="show.image.medium"
        :id="show.id"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    shows() {
      return this.$store.state.shows
    },
    genres() {
      return this.$store.state.genres
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
</style>
