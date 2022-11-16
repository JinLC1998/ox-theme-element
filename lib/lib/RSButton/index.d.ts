import { Vue } from 'vue-property-decorator';
import '../styles/button.less';
export default class RSButton extends Vue {
    private type;
    private width;
    private height;
    onClick(e: any): any;
    get styleClass(): string;
    get sizeStyle(): string;
    private render;
}
