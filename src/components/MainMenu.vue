<template>
  <menu class="menu"
    :class="{'menu_active' : menuIsShow}">
    <a href="#"
      class="menu-btn"
      :class="{'menu-btn_active' : menuIsShow}">
        <span></span></a>
    <nav class="menu-list">
      <ul>
        <li><router-link class="menu-list-item menu-list-item_active" to="/">Home</router-link></li>
        <li><router-link class="menu-list-item" to="/ChangeImage">Change image</router-link></li>
      </ul>
    </nav>
  </menu>
</template>

<script>
export default {
  data () {
    return {
      menuIsShow: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/main-menu.sass'
</style>
