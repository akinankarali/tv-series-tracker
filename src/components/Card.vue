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
      <div class="card-follow-button">
        <button class="button" type="button" @click="addFollowList">
          <PlusIcon />
          <CustomText class="normal">
            Follow
          </CustomText>
        </button>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import moment from 'moment'
import StarIcon from '@/icons/StarIcon.svg'
import PlusIcon from '@/icons/PlusIcon.svg'
import CustomText from '@/components/CustomText'

export default {
  name: 'Card',
  components: {
    CustomText,
    Container,
    StarIcon,
    PlusIcon
  },
  props: {
    name: String,
    year: String,
    average: Number,
    img: String,
    genres: Array,
    id: Number
  },
  methods: {
    moment: function() {
      return moment()
    },
    addFollowList() {
      this.$store.state.followList.push(this.id)
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
.card-follow-button {
  margin-bottom: var(--header-height);
  border: 1px solid rgb(var(--border-color));
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  width: 128px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
}
.card-follow-button button {
  color: rgb(var(--yellow));
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.card-follow-button button:hover {
  background-color: #212121;
}
.card-follow-button button span {
  margin-right: 4px;
}
.card-infos div {
  margin-bottom: 4px;
}
.card-average svg {
  color: rgb(var(--yellow));
}
.card-average p {
  font-size: 16px;
}
.card-genres {
  display: flex;
}
.card-genres div {
  margin-left: 4px;
  border: 1px solid rgb(var(--border-color));
  padding: 4px;
  box-shadow: var(--box-shadow);
}
.card-genres div:first-child {
  margin-left: 0;
}
</style>
