import { json } from '@sveltejs/kit';

async function getPosts() {
	let posts = [];
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			posts.push({ ...metadata, slug });
		}
	}

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
