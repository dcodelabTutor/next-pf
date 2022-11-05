import Image from 'next/image';
import { Movie } from '../typings';

interface Props {
	netflixOriginals: Movie[];
}

//props로 전달받는 값 타입 지정
function Banner({ netflixOriginals }: Props) {
	return (
		<div>
			<div className=''>{/* <Image src={''} /> */}</div>
		</div>
	);
}

export default Banner;
