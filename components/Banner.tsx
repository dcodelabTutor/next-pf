import Image from 'next/image';
import { useEffect, useState } from 'react';
import { baseUrl } from '../constants/movie';
import { Movie } from '../typings';

interface Props {
	netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
	const [movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		setMovie(
			netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
		);
	}, [netflixOriginals]);

	console.log(movie);

	return (
		<div>
			<div className='absolute top-0 left-0 h-[95vh] w-screen'>
				<Image
					src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
					alt={`${movie?.title}`}
					//이미지를 넣을땐 width, height값을 모두 넣거나
					//아니면 layout, objetFit속성을 넣어줘야 됨
					//width={500}
					//height={500}
					layout='fill'
					objectFit='cover'
				/>
			</div>
		</div>
	);
}

export default Banner;
