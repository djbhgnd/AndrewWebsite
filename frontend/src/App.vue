<template>
  <div id="app">
    <nav>
    <div id="nav">
      <div id = "fillerNavDiv">

      </div>
      <div id = "homeNavDiv">
        <router-link v-bind:to="{ name: 'home' }">Home</router-link>
      </div>
      <div id = "resumeNavDiv">
        <router-link v-bind:to="{ name: 'resume' }">My Resume</router-link>
      </div>
      <div id = "contactNavDiv">
        <router-link v-bind:to="{ name: 'contact' }">Contact Me</router-link>
      </div>
      <div id = "projectsNavDiv">
        <router-link v-bind:to="{ name: 'projects' }">Technical Projects</router-link>
      </div>  
    </div>
    </nav>
    <router-view/>
  </div> 
</template>

<style>
#app{
  min-height: 100vh;
  background-color:rgb(124, 124, 124);
}
#nav{
  height:100px;
  background-color:rgb(144, 144, 145);
  display:flex;
  justify-content: flex-end;
  align-items: center;
  font-size:larger;;
}
#nav a{
  color:red;
}
#nav a:hover{
  text-decoration: underline;
}
p{
  text-indent: 4ch;
}
#fillerNavDiv{
  height:100%;
  width:100%;
  border-bottom:solid rgb(70, 70, 70) 2px;
}
#homeNavDiv{
  border-bottom: solid rgb(70, 70, 70) 2px;
  width:300px;
  display:flex;
  height:100%;
  align-items: center;
  justify-content: center;
}
#resumeNavDiv{
  border-bottom: solid rgb(70, 70, 70) 2px;
  width:300px;
  display:flex;
  height:100%;
  align-items: center;
  justify-content: center;
}
#projectsNavDiv{
  border-bottom: solid rgb(70, 70, 70) 2px;
  width:300px;
  display:flex;
  height:100%;
  align-items: center;
  justify-content: center;
}
#contactNavDiv{
  border-bottom: solid rgb(70, 70, 70) 2px;
  width:300px;
  display:flex;
  height:100%;
  align-items: center;
  justify-content: center;
}
</style>
