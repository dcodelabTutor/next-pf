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

interface IAuth {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false
});

//AuthProvider로 전체 리액트 컴포넌트를 감싸줄 것이므로
//자식 타입을 리액트 노드로 지정
interface AuthProviderProps {
  children: React.ReactNode;
}

//jsx컴포넌트 대신 특정 값을 내보내는 커스텀 훅 생성
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  // firebase로 받는 User객체를 타입으로 지정, 초기 데이터가 비어있으므로 <User | null>로 설정
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
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
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  //useMemo를 이용하여 user, loding값이 바뀔때만  각 함수 및 정보를 객체로 묶어서 내보냄
  //해당 정보값을 메모이제이션해서 의존성배열에 등록된 값 외에는 재실행하지 않음
  const memoedValue = useMemo(
    () => ({ user, loading, error, signUp, signIn, logout }),
    [user, loading]
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext);
}
