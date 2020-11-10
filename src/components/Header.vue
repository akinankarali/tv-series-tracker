<template>
  <header class="header">
    <Container class="header-inner">
      <!-- logo -->
      <router-link to="/" class="logo">
        Burhan Altintop
      </router-link>

      <!-- search -->
      <form class="search">
        <input type="text" placeholder="Search" />
      </form>

      <!-- navigation -->
      <nav class="navigation">
        <router-link to="/" class="header-icon header-icon--active">
          <HomeIcon />
          <p>Home</p>
        </router-link>
        <router-link to="/list" class="header-icon">
          <YourListIcon />
          <p>Your List</p>
        </router-link>
      </nav>
    </Container>
  </header>
</template>
<script>
import Container from '@/components/Container'
import YourListIcon from '@/icons/YourListIcon.svg'
import HomeIcon from '@/icons/HomeIcon.svg'

export default {
  name: 'MainHeader',
  components: {
    Container,
    YourListIcon,
    HomeIcon
  }
}
</script>

<style scoped>
.header {
  padding-bottom: 8px;
}
.header-inner {
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.logo {
  font-size: 1.6rem;
  font-weight: bold;
  font-family: 'Philosopher', serif;
  width: 200px;
  margin-left: -20px;
}
.search {
  text-align: center;
  input {
    width: 250px;
    height: 32px;
    border: 1px solid rgb(var(--b6a));
    background-color: rgb(var(--b3f));
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
a {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100px;
  svg {
    margin-left: auto;
    margin-right: auto;
  }
  p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: small;
    display: none;
  }
}
.header-icon:hover > p {
  display: inline-flex;
}
</style>
