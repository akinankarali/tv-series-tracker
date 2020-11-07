<template>
  <header class="header">
    <Container class="header-inner">
      <!-- logo -->
      <router-link to="/" class="logo">
        Burhan Altintop
      </router-link>

      <!-- search -->
      <form class="search">
        <input type="text" placeholder="Search">
      </form>

      <!-- navigation -->
      <nav class="navigation">
        <router-link to="/">
          <HomeIcon />
        </router-link>
        <router-link to="/list">
          <YourListIcon />
        </router-link>
      </nav>
    </Container>
  </header>
</template>
<script>
import Container from '@/components/Container';
import YourListIcon from '@/icons/YourListIcon.svg'
import HomeIcon from '@/icons/HomeIcon.svg'

export default {
  name: "MainHeader",
  components: {
    Container,
    YourListIcon,
    HomeIcon
  }
}
</script>

<style scoped>
.header {
  margin-top: -60px;
  border-bottom: 1px solid rgb(var(--b6a));
}
.header-inner{
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.logo{
  font-size: 1.6rem;
  font-weight: bold;
}
.search{
  text-align: center;
  input{
    width: 75%;
    height: 28px;
    border: 1px solid rgb(var(--b6a));
    background-color: rgb(var(--b3f));
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
.navigation{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
a{
  margin-left: 20px;
}
</style>