<template>
  <div>
    <Navbar />
    <NavbarBlog />
    <div id="post">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <!-- Post -->
            <div class="post-container font-raleway">
                <img class="img-fluid mb-3" src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/063-Refactory-HDYBAP017.jpg?resize=1024%2C536&ssl=1" alt="">
                <h4>GROWTH & CULTURE</h4>
                <h3>How Did You Become A Programmer?</h3>
                <h5 class="font-montserratl">BY ISNA <span class="ml-5">| AUGUST 4, 2020</span></h5>
                <div class="font-montserratl">
                    <p>Setiap kali mendengar kata “pemrograman”, kira-kira hal apa yang langsung terlintas di pikiran kalian guys? Ribet, susah dipelajari, ngoding, IT, lalu apa lagi? Mungkin beberapa kata tersebut yang paling mudah terlintas di pikiran kita ketika mendengar kata “pemrograman”. Tidak sedikit pula yang mempunyai pemikiran bahwa apabila seseorang ingin belajar pemrograman atau bisa ngoding harus kuliah di jurusan Teknologi Informatika. Hmm.. ternyata _statement_ seperti ini belum tentu selalu benar. Mengapa demikian? Karena seperti halnya kita ingin mahir dalam bermain tenis meja misalnya, kita tidak dituntut untuk mempunyai latar belakang pendidikan olahraga agar bisa bermain tenis meja. Yang perlu kita siapkan adalah meja tenis, bet, dan  bola pingpong. Barulah setelah itu kita bisa mulai latihan bermain tenis meja.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolor odio nulla? Laboriosam numquam voluptatem cum amet mollitia ut dignissimos porro praesentium culpa modi quisquam, distinctio, quae, in reprehenderit nesciunt earum aut deleniti eaque eos? Quisquam tempora optio fugit dolorum, repellendus error, fuga debitis maiores doloremque repudiandae nemo dolorem adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, possimus quisquam mollitia dolorem, earum blanditiis, nihil repudiandae porro incidunt illo eaque facilis dignissimos exercitationem odio voluptates repellendus provident minus. Sint exercitationem earum est repellat neque deleniti labore excepturi consequuntur illum ex porro pariatur facere, veritatis ducimus adipisci impedit, nostrum laudantium voluptatibus dicta qui ad? Omnis vero aperiam atque magnam, velit nemo, hic ipsa in facere soluta odit adipisci? Cupiditate iste nobis quia praesentium eum nihil quos itaque suscipit quae esse consequuntur fugit quas culpa fuga, voluptatibus sapiente vero ex nulla eius mollitia id? Rerum ex veniam ipsum numquam quis cupiditate.</p>
                </div>
            </div>
          </div>
          <div class="col-md-4">
            <ContactUs />
            <PopulerPost />
            <CaseStudies />
            <div class="tag font-raleway mt-5">
              <div class="title-head d-flex mb-3 align-items-center">
                <h3>TAG</h3>
                <div class="hr"></div>
              </div>
              <div class="tag-list">
                <a href="">DevOps</a>
                <a href="">Programmer</a>
                <a href="">Otodidak</a>
                <a href="">Developer</a>
                <a href="">Mobile</a>
                <a href="">Developer</a>
                <a href="">Front end</a>
              </div>
            </div>
          </div>
        </div>
        <div class="related-article font-raleway">
          <div class="title-head d-flex mb-5 align-items-center">
            <h3>ARTIKEL TERKAIT</h3>
            <div class="hr"></div>
          </div>
          <h2 class="title-related mb-4">
            Lihat lebih banyak artikel bagus dari kategori ini!
          </h2>
          <div class="row">
            <div class="col-md-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
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
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import NavbarBlog from '@/components/NavbarBlog.vue'
import ContactUs from '@/components/ContactUs.vue'
import PopulerPost from '@/components/PopulerPost.vue'
import CaseStudies from '@/components/CaseStudies.vue'
export default {
  name: 'Post',
  components: {
    Navbar,
    Footer,
    NavbarBlog,
    ContactUs,
    PopulerPost,
    CaseStudies
  }
}
</script>

<style scoped>
#post {
  padding: 50px 0px;
  background-color: #f5f5f5;
}
.hr {
  border: 1px #a8a8a8 solid;
  width: 100%;
  height: 0px;
}
.title-head h3 {
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #e48800;
  letter-spacing: 2px;
  width: 20%;
  margin: 0px;
  padding: 0px;
}
.tag .tag-list a {
  display: inline-block;
  margin-right: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  color: #808080;
  text-decoration: none;
}
.related-article {
  margin-top: 50px;
}
.related-article .title-related {
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #0b162b;
}
.post-container h4 {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #e89a01;
  letter-spacing: 1px;
  margin-bottom: 25px;
}
.post-container h3 {
      font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: #0b162b;
  letter-spacing: 1px;
    margin-bottom: 25px;
}
.post-container h5 {
    font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  letter-spacing: 1px;
    margin-bottom: 25px;
}
.post-container p {
    font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #666;
}
</style>
