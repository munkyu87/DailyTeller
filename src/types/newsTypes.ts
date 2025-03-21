export interface News {
  id: string; // 뉴스 ID
  title: string; // 뉴스 제목
  category?: NewsCategory; // 뉴스 카테고리
  content?: string; // 뉴스 본문
  publishedAt?: string; // 게시 날짜
  source?: string; // 뉴스 출처
  // 등등등
}

// 뉴스 카테고리 타입
export type NewsCategory = '사회' | '경제' | '연예' | '...등';
