import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';

//첨에 메인페이지 접속시 자동으로 로그인 페이지로 이동됨
//sign up버튼을 누르고 이메일, 비번 입력으로 회원가입 하고 다시 메인접속시 이동됨 (로그인됨거임)
//아래와 같이 프포필버튼에 이벤트 연결하고 logout함수 연결하면 클릭시 강제 로그아웃되면서 로그인화면으로 이동됨

function Header() {
  const [IsScrolled, setIsScrolled] = useState(false);
  const { logout, user } = useAuth();

  useEffect(() => {
    console.log(user);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${IsScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">TV Shows2</li>
          <li className="headerLink">Home</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">My List</li>
          <li className="headerLink">New & Popular</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href="/account"> */}
        <img
          src="https://rb.gy/g1pwyx"
          alt="profile"
          className="cursor-pointer rounded"
          onClick={logout}
        />
        <span>{user?.email}</span>
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
