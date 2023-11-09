<script lang="ts">
	export let title: string;
	export let img: string;
	export let height: string;
	export let post: string;

	function customClasses() {
		switch (height) {
			case 'small':
				return 'h-[156px]';
			case 'medium':
				return 'h-80';
			case 'large':
				return 'h-[640px] col-span-2';
			default:
				return 'h-80';
		}
	}
</script>

<div
	class="relative {customClasses()} px-10 pb-6 isolate flex flex-col justify-end overflow-hidden bg-gray-900 group rounded-md"
>
	<img
		class="absolute inset-0 -z-10 h-full w-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out rounded-md"
		src={img}
		alt=""
	/>
	<div class="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-900 via-neutral-950/40" />
	<div class="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10" />

	<h2 class="group-hover:-translate-y-8 transition-transform duration-300 ease-in-out">
		{title}
	</h2>
	<a
		href="/blog/{post}"
		class="absolute z-10 inline-block text-white opacity-0 bottom-0 group-hover:opacity-75 group-hover:-translate-y-5 transition duration-300 ease-in-out"
	>
		read more
		<span
			class="opacity-0 group-hover:opacity-100 absolute right-10 group-hover:translate-x-14 transition duration-300 ease-in-out -bottom-[1px]"
		>
			→
		</span>
	</a>
</div>
