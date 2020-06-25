<template>
  <div id="app">
    <Header></Header>
    <div class="flex">
      <Sidebar></Sidebar>
      <Main>
        <router-view/>
      </Main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Main from '@/components/Main.vue'

export default {
  components: {
    Sidebar,
    Header,
    Main
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.flex {
  display: flex;
  align-items: flex-start;
}
</style>
