<template>
  <div id = 'homeView'>
    <div id = 'homeWelcomeBannerContainer'>
      <homePageWelcomeBannerComp/>
    </div>
    <div id = 'homeMainGridContainer'>
      <div id = 'homeInfoboxContainer'>
        <homePageInfoboxComp/>
      </div>
      <div id = 'homePictureContainer'>
        <homePagePictureOfMeComp/>
      </div>
      <div id = 'homeAdditionalInfoboxContainer'>
        <homePageAdditionalInfoboxComp/>
      </div>  
    </div>
  </div>
</template>

<script>
import homePageAdditionalInfoboxComp from '../components/home-page-additional-infobox-comp.vue'
import homePageInfoboxComp from '../components/home-page-infobox-comp.vue'
import homePagePictureOfMeComp from '../components/home-page-picture-of-me-comp.vue'
import homePageWelcomeBannerComp from '../components/home-page-welcome-banner-comp.vue'
export default {
  name: 'home',
  components: {
    homePageAdditionalInfoboxComp,
    homePageInfoboxComp,
    homePagePictureOfMeComp,
    homePageWelcomeBannerComp
  },
  created() {
    document.getElementById('contactNavDiv').style.borderBottom = "solid rgb(70, 70, 70) 2px";
    document.getElementById('resumeNavDiv').style.borderBottom = "solid rgb(70, 70, 70) 2px";
    document.getElementById('projectsNavDiv').style.borderBottom = "solid rgb(70, 70, 70) 2px";
    document.getElementById('homeNavDiv').style.borderBottom = "none";

    document.getElementById('projectsNavDiv').style.borderLeft = "none";
    document.getElementById('contactNavDiv').style.borderLeft = "none";
    document.getElementById('resumeNavDiv').style.borderLeft = "none";
    document.getElementById('homeNavDiv').style.borderLeft = "solid rgb(70, 70, 70) 2px";

    document.getElementById('projectsNavDiv').style.borderRight = "none";
    document.getElementById('contactNavDiv').style.borderRight = "none";
    document.getElementById('resumeNavDiv').style.borderRight = "none";
    document.getElementById('homeNavDiv').style.borderRight = "solid rgb(70, 70, 70) 2px";

    document.getElementById('projectsNavDiv').style.borderTop = "none";
    document.getElementById('contactNavDiv').style.borderTop = "none";
    document.getElementById('resumeNavDiv').style.borderTop = "none";
    document.getElementById('homeNavDiv').style.borderTop = "solid rgb(70, 70, 70) 2px";
    
    document.getElementById('homeNavDiv').style.backgroundColor = "rgb(124, 124, 124)";
    document.getElementById('contactNavDiv').style.backgroundColor = "transparent";
    document.getElementById('resumeNavDiv').style.backgroundColor = "transparent";
    document.getElementById('projectsNavDiv').style.backgroundColor = "transparent";
  }
}
</script>

<style>
#homeView{
  display:flex;
  flex-wrap:wrap;
  height:100%;
  width:100%;
}
#homeView #homeWelcomeBannerContainer{
  width:100%;
}
#homeView #homeMainGridContainer{
  display:grid;
  grid-template-areas:  'infobox picture'
                        'additionalInfobox additionalInfobox';
  grid-template-columns: 1fr 1fr;
  width:100%;
  height:100%;
  margin:30px;
}
#homeView #homeMainGridContainer #homeInfoboxContainer{
  grid-area: infobox;
  height:100%;
  margin-right:30px;
}
#homeView #homeMainGridContainer #homeAdditionalInfoboxContainer{
  grid-area: additionalInfobox;
  height:100%;
  margin-top: 30px;
}
#homeView #homeMainGridContainer #homePictureContainer{
  grid-area: picture;
  height:100%;
}
</style>