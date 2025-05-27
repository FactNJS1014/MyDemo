
import { createApp } from 'vue';
import App from './App.vue';
import router from './route.js';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { HiSolidHome , HiSolidInformationCircle,FcHome,FcInfo,MdPersonRound} from 'oh-vue-icons/icons';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

addIcons(HiSolidHome,HiSolidInformationCircle,FcHome,FcInfo,MdPersonRound);
const app = createApp(App);

app.component('v-icon', OhVueIcon);
app.use(Antd);
app.use(router);
app.mount('#app');
