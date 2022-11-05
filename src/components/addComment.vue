<template>
  <div class="add-comment">
    <img class="comment__profile__img add-comment__item" :src="currentUser.image.png" alt="">
    <textarea class="input add-comment__textarea add-comment__item" rows="4" placeholder="Add a comment..." ></textarea>
    <button class="btn btn--blue add-comment__item">send</button>
  </div>
</template>

<script lang="ts">
import User from '@/types/User'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    currentUser: {
        required: true,
        type: Object as PropType<User>,
    },
  },
  setup() {
      return {}
  },
})
</script>
