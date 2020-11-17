<template>
  <div class="list">
    <div class="your-list">
      <!-- Worst Case -->
      <div v-for="(item, index) in FOLLOW_LIST" :key="index">
        <div v-for="show in SHOW_LIST" :key="show.id">
          <div v-if="item === show.id">
            <Card
              :name="show.name"
              :average="show.rating.average"
              :genres="show.genres"
              :year="show.premiered"
              :img="show.image.medium"
              :id="show.id"
            />
            <div class="card-dontFollow-button">
              <button type="button" @click="removeItem(index)">
                <img src="@/icons/MinusIcon.png" alt="" />
                <CustomText class="normal">
                  Follow
                </CustomText>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="FOLLOW_LIST.length < 1">
        <h3>Please follow something :)</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters } from 'vuex'
import CustomText from '@/components/CustomText'
export default {
  name: 'List',
  components: {
    Card,
    CustomText
  },
  methods: {
    removeItem(index) {
      this.$store.getters.FOLLOW_LIST.splice(index, 1)
    }
  },
  computed: {
    ...mapGetters(['FOLLOW_LIST', 'SHOW_LIST'])
  }
}
</script>

<style scoped>
.your-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
/deep/.your-list .card .card-follow-button {
  display: none;
}
/deep/.your-list .card {
  margin-right: 16px;
}
.card-dontFollow-button {
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
.card-dontFollow-button button {
  color: rgb(var(--yellow));
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.card-dontFollow-button button img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
</style>
