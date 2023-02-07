import { Platform } from 'react-native';
export default {
    droidSafeArea: `flex-1 ${Platform.OS === 'android' ? 'pt-7' : 'pt-0'}`,
    localIP: '192.168.1.4'
};