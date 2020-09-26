<template>
  <div id = 'resumeView' class='view'>
    <resumePageResumeBoxComp/>
  </div>
</template>

<script>
import resumePageResumeBoxComp from '../components/resume-page-resume-box-comp.vue'
export default {
  name: 'resume',
  components: {
    resumePageResumeBoxComp
  }
}
</script>

<style>
  #resumeView{
    display:flex;
    justify-content:center;
    padding-top: 8vh;
    width:100vw;
  }
</style>