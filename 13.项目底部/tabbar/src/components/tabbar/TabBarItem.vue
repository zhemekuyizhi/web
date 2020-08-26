<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isactive">
      <slot name="item-con"></slot>
    </div>
    <div v-else>
      <slot name="item-con-active"></slot>
    </div>
    <div :class="{active:isactive}" :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      /* isactive: true */
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemclick() {
      this.$router.push(this.path)
    }
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activestyle() {
      return this.isactive ? { color: this.activeColor } : {}
    }
  }
}

</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>
