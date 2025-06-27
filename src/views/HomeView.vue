<script setup>
</script>

<template>
    <h1>Cineva</h1>
    <h2>Benvenuti in questo sito</h2>
    <article>

    <p id="intro">Su <a href="/about"><i>Cineva</i></a> potete scrivere recensioni su <u>film e serie tv</u> e condividere i vostri pensieri con la <b>community</b>!</p>

    <hr>

    <div>
    <h2>Recensioni in evidenza</h2>
        <Review></Review>
        <hr>
        <Review></Review>
    </div>
    <div>
        <h4>Classifica attori più apprezzati</h4>
        <table class="home-table">
            <tr>
                <th colspan="2">Attore</th>
                <th>Voti</th>
            </tr>
            <tr>
                <td class="firstEl"><b>1</b></td>
                <td>Demi Moore</td>
                <td>1000</td>
            </tr>
            <tr>
                <td class="firstEl"><b>2</b></td>
                <td>Andrew Garfield</td>
                <td>900</td>
            </tr>
            <tr>
                <td class="firstEl"><b>3</b></td>
                <td>Tom Hanks</td>
                <td>500</td>
            </tr>
            <tr>
                <td class="firstEl leftCorner" rowspan="2"><b>Altri</b></td>
                <td>Leonardo DiCaprio</td>
                <td>450</td>
            </tr>
            <tr>
                <td>Brad Pitt</td>
                <td class="rightCorner">300</td>
            </tr>
            
        </table>
    </div>
    </article>
</template>

<style>

.home-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    background: transparent;
    border-radius: 10px;
}

.home-table th {
    background-color: var(--primary);
    color: var(--white);
    padding: 10px;
}

.home-table th:first-child
{
    border-top-left-radius: 10px;
}

.home-table th:last-child
{
    border-top-right-radius: 10px;
}

.home-table td {
    padding: 10px;
    text-align: center;
}

.home-table td.firstEl {
    background-color: var(--primary);
    color: var(--white);
    font-weight: bold;
}

.home-table td.leftCorner {
    border-bottom-left-radius: 10px;
}

.home-table tr:nth-child(even) {
    background-color: var(--secondary);
}

.home-table td.rightCorner {
    border-bottom-right-radius: 10px;
}


</style>