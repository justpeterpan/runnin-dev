<script>
	import ThursdayMurderClub from '$lib/assets/books/ro_ttmc.webp';
	import TheManWhoDiedTwice from '$lib/assets/books/ro_tmwdt.webp';
	import TheBulletThatMissed from '$lib/assets/books/ro_tbtm.webp';
	import TheLastDevilToDie from '$lib/assets/books/ro_tldtd.webp';
	import Book from '$lib/book.svelte';
</script>

<div>
	<h2 class="text-4xl font-black -mb-2 drop-shadow-md">Reading</h2>
	<section class="mb-20">
		<div class="w-full pt-10 rounded-md">
			<div class="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 gap-10">
				<Book cover={TheLastDevilToDie} />
			</div>
		</div>
	</section>
	<h2 class="text-4xl font-black -mb-2 drop-shadow-md">Read</h2>
	<section>
		<div class=" w-full pt-10 rounded-md">
			<div class="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 gap-10">
				<Book cover={ThursdayMurderClub} />
				<Book cover={TheManWhoDiedTwice} />
				<Book cover={TheBulletThatMissed} />
			</div>
		</div>
	</section>
</div>
