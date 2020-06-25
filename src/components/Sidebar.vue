<template>
    <aside class="sidebar">
        <ul class="sidebar__list">
            <li class="sidebar__item">
                <router-link class="sidebar__link" :to="{ name: 'todo' }">TODOリスト</router-link>
            </li>
            <li class="sidebar__item">
                <router-link class="sidebar__link" :to="{ name: 'about' }">このサイトについて</router-link>
            </li>
        </ul>
    </aside>
</template>

<style lang="scss" scoped>
    .sidebar {
        position: sticky;
        top: 4rem;
        height: 100%;
        min-height: calc(100vh - 4rem);
        background: #F0F1F4;
        flex-basis: 17rem;
        width: 17rem;
        &__list {
            padding: 2rem;
            list-style-type: none;
        }
        &__item:not(:first-child) {
            margin-top: 2rem;
        }
        &__link {
            font-size: 1.25rem;
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }
    }
</style>