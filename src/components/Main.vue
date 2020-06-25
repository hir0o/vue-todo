<template>
    <main>
        <slot />
    </main>
</template>

<style lang="scss" scoped>
    main {
        flex-basis: calc(100% - 17rem);
        width: calc(100% - 17rem);
        padding: 5rem;
    }
</style>