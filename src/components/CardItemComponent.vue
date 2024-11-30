<template>
  <div class="card__content-wrap">
    <div class="card__img">
      <img class="card__img-item" src="../assets/img/card.png" alt="" />
    </div>
    <span class="card__date">{{ card.date }}</span>
    <div class="card__info">
      <h2 class="card__title">{{ card.title }}</h2>
      <p class="card__description">
        {{ card.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
