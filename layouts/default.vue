<template>
  <slot></slot>
</template>

<script setup></script>

<style lang="scss">
  @use '@/assets/styles/_variables' as var;

  .container {
    width: 96%;
    max-width: 346px;
    padding: 0 16px;
    margin: 0 auto;

    @media (min-width: var.$breakpoint-xs) {
      max-width: var.$breakpoint-s;
      padding: 0 36px;
    }

    @media (min-width: var.$breakpoint-s) {
      max-width: var.$breakpoint-m;
      padding: 0 36px;
    }

    @media (min-width: var.$breakpoint-m) {
      max-width: var.$breakpoint-l;
      padding: 0 36px;
    }

    @media (min-width: $breakpoints-l) {
      max-width: var.$breakpoint-xl;
      padding: 0 112px;
    }

    @media (min-width: $breakpoints-xl) {
      padding: 0 120px;
    }
  }
</style>
