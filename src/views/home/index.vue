<template>
  <div class="home">
    <div class="results">
      <p>{{ shows }}</p>
      <p>----------------</p>
      <p>{{ genres }}</p>
      <p>----------------</p>
      <p>{{ showInfo }}</p>
      <p>----------------</p>
      <p>{{ showImages }}</p>
      <p>----------------</p>
      <p>{{ showCast }}</p>
      <p>----------------</p>
      <p>{{ showEpisodes }}</p>
      <p>----------------</p>
      <p>{{ showSeasons }}</p>
      <p>----------------</p>
      <p>{{ showCrew }}</p>
      <p>----------------</p>

      <Card :name="shows.name" :rating="shows.rating.average" :year="shows.premiered"/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
      return this.$store.state.showInfo
    },
    genres() {
      return this.$store.state.genres
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
