import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginTop: 15,
  },
  weatherBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  weatherText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 6,
  },
  temperature: {
    fontSize: 15,
    fontWeight: '400',
  },
});

export default styles;
