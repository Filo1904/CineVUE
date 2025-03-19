<script setup>

import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Review from '@/components/Review.vue';

</script>

<template>

    <Header></Header>

    <h1>Cineva</h1>
    <h2>Benvenuti in questo sito</h2>

    <Navbar></Navbar>

    <p>Su <a href="/about"><i>Cineva</i></a> potete scrivere recensioni su <u>film e serie tv</u> e condividere i vostri pensieri con la <b>community</b>!</p>

    <hr>

    <h2>Recensioni in evidenza</h2>
    <Review></Review>
    <hr>
    <Review></Review>

</template>

<css>



</css>

