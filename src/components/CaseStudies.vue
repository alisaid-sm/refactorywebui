<template>
  <div class="case-studies">
    <h2 class="text-center font-montserrat">CASE STUDIES</h2>
    <carousel
      :per-page="1"
      :mouse-drag="false"
      :autoplay="true"
      :autoplayTimeout="5000"
      :loop="true"
    >
      <slide>
        <div class="card">
          <img
            src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/IMG_4371-scaled.jpg?fit=768%2C512&ssl=1"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </slide>
      <slide>
        <div class="card">
          <img
            src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/IMG_4371-scaled.jpg?fit=768%2C512&ssl=1"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </slide>
    </carousel>
    <section class="font-montserratl text-center mt-4">
      <a href="#" class="btn btn-ol-def"
        >Artikel Lain <tagicon name="arrow-right"
      /></a>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.case-studies {
  background-color: #F9F9F9;
  padding: 25px;
}
.case-studies h2 {
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #e48800;
  margin-bottom: 30px;
}
.font-montserratl .btn {
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 14px;
}
.btn-ol-def {
  color: #e48800 !important;
  border-radius: 20px;
  padding: 10px 40px;
}
.btn-ol-def:hover {
  background-color: #ff9900 !important;
  color: white !important;
}
</style>
