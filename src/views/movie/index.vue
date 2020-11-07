<template>
  <div class="movie">
    <div class="timeline">
      <CustomText tag="h1">Movie</CustomText>
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CustomText from "@/components/CustomText";
export default {
  name: 'List',
  components:{
    CustomText,
    Card,
  }
}
</script>

<style scoped>
</style>
