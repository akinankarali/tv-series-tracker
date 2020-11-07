<template>
  <Container>
    <div class="card">
      <h1>Card</h1>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
export default {
  name: "Card",
  components: {
    Container
  }
}
</script>

<style scoped>
.card{
  width: 30%;
  max-width: 34%;
  height: 300px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
}
</style>