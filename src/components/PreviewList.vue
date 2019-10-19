<template>
  <div class="preview-list">
    <a v-for="(source, index) in imgSources"
      :key="index"
      :href="source.iHref"
      class="preview-list-item"
      target="blank">
      <img
        :src="source.iSrc + '.jpg'"
        alt="preview"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: [
    'imgSources'
  ]
}
</script>
