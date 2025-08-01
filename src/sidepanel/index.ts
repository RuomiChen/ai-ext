import { createApp } from 'vue';

import MateChat from '@matechat/core';
import SidePanel from './SidePanel.vue';

import '@devui-design/icons/icomoon/devui-icon.css';
createApp(SidePanel).use(MateChat).mount('#app')
