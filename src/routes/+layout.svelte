<script>
  import '../app.css';
  let { data, children } = $props();

  import { onMount } from 'svelte';
  import { m } from '$lib/i18n/messages.js';
  import { languageTag, availableLanguageTags, setLanguageTag } from '$lib/i18n/runtime.js';

  // Store als $languageTag nutzbar (reaktiv)
  const langNames = { sq: 'Shqip', en: 'English', de: 'Deutsch', it: 'Italiano', zh: '中文' };

  onMount(() => {
    // initial aus SSR übernehmen
    setLanguageTag(data.lang || 'en');
  });
</script>

<div class="min-h-screen flex flex-col font-sans">
  <header class="bg-gray-900 text-white px-6 py-4 shadow-md">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <a href="/" class="text-2xl font-bold tracking-tight hover:text-gray-300">
        {m.app_title($languageTag)}
      </a>

      <nav class="flex items-center space-x-6 text-sm">
        <a href="/" class="hover:text-gray-300 transition">{m.nav_home($languageTag)}</a>
        <a href="/admin/articles" class="hover:text-gray-300 transition">{m.nav_admin($languageTag)}</a>
      </nav>

      <div class="flex items-center gap-3">
        {#if !data.user}
          <a href="/login" class="hover:text-gray-300 text-sm">{m.nav_login($languageTag)}</a>
          <a href="/register" class="hover:text-gray-300 text-sm">{m.nav_register($languageTag)}</a>
        {/if}

        {#if data.user}
          <form action="/logout?/logout" method="POST">
            <button
              type="submit"
              class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              {m.nav_logout($languageTag)}
            </button>
          </form>
        {/if}

        <!-- Sprach-Switcher: bind:value sorgt für sofortige UI-Aktualisierung -->
        <form action="/lang" method="POST" class="flex items-center gap-2">
          <label for="lang" class="sr-only">{m.lang_label($languageTag)}</label>
          <select
            id="lang"
            name="lang"
            class="rounded-md border border-gray-700 bg-gray-800/60 px-2 py-1 text-sm"
            bind:value={$languageTag}>
            {#each availableLanguageTags as tag}
              <option value={tag}>{langNames[tag]}</option>
            {/each}
          </select>
          <button type="submit" class="rounded-md bg-gray-700 px-3 py-1 text-sm hover:bg-gray-600">
            OK
          </button>
        </form>
      </div>
    </div>
  </header>

  <main class="flex-grow container mx-auto p-6">
    {@render children()}
  </main>

  <footer class="bg-gray-900 text-gray-300 text-sm mt-8">
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 class="text-lg font-semibold text-white mb-2">{m.footer_about_title($languageTag)}</h2>
        <p>{m.footer_about_text($languageTag)}</p>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-white mb-2">{m.footer_links_title($languageTag)}</h2>
        <ul class="space-y-1">
          <li><a href="/" class="hover:underline">{m.nav_home($languageTag)}</a></li>
          <li><a href="/upload" class="hover:underline">{m.footer_upload($languageTag)}</a></li>
          <li><a href="/top" class="hover:underline">{m.footer_top($languageTag)}</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-white mb-2">{m.footer_contact_title($languageTag)}</h2>
        <p>Email: web-app@imageblog.at</p>
        <p>Instagram: image_blog</p>
      </div>
    </div>
    <div class="bg-gray-800 text-center py-4 border-t border-gray-700">
      © 2025 ImageBlog – Alle Rechte vorbehalten.
    </div>
  </footer>
</div>
