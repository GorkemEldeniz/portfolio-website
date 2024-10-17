import { Helmet } from "react-helmet";

function Meta() {
	return (
		<Helmet>
			<meta charSet='UTF-8' />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/favicons/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicons/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicons/favicon-16x16.png'
			/>
			<link rel='manifest' href='/favicons/site.webmanifest' />
			<link
				rel='mask-icon'
				href='/favicons/safari-pinned-tab.svg'
				color='#5bbad5'
			/>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<link
				href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
				rel='stylesheet'
			></link>
			<meta name='msapplication-TileColor' content='#da532c' />
			<meta name='theme-color' content='#ffffff' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<title>Gorkem Eldeniz</title>
			<meta name='description' content="Gorkem eldeniz's portfolio" />
			<meta name='keywords' content='react, meta tags, seo' />
			<meta name='author' content='Görkem Eldeniz' />
			<meta property='og:title' content='Gorkem Eldeniz' />
			<meta property='og:description' content="Gorkem eldeniz's portfolio" />
			<meta
				property='og:image'
				content='https://www.gorkemeldeniz.com/site-image.png'
			/>
			<meta property='og:url' content='https://www.gorkemeldeniz.com' />
			<meta name='twitter:title' content='Gorkem Eldeniz' />
			<meta name='twitter:description' content="Gorkem eldeniz's portfolio" />
			<meta
				name='twitter:image'
				content='https://www.gorkemeldeniz.com/site-image.png'
			/>
			<meta name='twitter:card' content='summary_large_image' />
		</Helmet>
	);
}

export default Meta;
