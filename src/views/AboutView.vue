<script setup>
</script>
<template>

    <div class="col-12">
        <h1 id="torna-su">Cos'è Cineva?</h1>
        <a href="/">Torna alla home</a>
    </div>
    <div class="col-3">
        <h4 id="titoloIndice">Indice:</h4>
        <ul id="indice">
            <li><a href="#informazioni">Informazioni sul sito</a></li>
            <li><a href="#a-chi">A chi è rivolto il sito?</a></li>
        </ul>
    </div>



    <article class="col-6">

        <h2 id="informazioni" >Informazioni sul sito</h2>
        <br>
        <p>Cineva permette a tutti i cinofili di esprirmere le prorpie opinioni su film e serie tv.</p>
        <p>Meglio la CGI di Black Widow o quella di Antman: Quantumania?</p>
        <p>Vi siete già ripresi dall'ultimo episodio di Severance?</p>

        <hr>
        <h2 id="a-chi">A chi è rivlato il sito?</h2>
        <p>Cineva è rivolto a tutti gli appassionati di cinema e serie tv che vogliono condividere le proprie opinioni con una community di appassionati.</p>

    </article>

    <aside class="col-3 ads">
        <p>Pubblicità</p>
    </aside>

</template>

<style>

#titoloIndice {
    background: var(--primary);
    font-weight: bold; 
    color: var(--white); 
    font-size: 20px;
    padding: 15px 0px 15px 45px;
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px;
    margin-bottom:0px;
}

#indice {
    list-style: none;
    background: var(--secondary);
    margin-top: 0px;
    padding: 0px 0px 20px 30px; 
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

#indice li {
    background: var(--white);
    margin-right: 30px;
    padding-top: 10px;
    padding-left: 15px;
}

#indice li a {
    color: var(--primary); 
}
#indice li:last-child {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

</style>
