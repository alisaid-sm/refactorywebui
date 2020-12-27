<template>
  <div>
    <NavbarCourse />
    <div class="listcource">
      <div class="container">
        <div class="d-flex align-items-center mb-5">
          <div class="sort">
            <h3 class="d-inline">Category:</h3>
            <b-dropdown
              id="dropdown-left"
              text="All"
              variant="link"
              class="m-2"
            >
              <b-dropdown-item href="#">Web Frontend</b-dropdown-item>
              <b-dropdown-item href="#">Backend</b-dropdown-item>
              <b-dropdown-item href="#">PHP</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="search ml-auto">
            <label class="sr-only" for="inlineFormInputGroup">Username</label>
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Find a Course"
              />
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-4"
            v-for="(item, index) in listcourse"
            :key="index"
          >
            <div v-if="item.id === undefined"></div>
            <a v-else class="link-card-course" href="/detailcourse">
              <div class="card mb-3">
                <img class="card-img-top" :src="item.photo_url" alt="" />
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.short_description }}</p>
                  <div class="d-inline-block">
                    <img class="mr-2" :src="item.user.photo_url" alt="" />
                    {{ item.user.name }}
                  </div>
                </div>
              </div>
            </a>
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
  name: 'ListCourse',
  components: {
    NavbarCourse,
    FooterCourse
  },
  data () {
    return {
      listcourse: null
    }
  },
  mounted () {
    axios
      .get(
        'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/list-course.json'
      )
      .then((result) => {
        this.listcourse = result.data.data
        console.log(this.listcourse.user.photo_url)
      })
  }
}
</script>

<style scoped>
.listcource {
  padding: 50px 0px;
  margin-top: 60px;
}
.card .d-inline-block img {
  border-radius: 100%;
}
.card .d-inline-block {
  color: #212338;
}
.link-card-course {
  text-decoration: none;
  color: #3b8c9b;
}
.card:hover {
  border: #e9b77b solid 1px;
}
</style>
