<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  color: red;

  @media (--t) {
    color: blue;
  }
}
</style>
