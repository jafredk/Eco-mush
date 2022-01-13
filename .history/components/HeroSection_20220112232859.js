import React from "react";
import Image from "next/dist/client/image";


function HeroSection() {
	return (
		<div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
			<div>
			<Image src="https://ats.org/wp-content/uploads/2021/03/Impact-Musrooms-1160x700.jpg" width={1500} height={300} />
			</div>

			<div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
				<h1 className="text-center">Let's start 🚀 </h1>
			</div>
		</div>
	);
}

export default HeroSection;
