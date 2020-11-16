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
    showInfo() {
      return this.$store.state.showInfo
    },
    showImages() {
      return this.$store.state.showImages
    },
    showCast() {
      return this.$store.state.showCast
    },
    showEpisodes() {
      return this.$store.state.showEpisodes
    },
    showSeasons() {
      return this.$store.state.showSeasons
    },
    showCrew() {
      return this.$store.state.showCrew
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllShows')
    this.$store.dispatch('fetchShow')
    this.$store.dispatch('fetchShowImages')
    this.$store.dispatch('fetchShowCast')
    this.$store.dispatch('fetchShowEpisodes')
    this.$store.dispatch('fetchShowSeasons')
    this.$store.dispatch('fetchShowCrew')
  }
}
</script>

<style scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
