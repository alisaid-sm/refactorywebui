<template>
  <div id="navbar-course">
      <nav>
          <div class="container">
              <a href="/"><img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/SQaHwR3NQii4vEWEdBeg" alt=""></a>
              <div class="link-container">
                  <div id="link-nav-course" class="link-nav">
                    <a href="" class="link" >Courses</a>
                    <a href="" class="link">Roadmap</a>
                    <a href="" class="link">Login</a>
                    <a href="" class="btn btn-def">Sign Up</a>
              </div>
              <a id="nav-icon-course" @click="nav"></a>
              </div>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarCourse',
  methods: {
    nav () {
      const element = document.getElementById('link-nav-course')
      element.classList.toggle('show')
    }
  }

}
</script>

<style scoped>
#navbar-course nav {
    background-color: #35B4AE;
    background-image: linear-gradient(90deg, #2852a2 21.72%, #35B4AE 75.43%);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
}
#navbar-course nav .container {
    display: flex;
    align-items: center;
}
.link-container {
    margin-left: auto;
}
.link-nav .link {
    padding: 20px;
    color: white;
    text-decoration: none;
}
.link-nav .link:hover {
    background-color: #347b89;
}
.btn {
    border-radius: 20px;
    margin-left: 10px;
}
#nav-icon-course {
    display: none;
}
@media (max-width: 992px) {
    .link-nav a {
        display: block;
    }
    .link-nav {
        display: none;
        position: absolute;
        background-color: #3B8C9B;
        right: 0;
        left: 0;
        top: 60px;
        z-index: 2;
        padding: 10px;
    }
    .show {
        display: block;
    }
    .btn {
        margin-left: 0px;
    }
    #nav-icon-course {
        display: block;
        width: 30px;
        height: 30px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("../assets/img/align-right.svg");
    }
}
</style>
