<template>
  <div class="wrapperBG">
    <div id = 'contactView' class='view'>
      <div id = 'phoneInfoContainer' class = 'contactViewSection'>
        <contactPagePhoneBoxComp/>
      </div>
      <div id = 'emailInfoContainer' class = 'contactViewSection'>
        <contactPageEmailBoxComp/>
      </div>
      <div id = 'linkedinInfoContainer' class = 'contactViewSection'>
        <contactPageLinkedinBoxComp/>
      </div>
      <div id = 'githubInfoContainer' class = 'contactViewSection'>
        <contactPageGithubBoxComp/>
      </div>
    </div>
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import contactPagePhoneBoxComp from '../components/contact-page-phone-box-comp.vue'
import contactPageEmailBoxComp from '../components/contact-page-email-box-comp.vue'
import contactPageLinkedinBoxComp from '../components/contact-page-linkedin-box-comp.vue'
import contactPageGithubBoxComp from '../components/contact-page-github-box-comp.vue'

export default {
  name: 'contact',
  components: {
    contactPagePhoneBoxComp,
    contactPageEmailBoxComp,
    contactPageLinkedinBoxComp,
    contactPageGithubBoxComp
  }
};
</script>

<style>

</style>