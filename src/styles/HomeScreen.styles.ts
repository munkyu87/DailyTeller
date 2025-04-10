import {StyleSheet} from 'react-native';
import colors from '@assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  newsItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.title,
  },
  newsDate: {
    fontSize: 12,
    color: colors.dateText,
    marginTop: 4,
  },
});

export default styles;
