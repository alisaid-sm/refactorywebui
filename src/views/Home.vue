<template>
  <div>
    <Navbar />
    <div id="home">
      <div class="bg-home m-1">
        <div class="bg-refac"></div>
        <div class="bg-tr"></div>
      </div>
      <div class="refac-overlay">
        <div class="container">
          <section class="font-raleway widget">
            Empowering <span style="color: #e48800">People</span>
            <br />
            Through Programming
          </section>
          <section class="font-montserratl mt-3">
            <p>
              Refactory adalah perusahaan edukasi dan teknologi yang menyediakan
              layanan lengkap berupa course maupun custom training yang
              materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis
              perusahaan Anda.
            </p>
          </section>
          <section class="font-montserratl">
            <a href="#" class="btn btn-def">Temukan Solusi Anda</a>
            <a href="#" class="btn btn-ol-def">Tingkatkan Skill Anda</a>
          </section>
        </div>
        <div class="partner">
          <section class="font-montserratl mb-2">
            PARTNER EKSKLUSIF KAMI
          </section>
          <section class="bg-part">
            <div class="part-overlay">
              <div class="container">
                <div
                  class="lg-part"
                  v-for="(item, index) in partner"
                  :key="index"
                >
                  <img class="mr-2" :src="item.photo_url" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="help-refac">
        <div class="container">
          <section class="font-raleway">
            Apa Yang Refactory Dapat Bantu?
          </section>
          <div class="row mt-5">
            <div class="col-md-6 font-raleway">
              <img
                class="mb-3"
                src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1"
                alt=""
              />
              <div class="container">
                <h3>Memperkuat Tim <em>Engineer</em> Anda</h3>
                <p class="font-montserratl">
                  Bisnis di jaman modern membutuhkan keterampilan pengembangan
                  terbaik untuk meningkatkan skala produk. Kami dapat
                  mempersiapkan course dan juga dapat menyediakan tim yang
                  menangani kebutuhan digital Anda.
                </p>
              </div>
            </div>
            <div class="col-md-6 font-raleway">
              <img
                class="mb-3"
                src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?fit=28%2C48&ssl=1"
                alt=""
              />
              <div class="container">
                <h3>Wujudkan <em>Software</em> Impian Anda</h3>
                <p class="font-montserratl">
                  Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda,
                  membantu di setiap tahap mulai dari menyusun ide, melalui
                  desain dan pengembangan aplikasi seluler, situs web dan
                  aplikasi desktop, hingga peluncuran produk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="refac-insight font-raleway">
        <div class="bg-insight">
          <h2 class="t1">INSIGHT TERBARU</h2>
          <h2 class="t2">Knowledge Sharing</h2>
        </div>
        <a href="#">Lihat Semua <tagicon name="arrow-right" /></a>
      </div>
      <div class="as-see-on font-raleway">
        <h1>AS SEEN ON</h1>
        <div class="container">
          <div class="cont-img" v-for="(item, index) in seeon" :key="index">
            <a :href="item.link_url"
              ><img :src="item.photo_url" alt="" width="150"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      partner: null,
      seeon: null
    }
  },
  components: {
    Navbar,
    Footer
  },
  mounted () {
    axios
      .get(
        'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json'
      )
      .then((result) => {
        this.partner = result.data.data
      })
    axios
      .get(
        'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/seen_on.json'
      )
      .then((result) => {
        this.seeon = result.data.data
      })
  }
}
</script>
<style scoped>
.bg-home {
  position: relative;
  z-index: -1;
}
.m-1 {
  margin: -84px 0px 0px 0px !important;
}
.bg-refac {
  background-image: url("https://refactory.id/wp-content/uploads/2020/01/hero-homepage.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 700px;
}
.bg-tr {
  background-color: transparent;
  background-image: linear-gradient(110deg, #00256c 10%, #04aca4 90%);
  opacity: 0.75;
  height: 700px;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
.refac-overlay {
  padding-top: 70px;
  color: white;
  position: absolute;
  top: 84px;
  left: 0;
  width: 100%;
}
.font-montserratl {
  max-width: 600px;
  font-size: 16px;
  font-weight: 400px;
  line-height: 30px;
}
.refac-overlay .font-raleway {
  font-weight: 600;
  font-style: normal;
  font-size: 48px;
  line-height: 50px;
}
.help-refac {
  color: #0b162b;
  padding: 80px 0px;
  text-align: center;
}
.help-refac .font-raleway {
  font-weight: bold;
  font-style: normal;
  font-size: 38px;
  line-height: 42px;
  letter-spacing: 2px;
}
.help-refac .row h3 {
  font-weight: 600;
  font-style: normal;
  font-size: 28px;
  line-height: 32px;
}
.help-refac .row p {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0px;
  color: rgba(11, 22, 43, 0.6);
}
.font-montserratl .btn {
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 14px;
}
.btn {
  margin-right: 15px;
  border-radius: 20px;
  padding: 10px 40px;
}
.btn-def:hover {
  background-color: #ff9900 !important;
}
.btn-ol-def:hover {
  background-color: #ff9900 !important;
}
.partner {
  padding-top: 90px;
}
.partner .font-montserratl {
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  max-width: 100%;
  letter-spacing: 2px;
}
.bg-part {
  background-color: rgba(0, 53, 71, 0.48);
}
.part-overlay {
  padding: 29px 0px;
  text-align: center;
  overflow: hidden;
}
.lg-part {
  display: inline-block;
  margin: 0px 30px;
}
.refac-insight {
  text-align: center;
  margin-bottom: 70px;
}
.refac-insight a {
  text-decoration: none;
  transition: all 0.5s;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
}
.refac-insight a:hover {
  color: #ff9900;
}
.bg-insight {
  background-image: url(https://refactory.id/wp-content/uploads/2020/01/ripple-bg.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 0px;
  margin-bottom: 30px;
}
.refac-insight .t1 {
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: rgba(11, 22, 43, 0.6);
}
.refac-insight .t2 {
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  line-height: 32px;
  color: #0b162b;
}
.as-see-on {
  background-color: #f4f5f6;
  text-align: center;
  padding: 60px 0px;
}
.as-see-on h1 {
  font-weight: 700;
  font-style: normal;
  font-size: 38px;
  line-height: 50px;
  color: #0b162b;
  margin-bottom: 60px;
  letter-spacing: 1px;
}
.cont-img {
  display: inline-block;
  margin: 0px 20px;
}
.cont-img img {
  filter: brightness(100%) contrast(100%) saturate(0%) blur(0px)
    hue-rotate(0deg);
}
.cont-img img:hover {
  filter: none;
}
@media (max-width: 992px) {
  .font-raleway {
    font-size: 34px;
  }
  .partner {
    padding-top: 20px;
  }
  .bg-refac {
    height: 630px;
  }
  .bg-tr {
    height: 630px;
  }
}
@media (max-width: 767px) {
  .bg-refac {
    height: 675px;
  }
  .bg-tr {
    height: 675px;
  }
}
@media (max-width: 575px) {
  .bg-refac {
    height: 630px;
  }
  .bg-tr {
    height: 630px;
  }
}
@media (max-width: 573px) {
  .bg-refac {
    height: 675px;
  }
  .bg-tr {
    height: 675px;
  }
}
@media (max-width: 532px) {
  .bg-refac {
    height: 725px;
  }
  .bg-tr {
    height: 725px;
  }
}
@media (max-width: 520px) {
  .bg-refac {
    height: 782px;
  }
  .bg-tr {
    height: 782px;
  }
  .btn {
    margin-bottom: 10px;
  }
}
@media (max-width: 489px) {
  .bg-refac {
    height: 812px;
  }
  .bg-tr {
    height: 812px;
  }
}
@media (max-width: 480px) {
  .bg-refac {
    height: 862px;
  }
  .bg-tr {
    height: 862px;
  }
}
@media (max-width: 411px) {
  .bg-refac {
    height: 892px;
  }
  .bg-tr {
    height: 892px;
  }
}
@media (max-width: 347px) {
  .bg-refac {
    height: 922px;
  }
  .bg-tr {
    height: 922px;
  }
}
@media (max-width: 323px) {
  .bg-refac {
    height: 902px;
  }
  .bg-tr {
    height: 902px;
  }
  .refac-overlay .font-raleway {
    font-size: 28px;
  }
}
@media (max-width: 317px) {
  .lg-part {
    margin-bottom: 10px;
  }
  .bg-refac {
    height: 959px;
  }
  .bg-tr {
    height: 959px;
  }
}
@media (max-width: 292px) {
  .bg-refac {
    height: 1010px;
  }
  .bg-tr {
    height: 1010px;
  }
}
@media (max-width: 284px) {
  .bg-refac {
    height: 1045px;
  }
  .bg-tr {
    height: 1045px;
  }
}
</style>
