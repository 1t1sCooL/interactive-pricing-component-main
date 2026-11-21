<script setup lang="ts">
import manropeUrl from '~/shared/assets/fonts/Manrope-latin.woff2?url';
import faviconUrl from '~/shared/assets/images/favicon-32x32.png?url';

useHead({
  link: [
    { rel: 'preload', href: manropeUrl, as: 'font', type: 'font/woff2', crossorigin: '' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: faviconUrl },
  ],
});
</script>

<template>
  <NuxtPage />
</template>
