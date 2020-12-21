<template>
  <div>
   <Navbar />
   <NavbarBlog />
   <div id="blog">
       coba
   </div>
   <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NavbarBlog from '@/components/NavbarBlog'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Blog',
  components: {
    Navbar,
    NavbarBlog,
    Footer
  }

}
</script>

<style>

</style>
