<template>
  <div class="preview-list">
    <a v-for="(imgSource, index) in imgSources"
      :key="index"
      :href="imgSource + '_h.jpg'"
      class="preview-list-item"
      target="blank">
      <img :src="imgSource + '.jpg'"
        alt="preview"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: ['imgSources']
}
</script>
