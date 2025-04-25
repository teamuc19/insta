<script>
	let { data } = $props();
	import { enhance } from '$app/forms';
</script>

<div class="flex flex-col items-center justify-center p-6">
	<h1 class="mb-4 text-center text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
	<a
		href="/admin/articles/new"
		class="mb-6 text-sm text-blue-600 hover:underline"
	>
		+ Create a new article
	</a>
</div>

<main class="space-y-6 px-4 pb-12">
	{#each data.articles as article}
		<div class="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row">
			<img src={article.image} alt="" class="h-40 w-40 rounded-lg object-cover" />

			<div class="flex-1 space-y-1 text-sm text-gray-700">
				<p><span class="font-semibold text-gray-800">ID:</span> {article.id}</p>
				<p><span class="font-semibold text-gray-800">Description:</span> {article.description}</p>
				<p><span class="font-semibold text-gray-800">Image:</span> {article.image}</p>
				<p><span class="font-semibold text-gray-800">Author:</span> {article.author}</p>
				<p><span class="font-semibold text-gray-800">Votes:</span> {article.votes}</p>

				<form action="?/delete" method="POST" class="pt-2" use:enhance>
					<input type="hidden" name="id" value={article.id} />
					<button
						type="submit"
						class="rounded bg-red-500 px-3 py-1.5 text-white hover:bg-red-600"
					>
						Delete
					</button>
				</form>
			</div>
		</div>
	{/each}
</main>
