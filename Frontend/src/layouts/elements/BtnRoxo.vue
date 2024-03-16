<template>
    <a class="btn rounded-5 text-white c-roxo shadow" role="button" href="#">
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

.c-roxo:hover {
    background-color: #7f6ba7;
}
</style>