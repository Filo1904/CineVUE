<script setup></script>

<template>
    <Header></Header>
    <Navbar></Navbar>
    <h1>Cineva - Nuova Recensione</h1>
    <form action="" method="POST">
        <label for="title">Titolo:</label>
        <input type="text" name="title" id="title">
        <label for="description">Descrizione:</label>
        <textarea name="description" id="description"></textarea>
        <label for="type">Tipo:</label>
        <input type="radio" name="type" id="type" value="film">Film</input>
        <input type="radio" name="type" id="type" value="serie tv">Serie TV</input>
        <label for="search">Voto:</label>
        <input type="number" name="rating" id="rating" min="1" max="5">
    </form>

</template>