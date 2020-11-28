<template>
  <div class="home">
    <div class="sorting">
      <button @click="sortByNameAsc('name')" v-if="SHOW_LIST.length > 0">
        <A2ZIcon />
      </button>
      <button @click="sortByNameDesc('name')" v-if="SHOW_LIST.length > 0">
        <Z2AIcon />
      </button>
    </div>
    <div class="results">
      <Card
        v-for="show in showSearch"
        :key="show.id"
        :name="show.name"
        :average="show.rating.average"
        :genres="show.genres"
        :year="show.premiered"
        :img="show.image.medium"
        :id="show.id"
      />
      <div v-if="SHOW_LIST < 1">
        <jumper class="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { Jumper } from 'vue-loading-spinner'
import { mapGetters } from 'vuex'
import A2ZIcon from '@/icons/A2ZIcon.svg'
import Z2AIcon from '@/icons/Z2AIcon.svg'
export default {
  name: 'Home',
  components: {
    Card,
    Jumper,
    A2ZIcon,
    Z2AIcon
  },
  computed: {
    ...mapGetters(['SHOW_LIST', 'GET_INPUT']),
    showSearch() {
      return this.SHOW_LIST.filter(show => {
        return show.name.toLowerCase().includes(this.GET_INPUT.toLowerCase())
      })
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllShows')
  },
  methods: {
    sortByNameAsc(prop) {
      this.SHOW_LIST.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
    },
    sortByNameDesc(prop) {
      this.SHOW_LIST.sort((a, b) => (a[prop] < b[prop] ? 1 : -1))
    }
  }
}
</script>

<style scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.results .container {
  max-width: 240px;
}
/deep/.loading div {
  background-color: rgb(var(--yellow)) !important;
}
.sorting {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
}
.sorting button {
  width: 36px;
  height: 36px;
  margin-right: 8px;
  box-shadow: var(--box-shadow);
  background-color: #2c2c2c;
}
.sorting button:focus {
  box-shadow: none;
}
.sorting button svg {
  fill: white;
}
</style>
