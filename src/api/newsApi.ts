import { News } from "@type/newsTypes";

export const fetchNewsList = async () => {
  const response = await fetch('https://api.example.com/news');

  return response;
};

export const fetchNewsDetail = async (newsId: string) => {
  const response = await fetch(`https://api.example.com/news/${newsId}`);
  return response;
};

export const fetchSampleNewsList = async (): Promise<News[]> => {
  return [
    {
      id: 'news-001',
      title: '퇴근 하고싶은 사람',
      content: '저요!.',
      publishedAt: '2025-03-21 90:00',
    },
    {
      id: 'news-002',
      title: '쉬고 싶은 사람',
      content: '저요~.',
      publishedAt: '2025-03-21 10:00',
    },
    {
      id: 'news-003',
      title: '로또 당첨되고 싶은 사람',
      content: '저요?.',
      publishedAt: '2025-03-21 11:00',
    },
  ];
};

export const fetchSampleNewsDetail = async (
  newsId: string,
): Promise<News | null> => {
  const details: Record<string, News> = {
    'news-001': {
      id: 'news-001',
      title: '퇴근 하고싶은 사람',
      content: '저요!. 엄청요!',
      publishedAt: '2025-03-21 09:00',
    },
    'news-002': {
      id: 'news-002',
      title: '쉬고 싶은 사람',
      content: '저요~.',
      publishedAt: '2025-03-21 10:00',
    },
    'news-003': {
      id: 'news-003',
      title: '로또 당첨되고 싶은 사람',
      content: '저요?.',
      publishedAt: '2025-03-21 11:00',
    },
  };

  return details[newsId] || null;
};
