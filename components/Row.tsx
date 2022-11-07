import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Movie } from '../typings';
import Thumbnail from './Thumbnail';
import { useRef, useState, useEffect } from 'react';

interface Props {
	title: string;
	movies: Movie[];
}

function Row({ title, movies }: Props) {
	const rowRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState(false);

	const handleClick = (direction: string) => {
		setIsMoved(true);

		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo =
				direction === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	useEffect(() => {
		console.log(rowRef.current?.scrollLeft);
	}, []);

	return (
		<div className='h-40 space-y-0.5 md:space-y-2'>
			<h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl mt-7'>
				{title}
			</h2>
			<div className='group relative md:-ml-2'>
				<ChevronLeftIcon
					className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
						!isMoved && 'hidden'
					}`}
					onClick={() => handleClick('left')}
				/>

				<div
					ref={rowRef}
					className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full !pb-4 scrollbar-hide hover:scrollbar-default'
				>
					{movies.map((movie) => (
						<Thumbnail key={movie.id} movie={movie} />
					))}
				</div>

				<ChevronRightIcon
					className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
}

export default Row;
