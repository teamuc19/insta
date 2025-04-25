<script>
	let { form } = $props();
</script>

<main class="flex h-screen items-center justify-center bg-gray-50 p-4">
	<div class="w-full max-w-sm rounded-xl bg-white p-6 shadow-md">
		<h1 class="mb-4 text-center text-lg font-medium text-gray-800">New Article</h1>
		<form
			action="?/new"
			method="POST"
			class="space-y-3"
			use:enhance
			enctype="multipart/form-data"
		>
			<input
				type="file"
				name="img"
				class="w-full rounded border border-gray-300 p-2 text-sm"
			/>
			<input
				type="text"
				name="auth"
				placeholder="Author"
				class="w-full rounded border border-gray-300 p-2 text-sm"
			/>
			<textarea
				name="desc"
				placeholder="Description..."
				class="w-full rounded border border-gray-300 p-2 text-sm"
				rows="4"
			></textarea>
			<button
				type="submit"
				class="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
			>
				Submit Article
			</button>
			<a href="/admin/api/article" class="block text-center text-sm text-blue-500 hover:underline">
				Back to Articles
			</a>
		</form>
	</div>
</main>
