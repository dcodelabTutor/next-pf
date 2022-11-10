import Head from 'next/head';
import Image from 'next/image';

function login() {
	return (
		<div>
			<Head>
				<title>Netflix</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Image
				src='https://rb.gy/p2hphi'
				fill
				className='-z-10 !hidden opacity-60 sm:!inline object-cover'
				alt='logo'
			/>
		</div>
	);
}

export default login;
