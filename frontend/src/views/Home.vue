<template>
  <div id = 'homeViewView' class='view'>
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
#homeViewView{
  display:flex;
  align-items: center;
  justify-content: center;
}
#homeView{
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  height:100%;
  width:75%;
  padding-top: 8vh;
}
#homeView #homeWelcomeBannerContainer{
  width:100%;
}
#homeView #homeMainGridContainer{
  display:grid;
  grid-template-areas:  'infobox picture'
                        'additionalInfobox additionalInfobox';
  grid-template-columns: minmax(70%,80%) minmax(20%,20%);
  width:100%;
  height:100%;
  margin:3vh;
}
#homeView #homeMainGridContainer #homeInfoboxContainer{
  grid-area: infobox;
  height:100%;
  margin-right:3vw;
}
#homeView #homeMainGridContainer #homeAdditionalInfoboxContainer{
  grid-area: additionalInfobox;
  height:100%;
  margin-top: 3vh;
}
#homeView #homeMainGridContainer #homePictureContainer{
  grid-area: picture;
}
@media (max-aspect-ratio:28/19){
  #homeView #homeMainGridContainer{
    display:flex;
    flex-direction: column;
    width:100%;
    height:100%;
    margin:3vh;
  }
  #homePictureContainer{
    display:none;
  }
}
</style>