<template>
  <div class="about">
    <div class="timeline">
      <h1>About</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  color: red;

  @media (--t) {
    color: blue;
  }
}
</style>
