<script>
    import { RouterLink } from 'vue-router';
</script>

<template>

    <nav class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contatti</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/who">Who</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/newReview">Aggiungi Recensione</a></li>
        </ul>
    </nav>

</template>

<style>

.navbar {
    background: var(--secondary);
    text-align: center;
    position: sticky;
    top: 0;
}

.navbar li {
    list-style-type: none;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 2px solid var(--primary);
    margin-top: 10px;
    margin-bottom: 10px;
}

.navbar li:first-child {
    border-left: none;
}

.navbar a:link {
    text-decoration: none;
    font-size: 20px;
}

.navbar a:hover {
    font-weight: bold;
    color: var(--primary);
}

nav li {
    list-style-type: none;
}


nav li > a {
    color: var(--black);
}


</style>

