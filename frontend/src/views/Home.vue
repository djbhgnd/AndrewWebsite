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
  }
}
</script>

<style>
#homeView{
  display:flex;
  flex-wrap:wrap;
  background-color:rgb(124, 124, 124);
  height:100vh;
  width:99vw;
}
#homeView #homeWelcomeBannerContainer{
  border-width: 5px;
  border: solid red;
  width:100%;
  height:15vh;
}
#homeView #homeMainGridContainer{
  display:grid;
  grid-template-areas:  'infobox picture'
                        'additionalInfobox additionalInfobox';
  width:100%;
  height:80vh;
}
#homeView #homeMainGridContainer #homeInfoboxContainer{
  grid-area: infobox;
  border-width: 5px;
  border: solid red;
}
#homeView #homeMainGridContainer #homeAdditionalInfoboxContainer{
  grid-area: additionalInfobox;
  border-width: 5px;
  border:solid red;
}
#homeView #homeMainGridContainer #homePictureContainer{
  grid-area: picture;
  border-width: 5px;
  border: solid red;
}
</style>