<script>
	let { data, form } = $props();
</script>

<div class="mx-auto max-w-3xl space-y-10 px-4 py-8">
	{#each data.articles as article}
		<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
			<img
				src={article.image}
				alt=""
				class="mb-4 w-full rounded-md object-cover"
			/>

			<h2 class="text-xl font-semibold text-gray-800 mb-2">{article.author}</h2>
			<p class="text-gray-700 mb-1">{article.description}</p>
			<p class="text-sm text-gray-400 mb-4">Votes: {article.votes}</p>

			<!-- 💬 All Comments -->
			<div class="mt-6 border-t border-gray-100 pt-4">
				<h3 class="mb-3 text-lg font-semibold text-gray-800">💬 Comments</h3>
				{#each data.comments as comment}
					{#if comment.article_id === article.id}
						<div class="mb-4 rounded-md border border-gray-100 bg-gray-50 p-3 shadow-sm">
							<p class="text-sm font-medium text-gray-700">{comment.name}</p>
							<p class="text-sm text-gray-600">{comment.text}</p>
						</div>
					{/if}
				{/each}
			</div>

			<!-- ❤️ Like Form -->
			<form
				name="like"
				action="?/like"
				method="POST"
				class="mt-6 border-t border-gray-100 pt-4 space-y-3"
			>
				<input type="hidden" name="id" value={article.id} />
				<button
					type="submit"
					class="rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
				>
					❤️ Like
				</button>
			</form>

			<!-- ✍️ Comment Form -->
			<form
				name="writeComment"
				action="?/writeComment"
				method="POST"
				class="mt-6 space-y-4 border-t border-gray-100 pt-6"
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
