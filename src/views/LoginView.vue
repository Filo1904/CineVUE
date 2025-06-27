<script setup></script>

<template>

    <div id="loginContent">
        <form action="" id="loginForm">
            <img src="../assets/img/logo.png" alt="">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input type="text" id="username" name="username">
            <label for="password">Password</label>
            <input type="text" id="password" name="password">
            <input type="submit" value="Accedi">
        </form>
    </div>
    
</template>

<style>

#loginContent {
    height: 600px;
    width: auto;
}

#loginForm {
    text-align: center;
    background: var(--primary);
    color: var(--white);

    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

#loginForm h1 {
    color : var(--white);
}

#loginForm label {
    font-weight: bold;
}   

#loginForm input {
    display: block;
    width: 66%;
    margin-left: 16%;
    margin-top: 2%;
}

#loginForm input[type="submit"] {
    background: var(--white);
    color: var(--primary);
    font-weight: bold;
    cursor: pointer;

    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    width: 68%;
}

#loginForm input[type="submit"]:hover {
    background: var(--tertiary);
    color: var(--white);
}






</style>