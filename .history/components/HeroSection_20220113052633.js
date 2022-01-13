import React from "react";
import Image from "next/dist/client/image";


function HeroSection() {
	return (
		<div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
			<div>
			<Image className="position:fixed " src="https://ats.org/wp-content/uploads/2021/03/Impact-Musrooms-1160x700.jpg" width={1200} height={300} />
			</div>

			
		</div>
	);
}

export default HeroSection;
