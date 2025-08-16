<script setup lang="ts">
</script>

<template>
  <div class="text-image-container">
    <figure class="image-section">
      <slot name="img" />
      <figcaption v-if="$slots.caption" class="caption">
        <slot name="caption" />
      </figcaption>
    </figure>

    <div v-if="$slots.text" class="text-content">
      <slot name="text" />
    </div>
  </div>
</template>

<style scoped>
.text-image-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
  min-width: 200px;
}

.image-section img {
  margin-bottom: 0.5rem;
}

.caption {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
  width: 100%;
  text-align: center;
}

.caption > a {
  text-decoration: underline;
}

.text-content {
  flex: 1;
}

/* Desktop: Image on left, text on right */
@media (min-width: 768px) {
  .text-image-container {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }

  .image-section {
    flex-shrink: 0;
    align-items: flex-start;
    text-align: left;
  }

  .text-content {
    margin-left: 0;
  }
}

/* Mobile: Image centered above text */
@media (max-width: 767px) {
  .image-section {
    align-self: center;
    margin-bottom: 1rem;
  }
}
</style>