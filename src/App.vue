<template>
  <div class="app">
    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>

<script>
import Container from '@/components/Container'

export default {
  name: 'App',
  components: {
    Container,
  }
}
</script>

<style scoped>
</style>
