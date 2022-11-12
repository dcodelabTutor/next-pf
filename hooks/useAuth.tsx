import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth';

import { useRouter } from 'next/router';
//useMemo - useEffect와 비슷하지만 오직 단 하나의 의존성 값 변경에만 반응해서 실행됨
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase';

//jsx컴포넌트 대신 특정 값을 내보내는 커스텀 훅 생성
function useAuth() {
  const [loading, setLoading] = useState(false);
  // firebase로 받는 User객체를 타입으로 지정, 초기 데이터가 비어있으므로 <User | null>로 설정
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  //signUp func
  const signUp = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push('/');
        setLoading(false);
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

  //signIn func
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push('/');
        setLoading(false);
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

  //logout func
  const logout = async () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };
}

export default useAuth;
