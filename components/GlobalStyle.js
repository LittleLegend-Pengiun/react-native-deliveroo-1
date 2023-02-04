import { Platform } from 'react-native';
export default {
    droidSafeArea: `flex-1 ${Platform.OS === 'android' ? 'pt-7' : 'pt-0'}`
};