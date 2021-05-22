<template>
  <div class="header">
        <div class="container">
            <a class="logo" href="#">Social Interest e-Club</a>
            <div class="start">Start</div>
            <div class="progress-bar-front"></div>
            <div class="progress-bar-back"></div>
            <div class="finish">Finish</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&display=swap');

:root{
    --primary-color: #BA7EA0;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: white;
    margin: 0;
    font-family: 'Alegreya Sans', sans-serif;
    

    .container{
        width: 100%;
        margin: 0;
        padding: 1.6em;
        background: #eaeaea;
        display: grid;
        grid-template-columns: 30% 15% auto 15%;
        grid-template-rows: 2em;
        grid-template-areas: "logo start progress-bar finish";
        column-gap: 2%;
        justify-items: start;
        align-items: center;

    }
    .logo{
        text-decoration: none;
        font-weight: bold;
        color: #742957;
        font-size: 1.5em;
        justify-self: center;
    }

    .start{
        font-weight: regular;
        color: black;
        font-size: 1.3em;
        justify-self: end;
    }

    .finish{
        font-weight: regular;
        color: black;
        font-size: 1.3em;
        justify-self: start;
    }

    .progress-bar-front{
        content: '';
        background: var(--primary-color);
        width: 34%;
        height: 1.6em;
        border-radius: 50px;
        grid-row-start: 1;
        grid-column-start: 3;
        z-index: 2;
    }

    .progress-bar-back{
        content: '';
        background: #c4c4c4;
        width: 100%;
        justify-self: center;
        height: 1.6em;
        border-radius: 50px;
        grid-row-start: 1;
        grid-column-start: 3;
    }  
}

@media only screen and (min-width: 768px){
    .container .logo{
        font-size: 1.8em;
    }
    .start, .finish{
        font-size: 1.6em;
        font-weight: 500;
    }
}

@media only screen and (min-width: 1024px){
    .container .logo{
        font-size: 2em;
    }
    .start, .finish{
        font-size: 1.8em;
        font-weight: 500;
    }
}


</style>