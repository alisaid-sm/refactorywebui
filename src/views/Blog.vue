<template>
  <div>
    <Navbar />
    <NavbarBlog />
    <div id="blog">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="card mb-3">
              <img
                src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/063-Refactory-HDYBAP017.jpg?fit=768%2C402&ssl=1"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <a class="link-post" href="/post">BACA ARTIKEL</a>
              </div>
            </div>
            <div class="card-deck">
              <div class="card">
                <img
                  src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/061-Refactory-TempatYangAsyikUntukBelajarSecaraRemote011.jpg?fit=768%2C403&ssl=1"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
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
            </div>
          </div>
          <div class="col-md-4">
            <!-- Contact -->
            <ContactUs />
            <!-- Populer -->
            <PopulerPost />
          </div>
        </div>
      </div>
        <!-- TopArticle -->
        <TopArticle />
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="card-deck">
                    <div class="card">
                      <img
                        src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/061-Refactory-TempatYangAsyikUntukBelajarSecaraRemote011.jpg?fit=768%2C403&ssl=1"
                        class="card-img-top"
                        alt=""
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is a
                          little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
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
                  </div>
            </div>
            <div class="col-md-4">
              <!-- CaseStudies -->
              <CaseStudies />
            </div>
          </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NavbarBlog from '@/components/NavbarBlog'
import Footer from '@/components/Footer.vue'
import ContactUs from '@/components/ContactUs.vue'
import PopulerPost from '@/components/PopulerPost.vue'
import TopArticle from '@/components/TopArticle.vue'
import CaseStudies from '@/components/CaseStudies.vue'
export default {
  name: 'Blog',
  components: {
    Navbar,
    NavbarBlog,
    Footer,
    ContactUs,
    PopulerPost,
    TopArticle,
    CaseStudies
  }
}
</script>

<style scoped>
#blog {
  padding: 50px 0px;
}
.card .link-post {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #e48800;
  text-decoration: none;
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
