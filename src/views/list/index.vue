<template>
  <div class="list">
    <div class="timeline">
      <CustomText tag="h1">List</CustomText>
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
