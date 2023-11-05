<script>
	import ThursdayMurderClub from '$lib/assets/books/ro_ttmc.webp';
	import TheManWhoDiedTwice from '$lib/assets/books/ro_tmwdt.webp';
	import TheBulletThatMissed from '$lib/assets/books/ro_tbtm.webp';
	import TheLastDevilToDie from '$lib/assets/books/ro_tldtd.webp';
</script>

<div>
	<h2 class="text-4xl font-black -mb-2 drop-shadow-md">Reading</h2>
	<section class="mb-20">
		<div class="bg-white w-full p-10 rounded-md">
			<div class="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 gap-10">
				<div class="shad w-40 rounded-sm">
					<span class="with-texture relative">
						<img src={TheLastDevilToDie} alt="book cover" class="w-40 rounded-sm object-cover" />
					</span>
				</div>
			</div>
		</div>
	</section>
	<h2 class="text-4xl font-black -mb-2 drop-shadow-md">Read</h2>
	<section>
		<div class="bg-white w-full p-10 rounded-md">
			<div class="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 gap-10">
				<div class="shad w-40 rounded-sm">
					<span class="with-texture relative">
						<img src={ThursdayMurderClub} alt="book cover" class="w-40 rounded-sm object-cover" />
					</span>
				</div>
				<div class="shad w-40 rounded-sm">
					<span class="with-texture relative">
						<img src={TheManWhoDiedTwice} alt="book cover" class="w-40 rounded-sm object-cover" />
					</span>
				</div>
				<div class="shad w-40 rounded-sm">
					<span class="with-texture relative">
						<img src={TheBulletThatMissed} alt="book cover" class="w-40 rounded-sm object-cover" />
					</span>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- 160 * 238 -->

<style>
	.with-texture::after {
		content: '';
		position: absolute;
		inset: 0px;
		border-radius: 2px;
		pointer-events: none;
		box-shadow: rgba(15, 15, 15, 0.1) 1px 1px 1px 0px inset;
		/* border-right: 1px solid rgba(255, 255, 255, 0.1); */
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.118) 0.65%,
			rgba(255, 255, 255, 0.2) 1.53%,
			rgba(255, 255, 255, 0.1) 2.38%,
			rgba(0, 0, 0, 0.05) 3.26%,
			rgba(255, 255, 255, 0.14) 5.68%,
			rgba(244, 244, 244, 0) 6.96%
		);
	}

	.shad {
		box-shadow: rgba(0, 0, 0, 0.15) 0px 1.1px 1.5px, rgba(0, 0, 0, 0.1) 0px 2.8px 3.9px,
			rgba(0, 0, 0, 0.08) 0px 5.8px 7.9px, rgba(0, 0, 0, 0.06) 0px 12.0455px 16.4px,
			rgba(0, 0, 0, 0.04) 0px 33px 45px;
	}
</style>
