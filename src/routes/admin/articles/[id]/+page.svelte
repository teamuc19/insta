<script>
	let { data } = $props();
</script>

<div class="mx-auto max-w-3xl space-y-10 px-4 py-8">
	{#each data.articles as article}
		<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
			<img
				src={article.image}
				alt=""
				class="mb-4 w-full rounded-md object-cover"
			/>

			<h2 class="text-xl font-semibold text-gray-800 mb-2">{article.author}</h2>
			<p class="text-gray-700 mb-1">{article.description}</p>
			<p class="text-sm text-gray-400 mb-4">Votes: {article.votes}</p>

			<form action="/like" method="POST" class="space-y-3">
				<!-- Hidden input with article ID -->
				<input type="hidden" name="article_id" value={article.id} />

				<div>
					<label class="block text-sm font-medium text-gray-600 mb-1" for="name">Your Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						required
						class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring"
					/>
				</div>

				<button
					type="submit"
					class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
				>
					Like ❤️
				</button>
			</form>
		</div>
	{/each}
</div>
