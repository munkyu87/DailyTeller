import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { useNewsStore } from '@stores/useNewsStore';
import styles from '@styles/HomeScreen.styles';
import WeatherWidget from '@components/WeatherWidget';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = observer(() => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const newsStore = useNewsStore();

  useEffect(() => {
    console.log('homeScreen진입');
    newsStore.loadNewsList();
  }, []);

  return (
    // <View>
    //   <Text>Hello3</Text>
    // </View>
    <View style={styles.container}>
      {/* 상단 날짜 위젯 */}
      <WeatherWidget />
      {newsStore.loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={newsStore.newsList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.newsItem}
              onPress={() =>
                navigation.navigate('NewsDetail', {newsId: item.id})
              }>
              <Text style={styles.newsTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
});
