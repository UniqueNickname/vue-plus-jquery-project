<template>
  <menu class="menu"
    :class="{'menu_active' : menuIsShow}">
    <div
      class="menu-btn"
      :class="{'menu-btn_active' : menuIsShow}"
      @click="activeMenu">
        <span></span></div>
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
            to="/ChangingImages">Changing images</router-link></li>
        <li
          @click="changeActiveIndex(3)">
          <router-link class="menu-list-item"
            :class="{'menu-list-item_active' : menuListItemActiveNumber == 3}"
            to="/PhotoGallery">Photo gallery</router-link></li>
        <li
          @click="changeActiveIndex(4)">
          <router-link class="menu-list-item"
            :class="{'menu-list-item_active' : menuListItemActiveNumber == 4}"
            to="/SmartMenu">Smart menu</router-link></li>
        <li
          @click="changeActiveIndex(5)">
          <router-link class="menu-list-item"
            :class="{'menu-list-item_active' : menuListItemActiveNumber == 5}"
            to="/WorkWithForm">Work with a form</router-link></li>
        <li
          @click="changeActiveIndex(6)">
          <router-link class="menu-list-item"
            :class="{'menu-list-item_active' : menuListItemActiveNumber == 6}"
            to="/Registration">Registration</router-link></li>
      </ul>
    </nav>
  </menu>
</template>

<script>
import { eventEmitter } from '../main'

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
      this.activeMenu()
    }
  },
  created () {
    eventEmitter.$on('menuUpdated', () => {
      this.activeMenu()
    })
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/main-menu.sass'
</style>
