<script>
	import '../app.css';
	let { data,children } = $props();
</script>


  
  <div class="min-h-screen flex flex-col font-sans">

    <header class="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <!-- Logo -->
        <a href="/" class="text-2xl font-bold tracking-tight hover:text-gray-300">
          ImageBlog
        </a>
    
        <!-- Navigation Links -->
        <nav class="flex items-center space-x-6 text-sm">
          <a href="/" class="hover:text-gray-300 transition">Home</a>
          <a href="/admin/articles" class="hover:text-gray-300 transition">Admin</a>
        </nav>
    
        <!-- Auth Links -->
        <div class="flex items-center space-x-4 mt-2 md:mt-0">
          {#if !data.user}
            <a href="/login" class="hover:text-gray-300 text-sm">Login</a>
            <a href="/register" class="hover:text-gray-300 text-sm">Register</a>
          {/if}
    
          {#if data.user}
            <form action="/logout?/logout" method="POST">
              <button
                type="submit"
                class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Logout
              </button>
            </form>
          {/if}
        </div>
      </div>
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
