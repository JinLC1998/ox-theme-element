import { Vue, Component, Prop } from 'vue-property-decorator'
import '../styles/button.less'

@Component
export default class RSButton extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  private type!: String

  @Prop({
    type: Number,
    default: 100
  })
  private width!: Number

  @Prop({
    type: Number,
    default: 38
  })
  private height!: Number

  get styleClass() {
    return `rs-button ${ this.type ? `rs-button-${ this.type }` : '' }`
  }

  get sizeStyle() {
    return `width: ${ this.width }px; height: ${ this.height }px;`
  }


  private render() {
    let slotDom = this.$slots.default
    return <el-button class={this.styleClass}
      style={this.sizeStyle}>{ slotDom }</el-button>
  }
}