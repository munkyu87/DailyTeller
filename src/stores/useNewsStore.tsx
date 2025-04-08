import React, {createContext, useContext} from 'react';
import { NewsStore } from '@stores/NewsStore';

// NewsStore 인스턴스 생성
const newsStore = new NewsStore();

// Context 생성
const NewsStoreContext = createContext<NewsStore | null>(null);

// Provider 컴포넌트 생성
export const NewsStoreProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  return (
    <NewsStoreContext.Provider value={newsStore}>
      {children}
    </NewsStoreContext.Provider>
  );
};

// 커스텀 훅: NewsStore 사용을 쉽게 하기 위해
export const useNewsStore = (): NewsStore => {
  const store = useContext(NewsStoreContext);
  if (!store) {
    throw new Error('useNewsStore Error');
  }
  return store;
};
