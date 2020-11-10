<template>
  <div class="home">
    <div class="results">
      <Card />
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
