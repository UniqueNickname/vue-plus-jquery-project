<template>
  <menu class="menu"
    :class="{'menu_active' : menuIsShow}">
    <a href="#"
      class="menu-btn"
      :class="{'menu-btn_active' : menuIsShow}"
      @click="activeMenu">
        <span></span></a>
    <nav class="menu-list">
      <ul>
        <li
          @click="changeActiveIndex(1)">
          <router-link class="menu-list-item"
            :class="{'menu-list-item_active' : menuListItemActiveNumber == 1}"
            to="/">Home</router-link></li>
        <li
          @click="changeActiveIndex(2)">
          <router-link class="menu-list-item"
            :class="{'menu-list-item_active' : menuListItemActiveNumber == 2}"
            to="/ChangeImage">Change image</router-link></li>
      </ul>
    </nav>
  </menu>
</template>

<script>
export default {
  data () {
    return {
      menuIsShow: false,
      menuListItemActiveNumber: 1
    }
  },
  methods: {
    activeMenu () {
      this.menuIsShow = !this.menuIsShow
    },
    changeActiveIndex (index) {
      this.menuListItemActiveNumber = index
      // this.activeMenu()
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/main-menu.sass'
</style>
