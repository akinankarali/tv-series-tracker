<template>
  <Container>
    <div class="card">
      <div class="card-image">
        <img :src="img" alt="" />
      </div>
      <div class="card-infos">
        <div class="card-name">
          <CustomText tag="h2" class="xlarge">{{ name }}</CustomText>
        </div>
        <div class="card-stats">
          <div class="card-year">
            <CustomText tag="p" class="small">{{ year | moment }}</CustomText>
          </div>
          <div class="card-average">
            <CustomText tag="p"><StarIcon /> {{ average }}</CustomText>
          </div>
          <div class="card-genres">
            <div v-for="(genre, index) in genres" :key="index">
              <CustomText tag="p" class="normal">
                {{ genre }}
              </CustomText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import moment from 'moment'
import StarIcon from '@/icons/StarIcon.svg'
import CustomText from "@/components/CustomText";
export default {
  name: 'Card',
  components: {
    CustomText,
    Container,
    StarIcon
  },
  props: {
    name: String,
    year: String,
    average: Number,
    img: String,
    genres: Array
  },
  methods: {
    moment: function() {
      return moment()
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format('MMM Do YYYY')
    }
  }
}
</script>

<style scoped>
.card-image > img {
  object-fit: contain;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  transition: transform 100ms;
  margin-bottom: 8px;
}
.card-image > img:hover {
  transform: scale(1.09);
  box-shadow: var(--box-shadow);
}
.card-infos > h2 {
  padding-top: 8px;
}
.card-infos {
  margin-bottom: var(--header-height);
}
.card-infos div {
  margin-bottom: 4px;
}
.card-average svg {
  color: rgb(245, 197, 24);
}
.card-average p {
  font-size: 16px;
}
.card-genres {
  display: flex;
}
.card-genres div {
  margin-left: 4px;
  border: 1px solid #FFFFFF1A;
  padding: 4px;
  box-shadow: var(--box-shadow);
}
.card-genres div:first-child {
  margin-left: 0;
}
</style>
