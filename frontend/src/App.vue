<template>
  <div id="app">
    <nav>
    <div id="nav">
      <div></div>
      <router-link v-bind:to="{ name: 'home' }">Home</router-link>
      <router-link v-bind:to="{ name: 'resume' }">My Resume</router-link>
      <router-link v-bind:to="{ name: 'contact' }">Contact Me</router-link>
      <router-link v-bind:to="{ name: 'projects' }">Technical Projects</router-link>
    </div>
    </nav>
    <router-view/>
  </div> 
</template>

<style>
#nav{
  height:100px;
  background-color:rgb(144, 144, 145);
  display:flex;
  justify-content: space-around;
  align-items: center;
  font-size:larger;
}
#nav a{
  color:red;
}
#nav a:hover{
  text-decoration: underline;
}
</style>
