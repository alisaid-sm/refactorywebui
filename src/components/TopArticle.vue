<template>
  <div class="top-article mt-5 mb-5 pt-5 pb-5">
    <div class="container">
      <h3 class="text-center mb-5">Artikel Unggulan</h3>
      <carousel
        :perPageCustom="[
          [100, 1],
          [768, 2],
          [992, 3],
        ]"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :mouse-drag="false"
        :autoplay="true"
        :autoplayTimeout="5000"
        :navigationClickTargetSize="0"
        :loop="true"
      >
        <slide>
          <div class="card">
            <img
              src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/061-Refactory-TempatYangAsyikUntukBelajarSecaraRemote011.jpg?fit=768%2C403&ssl=1"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.top-article {
  background-color: #F4F5F6;
}
.top-article .card {
  margin: 0px 20px;
}
</style>
