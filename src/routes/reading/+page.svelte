<script>
	import ThursdayMurderClub from '$lib/assets/books/ro_ttmc.webp';
	import TheManWhoDiedTwice from '$lib/assets/books/ro_tmwdt.webp';
	import TheBulletThatMissed from '$lib/assets/books/ro_tbtm.webp';
	import TheLastDevilToDie from '$lib/assets/books/ro_tldtd.webp';
	import Book from '$lib/book.svelte';
	import Rating from '$lib/rating.svelte';
</script>

<div>
	<h2 class="text-4xl font-black -mb-2 drop-shadow-md">Reading</h2>
	<section class="mb-20">
		<div class="w-full pt-10 rounded-md">
			<div class="grid grid-cols-1 place-items-center sm:place-items-start gap-10">
				<div class="flex flex-col sm:flex-row place-items-center">
					<div class="sm:mr-4 mb-4 sm:mb-0">
						<Book cover={TheLastDevilToDie} />
					</div>
					<div class="flex flex-col">
						<span> Richard Osman - The Last Devil To Die</span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<h2 class="text-4xl font-black -mb-2 drop-shadow-md">Read</h2>
	<section>
		<div class=" w-full pt-10 rounded-md">
			<div class="grid grid-cols-1 place-items-center sm:place-items-start gap-10">
				<div class="flex flex-col sm:flex-row place-items-center">
					<div class="sm:mr-4 mb-4 sm:mb-0">
						<Book cover={ThursdayMurderClub} />
					</div>
					<div class="flex flex-col">
						<span> Richard Osman - The Thursday Murder Club</span>
						<Rating rating={4} />
					</div>
				</div>
				<div class="flex flex-col sm:flex-row place-items-center">
					<div class="sm:mr-4 mb-4 sm:mb-0">
						<Book cover={TheManWhoDiedTwice} />
					</div>
					<div class="flex flex-col">
						<span> Richard Osman - The Man Who Died Twice</span>
						<Rating rating={4.5} />
					</div>
				</div>
				<div class="flex flex-col sm:flex-row place-items-center">
					<div class="sm:mr-4 mb-4 sm:mb-0">
						<Book cover={TheBulletThatMissed} />
					</div>
					<div class="flex flex-col">
						<span> Richard Osman - The Bullet That Missed</span>
						<Rating rating={4.5} />
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
