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
/* iOSでのデフォルトスタイルをリセット */
input[type="submit"],
input[type="button"] {
  border-radius: 0;
  -webkit-box-sizing: content-box;
  -webkit-appearance: button;
  appearance: button;
  border: none;
  box-sizing: border-box;
    &::-webkit-search-decoration {
      display: none;
    }
    &::focus {
      outline-offset: -2px;
    }
}
.flex {
  display: flex;
  align-items: flex-start;
}
</style>
