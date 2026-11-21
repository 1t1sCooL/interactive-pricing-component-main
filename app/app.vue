<script setup lang="ts">
import faviconUrl from '~/shared/assets/images/favicon-32x32.png?url';

useHead({
  link: [{ rel: 'icon', type: 'image/png', sizes: '32x32', href: faviconUrl }],
});
</script>

<template>
  <NuxtPage />
</template>
