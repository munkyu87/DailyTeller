import {makeAutoObservable} from 'mobx';
import {
  fetchNewsList,
  fetchNewsDetail,
  fetchSampleNewsList,
  fetchSampleNewsDetail,
} from '@api/newsApi';
import {News} from '../types/newsTypes';

export class NewsStore {
  newsList: News[] = [];
  selectedNews: News | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loadNewsList() {
    this.loading = true;
    try {
      this.newsList = await fetchSampleNewsList();
    } finally {
      this.loading = false;
    }
  }

  async loadNewsDetail(newsId: string) {
    this.loading = true;
    try {
      this.selectedNews = await fetchSampleNewsDetail(newsId);
      // this.selectedNews = await fetchNewsDetail(newsId);
    } finally {
      this.loading = false;
    }
  }
}
