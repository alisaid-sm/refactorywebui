<template>
  <div>
      <NavbarCourse />
      <div class="listcource">
          <div class="container">
              <div class="d-flex align-items-center mb-5">
                  <div class="sort">
                      <h3 class="d-inline">Category: </h3>
                        <b-dropdown id="dropdown-left" text="All" variant="link" class="m-2">
                            <b-dropdown-item href="#">Web Frontend</b-dropdown-item>
                            <b-dropdown-item href="#">Backend</b-dropdown-item>
                            <b-dropdown-item href="#">PHP</b-dropdown-item>
                        </b-dropdown>
                  </div>
                  <div class="search ml-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Find a Course">
                                <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                                </div>
                                </div>
                  </div>
              </div>
              <div class="row">
  <div class="col-md-4">
    <div class="card">
        <img
        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/7V8c3NbFRmHIO0SVxmaw"
        class="card-img-top"
        alt=""
        />
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
        <img
        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7"
        class="card-img-top"
        alt=""
        />
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
        <img
        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/eDuDc4hIToyRkDfqmP4j"
        class="card-img-top"
        alt=""
        />
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
export default {
  name: 'ListCourse',
  components: {
    NavbarCourse,
    FooterCourse
  }
}
</script>

<style scoped>
.listcource {
    padding: 50px 0px;
}
</style>
