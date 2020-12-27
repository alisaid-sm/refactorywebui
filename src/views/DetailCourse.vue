<template>
  <div>
      <NavbarCourse />
      <div id="detail-course">
          <div class="banner-top mb-5">
              <img class="image-overlay" src="https://cdn.fs.teachablecdn.com/RBZMT9GSASWBQNBzWhJM" alt="">
              <div class="banner-content font-raleway">
                  <h1>HTML & CSS Introduction</h1>
                <p>HTML dan CSS adalah materi dasar untuk pengembangan web. Setiap web developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS.</p>
                <section class="font-montserratl">
                    <a href="#" class="btn btn-def">Mulai Belajar</a>
                </section>
              </div>
          </div>
          <div class="about-course text-center mb-5">
              <h3>Tentang Course</h3>
              <p>{{ data['short-description'] }}</p>
          </div>
          <div class="course mb-3">
              <h3 class="text-center">Materi Course</h3>
              <div class="list-course mb-2"  v-for="(item, index) in data['materi course']" :key="index">
                  <div class="title-course">
                      {{ item.section }}
                  </div>
                  <div class="list-video" v-for="(a, i) in item.data" :key="i">
                      <a href="#">
                        <div class="link-video">
                            {{ a.title }}({{ a['time-in'] }})
                            <button class="btn btn-def">start</button>
                        </div>
                      </a>
                  </div>
              </div>
          </div>
          <div class="why-learn">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                          <img class="img-fluid" :src="data['quistion-photo']">
                      </div>
                      <div class="col-md-6 ctn">
                          <div class="text-why-learn">
                              <h3>{{ data.quistion }}</h3>
                              <p>{{ data['short-description'] }}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <FooterCourse />
  </div>
</template>

<script>
import NavbarCourse from '@/components/NavbarCourse.vue'
import FooterCourse from '@/components/FooterCourse.vue'
import axios from 'axios'
export default {
  name: 'DetailCourse',
  components: {
    NavbarCourse,
    FooterCourse
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json')
      .then((result) => {
        this.data = result.data
        console.log(this.data)
      })
  }

}
</script>

<style scoped>
#detail-course {
    margin-top: 60px;
}
.banner-top {
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    padding: 0px 10px;
}
.banner-top img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center center;
    object-position: center center;
}
.image-overlay {
    opacity: 0.9;
}
.banner-content {
    max-width: 590px;
    padding: 50px 0px;
    color: white;
}
.banner-top .btn {
    border-radius: 20px;
    padding: 10px 40px;
}
.banner-top .btn:hover {
    background-color: #ff9900 !important;
}
.about-course p{
    max-width: 590px;
    margin: 0px auto;
    padding: 0px 10px;
}
.list-course {
    max-width: 710px;
    margin: 0px auto;
    padding: 0px 10px;
}
.title-course {
    padding: 10px;
    background-color: #E8E8E8;
}
.list-video a {
    display: block;
    text-decoration: none;
    color: black;
    padding: 10px;
    background-color: #F0F0F0;
    border-top: solid 1px white;
}
.list-video a:hover {
    background-color: #DCDDDD;
}
.list-video .link-video {
    display: flex;
    align-items: center;
}
.list-video button {
    margin-left: auto;
}
.ctn {
    display: flex;
    align-items: center;
}
</style>
