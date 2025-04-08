import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { useNewsStore } from '@stores/useNewsStore';
import styles from '@styles/NewsDetailScreen.styles';

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'NewsDetail'>;

export const NewsDetailScreen = observer(() => {
  const route = useRoute<NewsDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const newsStore = useNewsStore();

  useEffect(() => {
    newsStore.loadNewsDetail(route.params.newsId);
  }, []);

  if (newsStore.loading || !newsStore.selectedNews) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{newsStore.selectedNews.title}</Text>
      <Text style={styles.content}>{newsStore.selectedNews.content}</Text>
    </View>
  );
});
