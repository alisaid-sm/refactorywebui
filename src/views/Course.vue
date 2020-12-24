<template>
  <div>
    <Navbar />
    <div id="course">
      <div class="bg-course m-1">
        <div class="bg-refac"></div>
        <div class="bg-tr"></div>
      </div>
      <div class="refac-overlay">
        <div class="container text-center">
          <section class="font-raleway">
            Tingkatkan
            <span style="color: #e48800; font-weight: 800"
              >skill pemrograman</span
            >
            <br />
            kapan pun, dimana pun.
          </section>
          <p class="font-montserratl mt-3">
            We’re a brand of passionate software engineers and educators with an
            engaging curriculum backed by real-world software projects ready to
            boost your career.
          </p>
          <section class="font-montserratl mt-5">
            <a href="/listcourse" class="btn btn-def">Masuk & Memulai Belajar</a>
            <a href="#" class="btn btn-ol-def">Daftar Sekarang</a>
          </section>
        </div>
      </div>
      <div class="how-skill-up">
        <div class="container">
          <div class="row">
            <div class="col-md-5 font-raleway pt-4">
              Bagaimana Refactory Course membantu
              <span style="color: #e48800; font-weight: 600"
                >meningkatkan skill</span
              >
              anda.
              <section class="font-montserratl mt-5">
                <a href="#" class="btn btn-def">Pelajari Lebih</a>
              </section>
            </div>
            <div class="col-md-7 text-right">
              <img
                class="img-fluid"
                src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png?w=839&ssl=1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-md-6">
              <img
                class="img-fluid"
                src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/IMG_1152-1.jpg?fit=690%2C800&ssl=1"
                alt=""
              />
            </div>
            <div class="col-md-6">
              <section class="font-montserratl describe">
                <h2 class="font-raleway mb-4">
                  Kursus pemrograman untuk semua orang tanpa terkecuali
                </h2>
                <p>
                  Refactory Course dirancang untuk memudahkan setiap orang mampu
                  meningkatkan keahlian dalam software engineering tanpa
                  dibatasi oleh kesulitan akses, kesulitan waktu, batasan
                  keahlian, ataupun usia.
                </p>
                <p>
                  Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan
                  project, bagi pelajar/mahasiswa, Refactory Course akan
                  melengkapi keahlian yang sudah diperoleh dalam studi sehingga
                  dapat membuka kesempatan tak terbatas pada karir software
                  engineering.
                </p>
                <p>
                  Bagi karyawan atau tenaga profesional, Refactory Course dapat
                  meningkatkan keahlian software engineer dalam menunjang
                  menyelesaikan tugas pekerjaannya tanpa khawatir dengan
                  keterbatasan waktu.
                </p>
                <p>
                  Masyarakat secara luas juga dapat memanfaatkan pembelajaran
                  untuk meningkatkan keahlian sehingga mampu berkarya dan
                  mendapat keuntungan karir tanpa khawatir mahalnya belajar.
                </p>
              </section>
              <section class="font-montserratl mt-5">
                <a href="#" class="btn btn-def">Daftar Sekarang</a>
              </section>
            </div>
          </div>
          <section class="text-center font-raleway">
            <h4>MEET OUR GRADUATES</h4>
            <h1>Review</h1>
            <p>Read what our alumni said on Course Report</p>
          </section>
        </div>
      </div>
      <div class="alumni mb-3">
        <div class="container">
          <div class="card-deck">
            <div class="card" v-for="(item, index) in alumni" :key="index">
              <div class="card-body">
                <img
                  :src="item.user.photo_url"
                  class="card-img-top mb-4"
                  alt=""
                />
                <h1 class="font-raleway mb-3">{{ item.user.name }}</h1>
                <section class="font-montserratl">
                  <h3 class="mb-5">{{ item.user.from }}</h3>
                  <span v-for="n in item.star" :key="n">
                    <tagicon name="star" scale="2" color="#E38928" />
                  </span>
                  <h2 class="mb-3 mt-5">{{ item.title }}</h2>
                  <p class="card-text">{{ item.description }}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ready-learning pb-5 pt-5">
        <div class="container">
          <section class="font-montserratl">
            <h2 class="font-raleway">Ready to start Learning?</h2>
            <a href="#" class="btn btn-def">Daftar Sekarang</a>
          </section>
        </div>
      </div>
      <div class="stepbystep mb-5">
        <div class="container text-center">
          <section class="font-raleway mb-4">
            <h3 class="mb-3">LANGKAH MUDAH</h3>
            <h2>Memulai Belajar di</h2>
            <h2>Refactory Course</h2>
          </section>
          <img class="img-fluid" src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame-3-1.png?resize=1024%2C199&ssl=1" alt="">
          <section class="font-montserratl mt-5">
            <a href="#" class="btn btn-def">Pelajari Lebih</a>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import axios from 'axios'
export default {
  name: 'Course',
  data () {
    return {
      alumni: null
    }
  },
  components: {
    Navbar,
    Footer
  },
  mounted () {
    axios
      .get(
        'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json'
      )
      .then((result) => {
        this.alumni = result.data.data
        console.log(result)
      })
  }
}
</script>

<style scoped>
.bg-course {
  position: relative;
  z-index: -1;
}
.m-1 {
  margin: -84px 0px 0px 0px !important;
}
.bg-refac {
  background-image: url("https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg");
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
.refac-overlay .font-raleway {
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  line-height: 50px;
}
.font-montserratl {
  font-size: 16px;
  font-weight: 400px;
  line-height: 30px;
}
.refac-overlay .font-montserratl {
  max-width: 600px;
  margin: 0px auto;
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
.how-skill-up {
  margin: 60px 0px;
}
.how-skill-up .font-raleway {
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
  line-height: 40px;
  color: #0b162b;
  max-width: 340px;
}
.how-skill-up .container {
  padding-left: 150px;
  padding-right: 90px;
}
.description {
  background-color: #f4f5f6;
}
.description .col-md-6 h2 {
  font-weight: 700;
  font-style: normal;
  font-size: 26px;
  line-height: 30px;
  color: #0b162b;
}
.description .font-montserratl p {
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 30px;
  color: rgba(11, 22, 43, 0.6);
}
.description .col-md-6 .describe {
  padding-top: 70px;
}
.description .row {
  padding-bottom: 80px;
}
.description .text-center {
  padding-bottom: 60px;
}
.description .text-center h4 {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: rgba(11, 22, 43, 0.6);
  margin-bottom: 20px;
}
.description .text-center h1 {
  font-weight: 700;
  font-style: normal;
  font-size: 38px;
  line-height: 42px;
  color: #0b162b;
  margin-bottom: 20px;
}
.description .text-center p {
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  color: #0b162b;
}
.alumni {
  padding-top: 30px;
  padding-bottom: 50px;
}
.alumni .card-deck {
  margin-right: 85px;
  margin-left: 85px;
}
.alumni .card-deck .card {
  box-shadow: 0px 12px 20px 0px rgba(223, 223, 223, 0.8);
  border: none;
}
.alumni .card-deck .card h1 {
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
  line-height: 32px;
  color: #111111;
}
.alumni .card-deck .card h3 {
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: #999999;
}
.alumni .card-deck .card h2 {
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 30px;
  color: rgba(11, 22, 43, 0.8);
}
.alumni .card-deck .card p {
  font-weight: 300;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  color: #0b162b;
}
.ready-learning {
  background-color: transparent;
  background-image: linear-gradient(90deg, #127BCA 0%, #35B4AE 100%);
  margin-bottom: 50px;
}
.ready-learning section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ready-learning section h2 {
  margin-right: 40px;
}
.ready-learning .font-raleway {
    font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  color: #fff;
}
.stepbystep h3 {
      font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 16px;
  color: #e48800;
  letter-spacing: 2px;
}
.stepbystep h2 {
      font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  color:#0b162b;
}
@media (max-width: 992px) {
  .how-skill-up .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .description img {
    margin-top: 40px;
  }
  .alumni .card-deck {
    margin-right: 15px;
    margin-left: 15px;
  }
}
@media (max-width: 767px) {
  .how-skill-up .font-raleway {
    font-weight: 400;
    font-style: normal;
    font-size: 28px;
    line-height: 40px;
    color: #0b162b;
    text-align: center;
    max-width: 100%;
    margin-bottom: 40px;
  }
  .ready-learning section {
  display: block;
  text-align: center;
}
.ready-learning section h2 {
    margin-right: 0px;
  margin-bottom: 40px;
}
}
@media (max-width: 506px) {
  .refac-overlay .font-montserratl .btn {
  margin-right: 0px;
  margin-bottom: 30px;
}
.refac-overlay .font-raleway {
  font-size: 30px;
  line-height: 38px;
}
}
@media (max-width: 300px) {
}
</style>
