export interface NaverNewsResponse {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: NaverNewsItem[];
}

export interface NaverNewsItem {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

// 임시로 어떤걸 Search 하는지 모르지만!
export interface NewsSearchParams {
  category?: string;
  query?: string;
  frDt?: Date;
  toDt?: Date;
}

export const SampleNaverNewsResponse: NaverNewsResponse = {
  lastBuildDate: 'Wed, 02 Apr 2025 10:25:13 +0900',
  total: 361945,
  start: 1,
  display: 10,
  items: [
    {
      title:
        '김수현 소속사 골드메달, 금고 바닥났나... "청소업체 계약까지 끊었다..."',
      originallink: 'https://www.insight.co.kr/news/497485',
      link: 'https://www.insight.co.kr/news/497485',
      description:
        '김수현 소속사 골드메달리스트, 경영 악화 현실화... "임직원 구조조정도 있을 듯" 배우 김수현의 소속사 골드메달리스트가 김수현 관련 논란으로 인해 재정난에 시달리고 있는 것으로 전해졌다.',
      pubDate: 'Wed, 02 Apr 2025 10:24:00 +0900',
    },
    {
      title: '[조이숏] 김수현이 故 김새론 유족에게 전하는 말 #shorts',
      originallink: 'http://www.joynews24.com/view/1829882',
      link: 'http://www.joynews24.com/view/1829882',
      description:
        '배우 김수현이 지난 31일 오후 서울 마포구 상암동 스탠포드호텔 서울에서 기자회견을 열고 故 김새론 관련 사생활 의혹에 대한 입장 표명을 하고 있다.',
      pubDate: 'Wed, 02 Apr 2025 10:20:00 +0900',
    },
    {
      title: '김수현, 故 김새론 유족 상대 손배소 재판부 배당...소송 가액↓',
      originallink: 'https://www.mk.co.kr/article/11280221',
      link: 'https://m.entertain.naver.com/article/009/0005469253',
      description:
        '배우 김수현이 고(故) 김새론의 유족과 유튜브 채널 가로세로연구소 등을 상대로 제기한 손해배상소송 재판부가 배정됐다.',
      pubDate: 'Wed, 02 Apr 2025 10:19:00 +0900',
    },
  ],
};
