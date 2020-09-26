<template>
    <div id = 'resumePagePictureOfResume'>
        <img id = 'resumeImg' class='invert82' src="../assets/AndrewWilliamThomasFinalResume.jpg" alt = "resume"/>  
    </div>
</template>

<script>

</script>

<style>
    #resumePagePictureOfResume{
        display:flex;
        justify-content: center;
        background-color: white;
        width:80%;
    }
    #resumeImg{
        width: inherit;
        z-index: 1;
    }
    .dark-mode #resumePagePictureOfResume{
        background-color:rgb(46, 46, 46);
    }
</style>