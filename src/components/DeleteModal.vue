<template>
<div class="modal-container">
    <div class="modal">
        <h3 class="font-black fw-semi-bold mb-4">Delete comment</h3>
        <p class="lh-sm fs-4">Are you sure you want to delete this commment? This will remove the comment and can't be undone.</p>
        <div class="d-flex gap-4 mt-4">
            <button @click="$emit('changeDeleting')" class="btn btn--gray fs-4">No, cancel</button>
            <button @click="$emit('makeDelete'); $emit('changeDeleting')" class="btn btn--red fs-4">Yes, delete</button>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import deleteComment from '@/modules/deleteComment'

export default defineComponent({
    setup() {
        return { deleteComment }
    },
    emits: ['changeDeleting', 'makeDelete'],
    props: {
        urlComment: {
            required: true,
            type: String,
        },
    }
})
</script>