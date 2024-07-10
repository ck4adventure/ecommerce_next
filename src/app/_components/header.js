import Link from "next/link";
import Image from "next/image";

export default function HeaderBar() {
	return (
		<div data-cy='headerbar' className="flex justify-between bg-rose-50 bg-opacity-50 items-center border-b-2">
			<div>
				<div className="m-2 w-[100px]"><Link href="/"><Image src="/canva-star-192x192.png" className='logo' width="48" height="48" alt="The character Brain from the WB show" /></Link> </div>

			</div>
			<div>
				Dekka's Tarts
			</div>
			<div className='flex flex-row w-[100px]'>
				{/* <div className="m-2"><Link href="/recipes/">Recipes</Link> </div>
				<div className="m-2"><Link href="/categories/">Categories</Link> </div>
				<div className="m-2"><Link href="/authors/">Authors</Link> </div>
				<div className="m-2"><Link href="/sources/">Sources</Link> </div> */}
			</div>
		</div>
	);
}