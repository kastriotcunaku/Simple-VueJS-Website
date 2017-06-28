<template>
  <div id="app">
    <div class="top-bar"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img src="./assets/logo.png" class="logo">
        </div>
        <div class="col-md-9">
          <ul class="menu">
            <li><router-link :to="{ name: 'Hello' }">Home</router-link></li>
            <li><router-link :to="{ name: 'Profile' }">Profile</router-link></li>
            <li><router-link :to="{ name: 'Services' }">Services</router-link></li>
            <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
          </ul>
        </div>
      </div>
      <hr>
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="container">
        <p class="text-muted pull-left">Copyright &copy; {{year}} | All rights reserved.</p>
        <ul class="footer-menu pull-right">
            <li><router-link :to="{ name: 'Hello' }">Home</router-link></li>
            <li><router-link :to="{ name: 'Profile' }">Profile</router-link></li>
            <li><router-link :to="{ name: 'Services' }">Services</router-link></li>
            <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app>div.container {
  padding-top: 60px;
}

.logo {
  max-width: 150px;
  height: auto;
}

.menu {
  padding-top: 60px;
  text-align:right;
}
.menu a {
  /*color: #42b983;*/
  color: rgba(255,255,255,.8);
  padding: 10px 20px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 5px;
  background-image: -webkit-linear-gradient(#79F1A4 0%, #0E5CAD 100%);
  background-image: -moz-linear-gradient(#79F1A4 0%, #0E5CAD 100%);
  background-image: -o-linear-gradient(#79F1A4 0%, #0E5CAD 100%);
  background-image: linear-gradient(#79F1A4 0%, #0E5CAD 100%);
  transition: 0.3s ease-in-out;  
  background-size:1px 80px;
  box-shadow: 3px 3px 0 rgba(0,0,0,.1);
}

.menu a:hover, a.router-link-exact-active {
  background-position:40px; 
}
.menu a:hover {
  box-shadow: none;
}
.menu a:hover, a:focus, a:active {
  color:#fff;
  text-decoration: none;
}
.menu ul {
  list-style-type: none;
  padding: 0;
}

.menu li {
  display: inline-block;
  margin: 0 10px;
}

.top-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 3px;
  background-image: -webkit-linear-gradient(left, #79F1A4 0%, #0E5CAD 100%);
  background-image: -moz-linear-gradient(left, #79F1A4 0%, #0E5CAD 100%);
  background-image: -o-linear-gradient(left, #79F1A4 0%, #0E5CAD 100%);
  background-image: linear-gradient(to right, #79F1A4 0%, #0E5CAD 100%);
}

/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  text-align: left;
}
.footer > .container {
  padding: 0 15px;
}
.container .text-muted, .footer-menu {
  margin: 20px 0;
}
.footer-menu {
  list-style: none;
  display: inline-block;
}

.footer-menu li {
  display: inline-block;
  margin-left: 10px;
}

.footer li a.router-link-exact-active, .footer li a:hover, .footer li a:focus {
  color: #0E5CAD;
  text-decoration: underline;
}
</style>
