import {ViewStyle} from 'react-native/types';
import {TouchableOpacityProps} from 'react-native/types';
type Props = TouchableOpacityProps & {
  name: string;
  style?: ViewStyle;
};

export default Props;
