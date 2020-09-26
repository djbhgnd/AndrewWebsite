<template>
  <div id = 'projectsView' class='view'>
    <div id = 'projectsOverviewCompContainer'>
      <projectsPageOverviewComp/>
    </div>
    <div id = 'projectsCompsContainer'>
      <projectsPageCraftboxComp/>
      <projectsPageTenmoBankingComp/>
      <projectsPageVendingMachineComp/>

    </div>
  </div>
</template>

<script>
import projectsPageCraftboxComp from '../components/technical-projects-page-craftbox-comp.vue'
import projectsPageOverviewComp from '../components/technical-projects-page-overview-comp.vue'
import projectsPageTenmoBankingComp from '../components/technical-projects-page-tenmo-comp.vue'
import projectsPageVendingMachineComp from '../components/technical-projects-page-vendingmachine-comp.vue'

export default {
  name: 'projects',
  components: {
    projectsPageCraftboxComp,
    projectsPageOverviewComp,
    projectsPageTenmoBankingComp,
    projectsPageVendingMachineComp
  }
};
</script>

<style>
#projectsView{
  padding-top: 8vh;
  display:flex;
  flex-direction: column;
  min-height:100vh;
  width:100%;
}
#projectsOverviewCompContainer{
  width:stretch;
}
#projectsOverviewDiv{
  display:flex;
  align-items: center;
  flex-direction: column;
  font-size:2vh;
}
#projectsCompsContainer{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}
.projectCard{
  height:60vh;
  width:37.5vh;
  background-image: linear-gradient(45deg, rgb(214, 214, 214), rgb(238, 238, 238));
  display:flex;
  flex-direction: column;
}
.projectCardWrapper{
  border: solid 1vh;
  border-image-source: url("../assets/spacebg2.jpg");
  border-image-slice: 400;
  border-image-repeat:stretch;
  margin: 4vh 2vw;
}
.dark-mode .projectCardWrapper{
  border-image-source: url("../assets/spacebg.jpeg");
  border-image-slice: 30;
}
.projectOverviewWrapper{
  border: solid 1vh;
  border-image-source: url("../assets/spacebg2.jpg");
  border-image-slice: 400;
  border-image-repeat:stretch;
  margin: 2vh calc((100vw - 118.5vh - 8vw) / 2);
  margin-bottom:0;
  padding: 2vh 2vw;
}
@media(max-aspect-ratio:1291/959){
  .projectOverviewWrapper{
    margin: 2vh calc((100vw - 83vh) / 2);
    margin-bottom:0;
  }
}
@media(max-aspect-ratio:823/959){
  .projectOverviewWrapper{
    margin: 2vh calc((100vw - 39.5vh) / 2);
    margin-bottom:0;
  }
}
.dark-mode .projectOverviewWrapper{
  border-image-source: url("../assets/spacebg.jpeg");
  border-image-slice:30;
}
.projectPictureDiv{
  margin: 0 3vh 10% 3vh;
  border: solid .2vh;
  border-image-source: url("../assets/spacebg2.jpg");
  border-image-slice: 30;
  border-image-repeat:stretch;
  height:20vh;
}
.projectPictureDiv img{
  object-fit:cover;
  object-position: top left;
}
.dark-mode .projectPictureDiv{
  border-image-source: url("../assets/spacebg.jpeg");
}
.projectInfoDiv ul{
  line-height:initial;
  margin-bottom:0;
  width:100%;
  padding:0 2vh 0 5vh;
}
.projectInfoDiv ul.word-wrap li{
  width:100%;
  word-wrap:break-word;
}
.projectInfoDiv{
  display:flex;
  line-height: 4vh;
  font-size:2vh;
  flex-direction: column;
  overflow-y:scroll;
  margin:.5vh 2vh 1vh 2vh;
  padding-left:2ch;
  background-color:rgba(240, 240, 240, 0.541);
  border-radius: 1vh;
  width: stretch;
}
.dark-mode .projectInfoDiv{
  background-color:rgba(240, 240, 240, 0.075);
}
.projectInfoDivWrapper{
  display:flex;
  margin: 0 3vh 10% 3vh;
  border: outset rgba(0, 78, 74, 0.253) .5vh;
  overflow-y:hidden;
  background-color:rgb(204, 204, 204);
  border-radius: 2vh;
}
.dark-mode .projectInfoDivWrapper{
  background-color:gray;
}
.dark-mode .projectInfoDivWrapper{
  border: outset rgba(50, 0, 78, 0.253) .5vh;
}
.dark-mode .projectCard{
  background-image: linear-gradient(45deg, rgb(75, 75, 75), rgb(102, 102, 102));
}
.projectTitleDiv{
  font-size: 2vh;
  text-align: center;
  margin: 1vh 0;
}
</style>