<template>
  <div id="navbar-blog">
      <div class="container font-montserrat">
        <div class="menu">
          <div id="navblog" class="menu-group">
          <router-link to="/blog">Blog</router-link>
          <router-link to="#">Engineering</router-link>
          <router-link to="#">Profile</router-link>
          <router-link to="#">Tutorial</router-link>
          <router-link to="#">Tips & Trick</router-link>
          <router-link to="#">Growth & Culture</router-link>
          <router-link to="#">Newsroom</router-link>
          <router-link to="#">Promo</router-link>
        </div>
        <h3>POST CATEGORIES</h3>
        <a id="nav-icon" @click="nav"></a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarBlog',
  methods: {
    nav () {
      const element = document.getElementById('navblog')
      element.classList.toggle('sidebar')
    }
  }
}
</script>

<style scoped>
#navbar-blog {
  background-color: #095978;
}
#navbar-blog .menu-group a {
    display: inline-block;
    padding: 30px;
    text-decoration: none;
    color: white;
    transition: background-color 0.5s;
}
#navbar-blog .menu-group a:hover {
  background-color: #5CA3BD;
}
#navbar-blog .menu-group a.router-link-exact-active {
  background-color: #5CA3BD;
}
#navbar-blog h3 {
  display: none;
}
#nav-icon {
  display: none;
}
@media (max-width: 992px) {
  .menu-group {
    position: absolute;
    left: -800px;
    transition: left 0.3s;
  }
  #navbar-blog .menu-group a {
    display: block;
  }
  .sidebar {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 80%;
    height: 100% !important;
    background-color: #095978;
    padding-top: 10px;
    padding-left: 10px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.8);
    z-index: 2;
  }
  #navbar-blog .sidebar a {
    padding: 10px;
  }
  .menu {
    height: 70px;
    display: flex;
    align-items: center;
  }
  #nav-icon {
    width: 30px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/img/align-right.svg");
    display: block;
    margin-left: auto;
  }
  #navbar-blog h3 {
    display: block;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: white;
  }
}
</style>
