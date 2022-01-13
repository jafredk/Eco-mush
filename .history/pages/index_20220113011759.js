import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Homec from "../components/Homec";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>ECO-MUSH</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar />
			<HeroSection />

			<Homec />
		</div>
	);
}
