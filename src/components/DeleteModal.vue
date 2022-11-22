<template>
    <div class="modal-container">
    <div class="modal">
        <h3 class="font-black"><strong>Delete comment</strong></h3>
        <p>Are you sure you want to delete this commment? This will remove the comment and can't be undone.</p>
        <div class="d-flex gap-4">
            <button class="btn btn--gray">No, cancel</button>
            <button class="btn btn--red">Yes, delete</button>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>