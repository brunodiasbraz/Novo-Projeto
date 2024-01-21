<template>
    <a class="btn rounded-5 px-5 text-white c-roxo shadow" role="button" href="#">
        {{ text }}
    </a>
</template>

<script>
export default {
    name: 'BtnRoxo',
    props: {
        text: { type: String, default: '' }
    }
};
</script>
<style>
.c-roxo {
    background-color: #5B438B;
}
</style>