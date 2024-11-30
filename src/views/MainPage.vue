<template>
  <main>
    <section class="section cards">
      <div class="container">
        <h1 class="card__main-title">Новости и статьи</h1>
        <card-btn-component />
        <div class="card__wrapper">
          <card-item-component
            v-for="card in goods"
            :key="card.id"
            :card="card"
          />
        </div>
        <pagination-component />
      </div>
    </section>
  </main>
</template>

<script>
import CardItemComponent from '@/components/CardItemComponent.vue';
import CardBtnComponent from '@/components/CardBtnComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  components: {
    CardItemComponent,
    CardBtnComponent,
    PaginationComponent,
  },
  computed: {
    goods() {
      return this.$store.getters['getGoods'];
    },
  },
};
</script>
