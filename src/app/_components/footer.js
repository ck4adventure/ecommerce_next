import Image from "next/image";
export default function FooterBar() {
	return (
		<div className="h-12 flex flex-row justify-end items-center mr-4">
			<div className="text-xs">© Dekka&apos;s Tarts 2024</div>
			<a href="https://www.instagram.com/dekkastarts" className="text-xs flex items-center">
				<Image className="inline-block m-1" height="10" width="10" src='/Instagram_Glyph_Gradient.png' alt="instagram icon" />
				<div>dekkastarts</div>
			</a>
		</div>
	);
}