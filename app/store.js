import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/counter/userSlice';
import questionReducer from '../features/counter/questionSlice';
import basketReducer from '../features/counter/basketSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    question: questionReducer,
    basket: basketReducer,
  },
});

/* store란 state값들을 저장하는 장소

 reducer에서 전달받은 action을 redux의 dispath 함수를 사용하여 store로 전달합니다.

 store createStore 통해서 만들수 있고

 createStore안에 reducer 역할을 하는 함수가 들어 가야한다.
 */
