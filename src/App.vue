<template>
  <div id="app">
    <rs-button type="cancel" @click="clickButton">按钮</rs-button>
    <rs-table></rs-table>
  </div>
</template>

<style lang="less">

</style>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private clickButton(e: any) {
    console.log('按钮被点击了', e)
  }
}
</script>
