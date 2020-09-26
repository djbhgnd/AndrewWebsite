<template>
  <div id="app">
    <nav id = "nav" class = 'shadow-lg'>
      <div id = 'andrewLeftNavDiv'>
        <div id = 'viewingModeButtonContainer'>
          <button v-show='this.$store.state.isDarkMode===true' id='viewingModeButton' class="btn btn-secondary" v-on:click='toggleViewingMode()'><span><img id='lightbulb-pic' src="./assets/lightbulb.png" alt = "lightbulb">Explore In Light Mode</span></button>
          <button v-show='this.$store.state.isDarkMode===false' id='viewingModeButton2' class="btn btn-light" v-on:click='toggleViewingMode()'><span><img id='moon-pic' src="./assets/moon.png" alt = "moon">Explore In Dark Mode</span></button>
        </div>
        <div id ='navbarIntroTextContainer'>
          <div class="subtitle">ANDREW THOMAS</div>
          <div class="wordCarousel">    
            <div> 
              <ul class="flip3"> 
                  <li>CHESS ENTHUSIAST</li>
                  <li>STAR WARS FAN</li>
                  <li>SOFTWARE _ DEVELOPER</li>
              </ul>
            </div>  
          </div>
        </div>
      </div>
      <div id='fillerDiv'></div>
      <div id = "homeNavDiv">
        <router-link v-bind:to="{ name: 'home' }"><span>Home</span></router-link>
      </div>
      <span class='navDivider'>|</span>
      <div id = "resumeNavDiv">
        <router-link v-bind:to="{ name: 'resume' }"><span>My Resume</span></router-link>
      </div>
      <span class='navDivider'>|</span>
      <div id = "contactNavDiv">
        <router-link v-bind:to="{ name: 'contact' }"><span>Contact Me</span></router-link>
      </div>
      <span class='navDivider'>|</span>
      <div id = "projectsNavDiv">
        <router-link v-bind:to="{ name: 'projects' }"><span>Technical Projects</span></router-link>
      </div>  
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default{
  methods: {
    toggleViewingMode() {
      var navElement = document.getElementById('nav');
      var appElement = document.getElementById('app');
      if(this.$store.state.isDarkMode===true){
        navElement.classList.add('shadow-lg');
        appElement.classList.remove('dark-mode')
      }else{
        navElement.classList.remove('shadow-lg');
        appElement.classList.add('dark-mode');
      }

      this.$store.state.isDarkMode = !this.$store.state.isDarkMode;
    }
  }
}
  
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
.contactInfobox h1,h2{
  font-size:1.5vw;
  margin-bottom:0;
  margin-top:.5vw;
}
@media(max-aspect-ratio:11/10){
  #app #navbarIntroTextContainer{
    display:none;
  }
}
@media(max-aspect-ratio:4/3){
   #app .contactViewSection{
    width:60vw;
    height:12vw;
    margin-top:5vw;
    margin-top:5vw;
  }
  #app .contactInfobox{
    margin: 3vw 2vw 3vw 3vw;
    padding:.66vw .66vw;
    border-radius:5vw;
  }
  #app .contactPicture{
    width:7vw;
    height:7vw;
    margin: 0 0 0 2vw;
    border-radius: .83vw;
  }
  #app .contactInfobox h1,h2{
    font-size:2vw;
    margin-top:1vw;
  }
  #app #contactView{
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start;
    padding-bottom:75vh;
  }
}
@media(max-aspect-ratio:7/10){
  #app #nav{
    padding-left:2vw;
  }
  #app #nav a{
    font-size:3vw;
  }
  #app .contactViewSection{
    width:90vw;
    height:16vw;
    margin-top:5vw;
    margin-top:5vw;
  }
  #app .contactInfobox{
    margin: 4.5vw 3vw 4.5vw 4.5vw;
    padding:1vw 1vw;
    border-radius:5vw;
  }
  #app .contactPicture{
    width:10vw;
    height:10vw;
    margin: 0 0 0 3vw;
    border-radius: 2.5vw;
  }
  #app .contactInfobox h1,h2{
    font-size:3vw;
    margin-top:1vw;
  }
  #app #contactView{
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start;
    padding-bottom:85vh;
  }
  #viewingModeButton #lightbulb-pic{
    display:inline-block;
    filter:invert(100%);
    width:50%;
    height:50%;
  }
  #viewingModeButton2 #moon-pic{
    display:inline-block;
    width:50%;
    height:50%;
  }
  #viewingModeButton, #viewingModeButton2{
    padding:0;
    display:flex;
    align-items:center;
  }
  #viewingModeButtonContainer .btn span{
    font-size:0;
  }
  #app #viewingModeButtonContainer .btn{
    height:4vh;
    width:4vh;
  }
  #app #viewingModeButtonContainer{
    width: 4vh;
    height:4vh;
  }
}
#lightbulb-pic{
  display:none;
}
#moon-pic{
  display:none;
}
#app.btn-light.btn{
  margin:0;
  border:0;
  padding:0 0 0 0;
  display:flex;
  justify-content: center;
  align-content: center;
}
#app.btn-secondary.btn{
  margin:0;
  border:0;
  padding:0;
  display:flex;
  justify-content: center;
  align-content: center;
}
.btn{
  width: 100%;
  height:100%;
  padding: 0 1vw;
  border-radius:20%;
}
.dark-mode #nav a{
  color:rgb(46, 46, 46);
  text-decoration: none;
}
.dark-mode #nav span.navDivider{
  color:rgb(46, 46, 46);
  text-decoration: none;
}
.dark-mode .contactViewSection{
  background-image: linear-gradient(45deg, rgb(75, 75, 75), rgb(138, 138, 138));
}
.dark-mode #nav a::after{
  text-decoration: underline;
  content:'';
  display: block;
  width: 0vw;
  height: .2vh;
  background:rgb(46, 46, 46);
  transition: .3s;
}
.dark-mode #nav a:hover::after{
  width:100%;
  transition: .3s;
}
#app.dark-mode{
  background-color:rgb(46, 46, 46);
}
.dark-mode .view{
  background-color:rgb(46, 46, 46);
  color:rgba(255, 255, 255, 0.596);
}
.dark-mode .gray-bg{
  background-color:rgb(46, 46, 46);
}
.dark-mode .invert82{
  filter:invert(82%);
}
.dark-mode #nav div{
  color:rgb(46, 46, 46);
}
#andrewLeftNavDiv{
  height: 100%;
  display:flex;
  flex-direction: row;
  align-items: center;
  font-size: 2.5vh;
  color:white;
  margin-left:0.5vw;
  margin-right:0.5vw;
}
#viewingModeButtonContainer{
  height:inherit;
  margin-right:2vw;
  display:flex;
  align-items: center;
}
#viewingModeButtonContainer .btn{
  height:50%;
  font-size:.6em;
}
#fillerDiv{
  height:100%;
  width:stretch;
}
#app{
  min-height: 100vh;
  height:stretch;
  background-color:white;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}
h1,h2{
  text-align: center;
}
#nav{
  white-space: nowrap;
  position: fixed;
  height: 8vh;
  background-image:linear-gradient(45deg, rgb(114, 107, 206), rgb(22, 240, 152));
  display:flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid rgb(70, 70, 70) .2vh;
  width:100vw;
  z-index: 2;
  padding-right:4vw;
}
#nav a{
  color: white;
  font-size:2vh;
  text-decoration: none;
}
#nav span.navDivider{
  color: white;
  font-size:2vh;
  text-decoration: none;
}
#nav a::after{
  text-decoration: underline;
  content:'';
  display: block;
  width: 0vw;
  height: .2vh;
  background: #fff;
  transition: .3s;
}
#nav a:hover::after{
  width:100%;
  transition: .3s;
}
p{
  text-indent: 4ch;
  font-size: 2vh;
  margin-bottom:1vh;
}
h1{
  font-size: 5vh;
}
#homeNavDiv{
  display:flex;
  align-items: center;
  justify-content: center;
  margin:.5vw;
  padding:.5vw;
}
#resumeNavDiv{
  display:flex;
  align-items: center;
  justify-content: center;
  margin:.5vw;
  padding:.5vw;
}
#projectsNavDiv{
  display:flex;
  align-items: center;
  justify-content: center;
  margin:.5vw;
  padding:.5vw;
}
#contactNavDiv{
  display:flex;
  align-items: center;
  justify-content: center;
  margin:.5vw;
  padding:.5vw;
}
#contactView{
  display:flex;
  flex-wrap:wrap;
  height:100vh;
  width:100%;
  align-items:center;
  justify-content: space-around;
}
::-webkit-scrollbar{
  display: none;
}
.contactPicture{
  display:flex;
  align-content: center;
  justify-content:center;
  border-radius: 10%;
  overflow:hidden;
  margin-left:50px;
}

.contactInfobox{
  font-size: 30px;
  text-align: center;
  width:550px;
  padding:15px;
  margin-right:15px;
  border-radius: 50px;
  border:solid rgba(0, 0, 0, 0.425) .1vw;
  background-color:rgba(253, 253, 253, 0.151)
}
.contactViewSection{
  width:750px;
  height:170px;
  display:flex;
  align-content: center;
  justify-content:center;
  border:solid black .1vw;
  border-radius:2.25vw;
  background-image: linear-gradient(45deg, rgb(204, 202, 202), rgb(231, 229, 229));
}
.contactPageSection{
  width:inherit;
  height:inherit;
  display:flex;
  flex-direction: row;
  align-items: center;
}
.contactPicture{
  width:5vw;
  height:5vw;
  margin: 0 0 0 1.5vw;
  border-radius: 1.125vw;
}
.contactPicture:hover{
  filter:hue-rotate(80deg);
}
.contactInfobox h1,h2:hover{
  color:rgb(205, 129, 255);
}
.contactPageSection{
  width:100%;
}
.contactInfobox{
  flex:1;
  height:stretch;
  margin: 2.25vw 1.5vw 2.25vw 2.25vw;
  padding:.5vw .5vw;
  border-radius:2.5vw;
}
.contactViewSection{
  width:45vw;
  height:8vw;
  align-items:center;
}
#navbarIntroTextContainer{
  padding-top:1vh;
  display:flex;
  flex-direction: column;
  white-space: nowrap;
  height:100%;
  flex-grow: 1;
}
.customContainer {
    position: absolute;
}
@keyframes glitch {
    1%{
        transform: rotateX(10deg) skewX(90deg);
    }
    2%{
        transform: rotateX(0deg) skewX(0deg);
    }
}
.scanlines {
    overflow: hidden;
    mix-blend-mode: difference;
}
.subtitle {
  font-family:monospace;
  font-style: italic;
  font-size: 2.5vh;
  letter-spacing: .3em;
  text-align: center;
  position: absolute;
  animation: glitch-2 5s 5.02s infinite;
  margin-bottom: 1vh;
}
@keyframes glitch-2 {
    1%{
        transform: rotateX(10deg) skewX(70deg);
    }
    2%{
        transform: rotateX(0deg) skewX(0deg);
    }
}
.wrapperBG{
  background: linear-gradient(to bottom right, #44e3ff41 0%, #007cad56 100%);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin-top: 8vh;
  overflow: hidden;
  z-index: 0;
}
.bg-bubbles{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
}
.bg-bubbles li{
  position: absolute;
  list-style: none;
  display: block;
  width: 4vh;
  height: 4vh;
  background-color: rgba(255, 255, 255, 0.5);
  bottom: -16vh;
  -webkit-animation: square 25s infinite;
  animation:         square 25s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
.bg-bubbles li:nth-child(1){
    left: 10%;
    background-color: rgba(255, 255, 255, 0.5);
}
.bg-bubbles li:nth-child(2){
  left: 20%;
  width: 8vh;
  height: 8vh;
  animation-delay: 2s;
  animation-duration: 17s;
  background-color: rgba(255, 255, 255, 0.5);
}
.bg-bubbles li:nth-child(3){
  left: 25%;
  animation-delay: 4s;
  background-color: rgba(255, 255, 255, 0.5);
}
.bubbles li:nth-child(4){
  left: 40%;
  width: 6vh;
  height: 6vh;
  animation-duration: 22s;
  background-color: rgba(255, 255, 255, 0.5);
}
.bg-bubbles li:nth-child(5){
  left: 70%;
  background-color: rgba(255, 255, 255, 0.5);
}
.bg-bubbles li:nth-child(6){
  left: 80%;
  width: 12vh;
  height: 12vh;
  animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.5);
}
.bg-bubbles li:nth-child(7){
  left: 32%;
  width: 16vh;
  height: 16vh;
  animation-delay: 7s;
  background-color: rgba(255, 255, 255, 0.5);
}
.bg-bubbles li:nth-child(8){
  left: 55%;
  width: 2vh;
  height: 2vh;
  animation-delay: 15s;
  animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.5);
}
.bg-bubbles li:nth-child(9){
  left: 25%;
  width: 1vh;
  height: 1vh;
  animation-delay: 2s;
  animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.5);
}
.bg-bubbles li:nth-child(10){
  left: 90%;
  width: 16vh;
  height: 16vh;
  animation-delay: 11s;
  background-color: rgba(255, 255, 255, 0.5);
}
@-webkit-keyframes square {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-70vh) rotate(600deg); }
}
@keyframes square {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-70vh) rotate(600deg); }
}
@keyframes flip3 {
    0% { margin-top: -27vh }
    5% { margin-top: -18vh; }
    33% { margin-top: -18vh; }
    38% { margin-top: -9vh; }
    66% { margin-top: -9vh; }
    71% { margin-top: 0vh; }
    99.99% { margin-top: 0vh; }
    100% { margin-top: -27vh }
}
.flip3{
  animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.wordCarousel {
    font-weight: 100;
    color: #939393;
    font-size:1.5vh;
    padding-top:3.5vh;
}
.wordCarousel ul{
    padding:0;
}
.wordCarousel div {
  overflow: hidden;
  position: relative;
  height: 6.5vh;
  padding-top: 1vh;
  margin-top: -1vh;
}
.wordCarousel div  li {
  font-family: 'Raleway', sans-serif;
  letter-spacing: .25em;
  font-style: italic;
  color: #ccc;
  font-weight: 700;
  height: 4.5vh;
  margin-bottom: 4.5vh;
  display: block;
}
</style>
