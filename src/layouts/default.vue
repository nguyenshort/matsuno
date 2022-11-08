<template>
  <div
    class="text-gray-600 min-h-screen"
  >
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style>
.page-layout-enter-active,
.page-layout-leave-active {
  transition: all 0.5s;
}
.page-layout-enter,
.page-layout-leave-active {
  opacity: 0;
}
.page-layout-enter {
  transform: translateY(-25px);
}
.page-layout-leave-active {
  transform: translateY(+25px);
}
</style>
