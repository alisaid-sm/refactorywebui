<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
@font-face{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    src: url('assets/font/montserrat/Montserrat-Regular.otf')
}
@font-face{
    font-family: 'MontserratL';
    font-style: normal;
    font-weight: normal;
    src: url('assets/font/montserrat/Montserrat-Light.otf')
}
@font-face{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    src: url('assets/font/raleway/Raleway-Regular.ttf')
}

.font-raleway {
  font-family: Raleway, sans-serif;
}
.font-montserrat {
  font-family: Montserrat, sans-serif;
}
.font-montserratl {
  font-family: MontserratL, sans-serif;
}
.btn:focus {
  box-shadow: none !important;
}
.btn-def {
  background-color: #e48800 !important;
  color: white !important;
  transition: all 0.2s;
}
.btn-ol-def {
  border-color: #e48800 !important;
  background: transparent !important;
  color: white !important;
  transition: all 0.2s;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
