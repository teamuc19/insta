<script>
	let { data,form } = $props();
</script>

<div class="mx-auto max-w-3xl space-y-10 px-4 py-8">
	{#each data.articles as article}
		<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
			<img
				src={article.image}
				alt=""
				class="mb-4 w-full rounded-md object-cover"
			/>

            <div>
                
            </div>

			<h2 class="text-xl font-semibold text-gray-800 mb-2">{article.author}</h2>
			<p class="text-gray-700 mb-1">{article.description}</p>
			<p class="text-sm text-gray-400 mb-4">Votes: {article.votes}</p>

			<!-- Like Form -->
			<form
				name="like"
				action="/like"
				method="POST"
				class="space-y-3 border-t border-gray-100 pt-4"
			>
				<input type="hidden" name="id" value={article.id} />

				<button
					type="submit"
					class="rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
				>
					❤️ Like
				</button>
			</form>

			<!-- Comment Form -->
			<form
				name="writeComment"
				action="?/writeComment"
				method="POST"
				class="space-y-4 border-t border-gray-100 pt-6 mt-6"
			>
				<input type="hidden" name="articleID" value={article.id} />

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-1" for="comment_name">
						Your Name
					</label>
					<input
						type="text"
						name="name"
						id="comment_name"
						required
						placeholder="Enter your name"
						class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring focus:ring-blue-200"
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-1" for="comment_text">
						Your Comment
					</label>
					<textarea
						name="text"
						id="comment_text"
						required
						rows="4"
						placeholder="Write your thoughts..."
						class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring focus:ring-blue-200"
					></textarea>
				</div>

				<button
					type="submit"
					class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
				>
					💬 Submit Comment
				</button>
			</form>
		</div>
	{/each}
</div>
