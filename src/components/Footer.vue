<template>
  <div id="footer">
    <footer>
    <div class="widget-overlay">
      <div class="container">
        <div class="row font-raleway">
          <div class="col-md-2">
            <h2>Site Map</h2>
            <div class="menu-widget font-montserratl">
              <a href="">Home</a>
              <a href="">Bootcamp</a>
              <a href="">Software Development</a>
              <a href="">Courses</a>
              <a href="">Custom Trainings</a>
              <a href="">Blog</a>
            </div>
          </div>
          <div class="col-md-2">
            <h2>Company</h2>
            <div class="menu-widget font-montserratl">
              <a href="">About Us</a>
              <a href=""
                >Career
                <span
                  style="
                    background: #929292;
                    color: black;
                    border-radius: 4px;
                    padding: 2px 6px;
                  "
                  >We’re Hiring</span
                ></a
              >
              <a href="">Press Kit</a>
              <a href="">FAQ</a>
            </div>
          </div>
          <div class="col-md-2">
            <h2>Connect</h2>
            <div class="menu-widget font-montserratl">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Youtube</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="widget-social-icons mt-3">
              <a href="https://www.linkedin.com/school/13270470/">
                <span class="widget-icons">
                  <img src="../assets/img/linkedin.svg" alt="" />
                </span>
              </a>
              <a href="https://www.facebook.com/refactory.id">
                <span class="widget-icons">
                  <img src="../assets/img/facabook.svg" alt="" />
                </span>
              </a>
              <a href="https://www.youtube.com/c/refactory">
                <span class="widget-icons">
                  <img src="../assets/img/youtube.svg" alt="" /> </span
              ></a>
              <a href="https://www.instagram.com/refactory.id/">
                <span class="widget-icons">
                  <img src="../assets/img/instagram.svg" alt="" />
                </span>
              </a>
            </div>
            <div class="row mt-5">
              <div class="col-md-6">
                <h2>Company Address</h2>
                <div class="menu-widget font-montserratl">
                  <p>
                    Jln. Palagan Tentara Pelajar Km. 9,8 Ngaglik, Kab. Sleman DI
                    Yogyakarta 55581
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Contact</h2>
                <div class="menu-widget contact font-montserratl">
                  <a href="mailto:marketing@refactory.id"
                    >marketing@refactory.id</a
                  >
                  <a href="tel:+6281228203381" class="mb-3"
                    >+62 8122 8203 381</a
                  >
                  <p>Dewita: <a href="https://wa.me/6285725827222">0857 2582 7222</a></p>
                  <p>Septin: <a href="https://wa.me/6287820800206">0878 2080 0206</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyri">
      <div class="copyri-overlay">
        <div class="container">
          © 2020
          <span>Refactory</span>
          - All Rights Reserved -
          <a href="tos">Terms of Services</a>
          /
          <a href="privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div style="display: scroll; position: fixed; bottom: 5px; right: 5px">
      <a
        href="https://api.whatsapp.com/send?phone=6282390257900"
        target="_blank"
      >
        <img src="../assets/img/—Pngtree—whatsapp social media icon design_3654780.png" width="100px" height="100px"/>
      </a>
    </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#footer {
  background-color: #0c162a !important;
  color: white;
}
.copyri {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #333333 !important;
}
.copyri a {
  text-decoration: none;
  color: white;
  transition: color 0.5s;
}
.copyri a:hover {
  color: #e48800;
}
.copyri-overlay {
  padding-top: 2em;
  padding-bottom: 2em;
}
@media (min-width: 769px) {
  .copyri-overlay {
    padding-top: 2.66666em;
    padding-bottom: 2.66666em;
  }
}
h2 {
  font-size: 16px !important;
  font-weight: 600 !important;
  font-style: normal !important;
  line-height: 20px !important;
  margin-bottom: 1em;
}
.widget-overlay {
  padding-top: 50px;
  padding-bottom: 70px;
}
.menu-widget a {
  display: block;
  text-decoration: none;
  color: #eaeaea;
  transition: color 0.5s;
}
.menu-widget a:hover {
  color: #e48800;
}
.font-montserratl {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
}
.widget-social-icons {
  display: flex;
}
.widget-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 2em;
  text-align: center;
  vertical-align: middle;
  background: #35b4ae;
  transition: all 0.1s linear;
  margin-right: 0.5em;
  border-radius: 50%;
}
.widget-icons:hover {
  background: #35b4ae73;
}
.contact p {
  margin-bottom: 0px;
}
.contact p a {
  display: inline;
}
</style>
