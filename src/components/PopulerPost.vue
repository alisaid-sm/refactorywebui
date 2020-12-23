<template>
  <div class="populer">
    <h2 class="text-center font-montserrat">ARTIKEL POPULER</h2>
    <div class="card mb-3">
      <img
        src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/063-Refactory-HDYBAP017.jpg?fit=768%2C402&ssl=1"
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div class="card mb-3">
      <img
        src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/063-Refactory-HDYBAP017.jpg?fit=768%2C402&ssl=1"
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <section class="font-montserratl text-center">
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
.populer {
  background-color: #F9F9F9;
  padding: 25px;
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
.populer h2 {
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #e48800;
  margin-bottom: 30px;
}
</style>
