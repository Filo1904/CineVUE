<template>

    <footer class="col-12">
        <div class="footer-content">
            <h1 class="footer-title">CINEVA</h1>
            <nav class="footer-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contatti</a></li>
                <li><a href="/who">Who</a></li>
            </nav>
            <div class="socials">
                <a href="https://www.instagram.com/filo1904/"><img src="../assets/img/instagram.png" alt=""></a>
                <a href="https://www.youtube.com/@filo1904"><img src="../assets/img/youtube.png" alt=""></a>
                <a href="https://www.tiktok.com/@filo1904"><img src="../assets/img/tiktok.png" alt=""></a>
                <a href="https://www.twitch.tv/filo1904"><img src="../assets/img/twitch.png" alt=""></a>
            </div>
        </div>
        <div class="separator"></div>
        <div class="go-top">
            <a href="#header">
                <p>Torna su</p>
                <img src="../assets/img/arrow_up.png" alt="">
            </a>
        </div>
        
    </footer>
</template>

<style>

footer {
    padding: 30px 30px 10px 30px;
    margin-top: 5vh;
    background-color: var(--tertiary);
}

/* #################### NAVBAR #################### */

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.footer-title {
    width: 25%;
    text-align: left;
}

.footer-nav {
    width: 50%;
    display: flex;
    background-color: var(--tertiary);
    list-style: none;
    justify-content: space-around;
}

.footer-nav a:link {
    color: var(--primary);
    text-decoration: none;
    font-size: 20px;
}

.footer-nav a:hover {
    color: var(--primary);
}

/* #################### SOCIALS ####################*/

.socials
{
    width: 25%;
    display: flex;
    justify-content: right;
    gap: 1vw;
}

.socials a {
    text-decoration: none;
}

.socials img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
}

/* #################### SEPARATOR #################### */

.separator {
    width: 100%;
    height: 1px;
    background-color: var(--primary);
    margin: 20px 0;
}

/* #################### GO TOP #################### */

.go-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.go-top a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--primary);
    font-size: 1.2rem;
}

.go-top img {
    width: 30px;
    height: 30px;
}



</style>