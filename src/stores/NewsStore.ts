import {makeAutoObservable} from 'mobx';
import {fetchSampleNewsDetail} from '@api/newsApi';
import {News} from '@type/newsTypes';
import {SampleNaverNewsResponse} from '@type/naverNewsTypes';

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
      const naverNews = SampleNaverNewsResponse;
      /**
       * @todo api 연동 시 Change
       * const naverNews = await getNaverNews();
       */
      this.newsList = naverNews.items.map((item, index) => ({
        id: `${index}`,
        title: item.title,
        content: item.description,
        publishedAt: item.pubDate,
        link: item.link,
      }));
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
