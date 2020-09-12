<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {

    };
  },
  components: {

  },
  computed: {

  },
  created() {
    document.getElementById('homeNavDiv').style.borderBottom = "solid rgb(70, 70, 70) 2px";
    document.getElementById('resumeNavDiv').style.borderBottom = "solid rgb(70, 70, 70) 2px";
    document.getElementById('contactNavDiv').style.borderBottom = "solid rgb(70, 70, 70) 2px";
    document.getElementById('projectsNavDiv').style.borderBottom = "none";

    document.getElementById('homeNavDiv').style.borderLeft = "none";
    document.getElementById('contactNavDiv').style.borderLeft = "none";
    document.getElementById('resumeNavDiv').style.borderLeft = "none";
    document.getElementById('projectsNavDiv').style.borderLeft = "solid rgb(70, 70, 70) 2px";

    document.getElementById('homeNavDiv').style.borderRight = "none";
    document.getElementById('contactNavDiv').style.borderRight = "none";
    document.getElementById('resumeNavDiv').style.borderRight = "none";
    document.getElementById('projectsNavDiv').style.borderRight = "solid rgb(70, 70, 70) 2px";

    document.getElementById('homeNavDiv').style.borderTop = "none";
    document.getElementById('contactNavDiv').style.borderTop = "none";
    document.getElementById('resumeNavDiv').style.borderTop = "none";
    document.getElementById('projectsNavDiv').style.borderTop = "solid rgb(70, 70, 70) 2px";

    document.getElementById('projectsNavDiv').style.backgroundColor = "rgb(124, 124, 124)";
    document.getElementById('homeNavDiv').style.backgroundColor = "transparent";
    document.getElementById('resumeNavDiv').style.backgroundColor = "transparent";
    document.getElementById('contactNavDiv').style.backgroundColor = "transparent";
  },
  methods: {

  }
};
</script>

<style>

</style>