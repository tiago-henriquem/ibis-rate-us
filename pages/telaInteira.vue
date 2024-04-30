<template>
	<main class="w-screen h-screen flex flex-col justify-center items-center">
		<Card class="h-full">
			<div class="w-[150px] h-[150px]">
				<img
					src="@/assets/ibis-logo.webp"
					alt="Logo do Ibis Hotel, onde tem o formato de quadrado com as arestas afundadas para dentro com o background na cor vermelha do Ibis e o escrito em branco 'ibis'"
					class="w-full"
				/>
			</div>

			<div
				class="w-full mb-8 flex flex-col justify-center items-center gap-[25px]"
			>
				<h2
					class="w-3/5 text-[#fff] font-sans font-extrabold text-center text-[18px] leading-[1.3]"
				>
					<span class="bg-[#e40821]">ESPERAMOS QUE SUA EXPERIÊNCIA TENHA</span
					><br />
					<span class="bg-[#e40821] px-2">SIDO INCRÍVEL</span>
				</h2>

				<p
					class="w-[55%] text-[#000] font-semibold font-sans text-center text-[15px] leading-[1.1]"
				>
					Avalie a sua experiência conosco em poucos minutos
				</p>

				<button class="w-full max-w-[200px] h-[50px] bg-[#e40821] rounded-3xl">
					<a
						href="https://www.google.com/travel/search?q=ibis%20campinas&g2lb=2502548%2C2503771%2C2503781%2C2504374%2C2504511%2C4258168%2C4284970%2C4291517%2C4814050%2C4874190%2C4893075%2C4965990%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72458066%2C72462234%2C72469155%2C72470440%2C72470899%2C72471280%2C72472051%2C72473738%2C72473841%2C72483525%2C72484083%2C72484736%2C72485656%2C72486593%2C72494250%2C72496942%2C72498532%2C72505054%2C72508975%2C72510103%2C72511833%2C72512134%2C72513373%2C72513513%2C72515119%2C72519203%2C72521817&hl=pt-BR&gl=br&ssta=1&ts=CAEaHhIcEhQKBwjoDxAEGA4SBwjoDxAEGA8YATIECAAQACoOCgw6A0JSTEIFEgMVDWc&qs=CAAgASgAMiZDaGdJcUlIOThNbmdtUFF2R2d3dlp5OHhhR015TkROeGJESVFBUQ&ap=KigKEgmYIfhHF-09wBFKaUe7hxNJwBISCZOuyWv6tjTAEUppR7uvZkbAMAC6AQdyZXZpZXdz&ictx=1&ved=0CAAQ5JsGahgKEwiwjPvhz-KEAxUAAAAAHQAAAAAQkBM"
						target="_blank"
						class="text-[#fff] underline font-bold text-xl"
					>
						Google
					</a>
				</button>

				<button class="w-full max-w-[200px] h-[50px] bg-[#e40821] rounded-3xl">
					<a
						href="https://www.tripadvisor.com.br/Hotel_Review-g303605-d306908-Reviews-Ibis_Campinas-Campinas_State_of_Sao_Paulo.html"
						target="_blank"
						class="text-[#fff] underline font-bold text-xl"
					>
						TripAdvisor
					</a>
				</button>
			</div>
		</Card>
	</main>
</template>

<style scoped>
h2 span {
	display: inline-block !important;
}
</style>
