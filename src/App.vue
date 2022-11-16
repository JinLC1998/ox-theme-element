<template>
  <div id="app">
    <rs-button type="cancel" @click="test">按钮</rs-button>
  </div>
</template>

<style lang="less">

</style>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private test() {
    console.log('121212')
  }
}
</script>
