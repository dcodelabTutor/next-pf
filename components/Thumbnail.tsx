import Image from 'next/image';
import { Movie } from '../typings';
//tailwind-scrollbar-hide
//npm install tailwind-scrollbar-hide
//npm install --save-dev tailwind-scrollbar

interface Props {
	//firebase를 쓸때는 다음과 같이 처리해야 됨 나중에 설명 예정
	//movie: Movie | DocumentData
	movie: Movie;
}

function Thumbnail({ movie }: Props) {
	return (
		<div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105'>
			<Image
				src={`https://image.tmdb.org/t/p/w500${
					movie.backdrop_path || movie.poster_path
				}`}
				className='rounded-sm object-cover md:rounded'
				layout='fill'
				objectFit='cover'
				alt={`${movie.title}`}
			/>
		</div>
	);
}

export default Thumbnail;
