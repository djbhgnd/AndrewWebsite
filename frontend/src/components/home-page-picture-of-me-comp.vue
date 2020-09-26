<template>
    <div id = "homePagepictureOfMe">
        <img src="../assets/squareheadshot.jpg" alt = "headshot" class="headshot"/>
    </div>
</template>

<script>

</script>

<style>
    #homePagepictureOfMe{
        display:flex;
        justify-content: center;
        align-items: center;
        padding-bottom:5vh;
        margin-top:2vh;
        object-fit:contain;
    }
    .headshot{
        border-radius: 50%;
        height:100%;
        width:100%;
    }
</style>