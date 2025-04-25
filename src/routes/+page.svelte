<script>
    let { data } = $props();
  </script>
  
  {#if data.user}
    <h1 class="my-8 text-center text-3xl font-semibold text-gray-800">
      Welcome back {data.user.username}
    </h1>
  {/if}
  
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.articles as article}
      <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
        <img
          src={article.image}
          alt=""
          class="h-48 w-full object-cover sm:h-56"
        />
        <div class="p-4 space-y-2">
          <h2 class="text-lg font-semibold text-gray-800">{article.author}</h2>
          <p class="text-sm text-gray-600">{article.description}</p>
          <p class="text-xs text-gray-400">Votes: {article.votes}</p>
          <a href="/admin/articles/{article.id}">Read More</a>
        </div>
      </div>
    {/each}
  </div>
  