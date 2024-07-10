import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center mt-8">
			<div className="text-2xl">Dekka&apos;s Tarts</div>
			<div className="text-2xl">Coming Soon!</div>
			<div className="mt-4">
				<a href="https://www.instagram.com/dekkastarts" className="text-xl flex">
				<Image className="inline-block m-1" height="20" width="20" src= '/Instagram_Glyph_Gradient.png' alt="instagram icon"/>
				 <div>dekkastarts</div>
				</a>
			</div>
			<Image className="rounded-lg rotate-90  mt-24 md:rotate-0 md:w-4/5" src='/lemon_tarts_grid.jpg' width="500" height="350" alt="lemon tarts from above" />
		</main>
	);
}
