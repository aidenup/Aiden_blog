<script setup lang="ts">
import type { BlogPost } from '@/types/blog'

const { path } = useRoute()
const articles = await queryContent(path).findOne()
const data = computed<BlogPost>(() => {
  return {
    title: articles.title || 'no-title available',
    description: articles.description || 'no-descriptoin available',
    image: articles.image || '/nuxt-blog/no-image_cyyits.png',
    alt: articles.alt || 'no alter data available',
    ogImage: articles.ogImage || '/nuxt-blog/no-image_cyyits.png',
    date: articles.date || 'not-date-available',
    tags: articles.tags || [],
    published: articles.published || false,
  }
})
</script>

<template>
  <main class="px-6 container max-w-5xl mx-auto">
    <header>
      <h1 class="text-xl md:text-3xl lg:text-4xl m-7 font-bold text-center">
        {{ data.title || '' }}
      </h1>
      <img
        :src="data.image || ''"
        :alt="data.alt || ''"
        class="m-auto rounded-2xl shadow-lg h-52 md:h-96 w-4/5 content-center object-cover"
      >
      <p class="text-xs sm:text-sm my-3 max-w-3xl mx-auto text-center">
        {{ data.description }}
      </p>
      <div class="flex w-full justify-center text-xs md:text-base my-8">
        <div class="md:flex content-center gap-8 text-xs sm:text-sm">
          <div class="flex items-center font-semibold">
            <LogoDate />
            <p>{{ data.date || '' }}</p>
          </div>
          <div class="flex items-center gap-2 flex-wrap my-5">
            <LogoTag />
            <template v-for="tag in data.tags" :key="tag">
              <span class="bg-gray-200 rounded-md px-2 py-1 font-semibold">{{ tag }}</span>
            </template>
          </div>
        </div>
      </div>
    </header>
    <div
      class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc prose-img:rounded-lg"
    >
      <ContentRenderer :value="articles">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </main>
</template>

<style>

</style>
