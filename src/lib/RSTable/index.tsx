import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import '../styles/table.less'

@Component
export default class RSTable extends Vue {
  @Prop({})
  private data: any

  private render() {
    return <el-table></el-table>
  }
}