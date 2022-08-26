import Vue from "vue";
import Icon from "@/components/Icon";
import { icon } from "@/i18n/index";
import _ from "lodash";
import {
  Container,
  Header,
  Footer,
  Button,
  Option,
  Row,
  Col,
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  Select,
  FormItem,
  Steps,
  Step,
  Checkbox,
  Dialog,
  Card,
  Tag,
  Table,
  tableColumn,
  Message,
  MessageBox,
  Loading,
  Popover,
  Upload,
  Radio,
  RadioGroup,
  Drawer,
  Collapse,
  CollapseItem,
  Pagination,
  Descriptions,
  DescriptionsItem,
  Image,
} from "element-ui";
import VueAnimateOnScroll from "vue-animate-onscroll";
Vue.use(Collapse);
Vue.use(Pagination);
Vue.use(CollapseItem);
Vue.use(Popover);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Container);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Checkbox);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Table);
Vue.use(tableColumn);
Vue.use(Descriptions);
Vue.use(DescriptionsItem);
Vue.use(Loading.directive);
Vue.use(Upload);
Vue.use(Image);
Vue.component("Icon", Icon);
Vue.use(VueAnimateOnScroll);
Vue.prototype.$message = Message;
Vue.prototype.$langIcon = icon;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype._ = _;
