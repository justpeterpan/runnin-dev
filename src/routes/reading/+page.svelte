<script>
	const books = [
		{ title: 'Book 1', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 2', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 3', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 4', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 5', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 6', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 7', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 8', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 9', cover: 'https://via.placeholder.com/150x200' },
		{ title: 'Book 10', cover: 'https://via.placeholder.com/150x200' }
	];
</script>

<div class="grid grid-cols-3 gap-4">
	{#each books as book}
		<img class="mb-2" src={book.cover} alt={book.title} />
	{/each}
</div>
