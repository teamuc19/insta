<script>
	import '../app.css';
	let { data,children } = $props();
</script>


  
  <div class="min-h-screen flex flex-col font-sans">

	<header class="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
		<a href="/" class="text-lg font-bold">📷 ImageBlog</a>
		<nav class="space-x-4 text-sm">
		  <a href="/" class="hover:text-gray-300">Home</a>
		  <a href="/admin/articles" class="hover:text-gray-300">Admin</a>
		</nav>
    {#if !data.user}
		<a href="/login">Login</a>
    <a href="/register">register</a>
    {/if}

    {#if data.user}
		<form action="/logout?/logout" method="POST">
      <button type="submit" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-white hover:bg-blue-500">
        Logout
      </button>
    </form>
    {/if}
	  </header>
    
    <!-- Hauptinhalt -->
    <main class="flex-grow container mx-auto p-6">

		{@render children()}



    </main>
    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 text-sm mt-8">
      <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-lg font-semibold text-white mb-2">Über uns</h2>
          <p>ImageBlog ist ein Blog für Bilder.</p>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-white mb-2">Links</h2>
          <ul class="space-y-1">
            <li><a href="/" class="hover:underline">Home</a></li>
            <li><a href="/upload" class="hover:underline">Bild hochladen</a></li>
            <li><a href="/top" class="hover:underline">Top Bilder</a></li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-white mb-2">Kontakt</h2>
          <p>Email: gwrse@imageblog.at</p>
          <p>Instagram: image_blog</p>
        </div>
      </div>
      <div class="bg-gray-800 text-center py-4 border-t border-gray-700">
        © 2025 ImageBlog – Alle Rechte vorbehalten.
      </div>
    </footer>
  </div>
