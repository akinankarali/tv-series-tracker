<template>
  <Container>
    <div class="card">
      <div class="card-image">
        <img :src="img" alt="" />
      </div>
      <div class="card-infos">
        <div class="card-name">
          <h2>{{ name }}</h2>
        </div>
        <div class="card-year">
          <p>{{ year }}</p>
        </div>
        <div class="card-average">
          <p>{{ average }}/10</p>
        </div>
        <div class="card-genres">
          <div v-for="(genre, index) in genres" :key="index">
            <p>
              {{ genre }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
export default {
  name: 'Card',
  components: {
    Container
  },
  props: {
    name: String,
    year: String,
    average: Number,
    img: String,
    genres: Array
  }
}
</script>

<style scoped>
.card {
  width: 250px;
  height: 300px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 100ms;
  margin-bottom: 24px;
}
.card-image > img {
  width: 250px;
  height: 150px;
  object-fit: contain;
}
.card:hover {
  transform: scale(1.09);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.card-infos > h2 {
  padding-top: 10px;
}
</style>
