import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Movie } from '../typings';

interface Props {
	netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
	//useState의 초기값에 Movie타입 적용
	const [movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		//Math.floor(Math.random()*숫자) (0~숫자 까지의 랜덤수를 반환하는 상용구문)
		//0~5까지의 랜덤수 반환
		//console.log(Math.floor(Math.random() * 5));

		//전체 넷플릭스 오리지널 데이터 갯수중에서 컴포넌트 마운트시마다 랜덤 순서의 데이터초기화
		setMovie(
			netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
		);
	}, [netflixOriginals]);

	//넷플릭스의 오리지널 데이터가 변경될때마다 랜덤으로 하나의 데이터를 출력
	console.log(movie);

	return (
		<div>
			<div className=''>{/* <Image src={''} /> */}</div>
		</div>
	);
}

export default Banner;
