<template>
  <div>
    <nav :class="$route.path === '/blog'? '' : 'bg-tran'">
      <div class="container d-flex">
        <div class="brand">
          <img
            src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/refactory-hd.png?resize=125%2C52&ssl=1"
            alt=""
          />
        </div>
        <div class="menu ml-auto font-montserrat">
          <div id="navt" class="menu-group">
            <router-link to="/">Home</router-link>
            <router-link to="/course">Courses</router-link>
            <router-link to="#">Custom Trainings</router-link>
            <router-link to="#">Case Studies</router-link>
            <router-link to="#">Blog</router-link>
          </div>
          <a href="#" id="nav-icon" @click="nav"></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    nav () {
      const element = document.getElementById('navt')
      if (this.$route.path === '/') {
        element.classList.toggle('showtr')
      } else {
        element.classList.toggle('show')
      }
      const icon = document.getElementById('nav-icon')
      icon.classList.toggle('nav-exit-icon')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
nav {
    background-color: #053547;
}
.bg-tran {
  background-color: transparent;
}
.brand img {
  padding: 15px 0px;
}
.menu {
  display: flex;
  align-items: center;
}
@media (max-width: 992px) {
  .menu .menu-group {
    display: none;
  }
  .menu #nav-icon {
    width: 30px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/img/align-right.svg");
  }
  .show {
    display: block !important;
    color: black;
    position: absolute;
    width: 100%;
    top: 82px;
    left: 0;
    background-color: #053547;
    border-bottom: 1px solid white;
  }
  .show a {
    display: block;
    border-top: 1px solid white;
    padding: 10px 20px !important;
  }
  .showtr{
display: block !important;
    color: black;
    position: absolute;
    width: 100%;
    top: 82px;
    left: 0;
    background-color: rgba(0,53,71,0.48);
    border-bottom: 1px solid white;
    z-index: 1;
  }
  .showtr a {
    display: block;
    border-top: 1px solid white;
    padding: 10px 20px !important;
  }
  .nav-exit-icon {
    background-image: url("../assets/img/x-mark-512.png") !important;
  }
  .bg-tran {
    background-color: rgba(0,53,71,0.48);
  }
}
.menu a {
  padding: 0px 1em;
  color: white;
  text-decoration: none;
  transition: color 0.5s;
}
.menu .menu-group a:hover {
  color: #e48800;
}
.menu .menu-group a.router-link-exact-active {
  color: #e48800;
}
</style>
