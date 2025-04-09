import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
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
    console.log(JSON.stringify(newsStore.newsList, null, 2));
  }, []);

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err =>
      console.error('링크를 여는 데 실패했습니다.', err),
    );
  };

  return (
    <View style={styles.container}>
      {/* 상단 날짜 위젯 */}
      <WeatherWidget />
      {newsStore.loading ? (
        <ActivityIndicator size="large" />
      ) : newsStore.newsList.length === 0 ? (
        <Text>데이터 없음</Text>
      ) : (
        <FlatList
          data={newsStore.newsList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.newsItem}
              onPress={() => openLink(item.link!)}>
              {/* onPress={() =>
                navigation.navigate('NewsDetail', {newsId: item.id})
              }> */}
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDate}>{item.publishedAt}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
});
