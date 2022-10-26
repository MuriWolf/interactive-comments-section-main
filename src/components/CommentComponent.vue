<template>
  <div>

    <div class="comment">
          <div class="comment__rate">
              <button class="comment__rate__up-btn">+</button>
              <p class="comment__rate__value" >5</p>
              <button class="comment__rate__up-btn">-</button>
          </div>
        <div class="comment__content">
          <div class="comment__content__info">
            <div class="comment__profile">
              <img class="comment__profile__img" src="../assets/avatars/image-amyrobson.png" alt="">
              <h4 class="comment__profile__name">Joaozinho</h4>
              <p>1 month ago</p>
            </div>
            <button class="comment__reply-btn"><img src="../assets/icon-reply.svg" alt=""> Reply</button>
          </div>

          <div class="comment__content__text">
            <p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
          </div>
        </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
})
</script>


<style>

</style>