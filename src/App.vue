<template>
  <div class="wrapper">
    <header>
      <banner-component>
        <nav-bar-menu-component />
      </banner-component>

      <nav-bar-component />
      <breadcrumbs-component />
    </header>

    <router-view />

    <footer>
      <footer-component />
      <banner-component>
        <footer-other-info-component />
      </banner-component>
    </footer>
  </div>
</template>

<script>
import MainPage from '@/views/MainPage.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import NavBarMenuComponent from '@/components/NavBarMenuComponent.vue';
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FooterOtherInfoComponent from '@/components/FooterOtherInfoComponent.vue';

export default {
  components: {
    MainPage,
    BannerComponent,
    NavBarComponent,
    NavBarMenuComponent,
    BreadcrumbsComponent,
    FooterComponent,
    FooterOtherInfoComponent,
  },
};
</script>

<style></style>
