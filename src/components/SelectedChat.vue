<template>
  <section>
     <header>
        <nav>
          <span class="left-sidebar">
            <PhotoProfile/>
            {{ user }}
          </span>
        </nav>
     </header>

      <main>
        Corpo
      </main>

      <footer>
        <i>Icone 1</i>
        <i>Icone 2</i>
        <input type="text" class="inputMessage">
        <i>Microfone</i>
      </footer>
    </section>
</template>

<script>
import PhotoProfile from '@/components/PhotoProfile.vue'

export default {
  name: 'SelectedChat',
  props: {
    user: {
      type: String,
      require: true,
      default: 'Nata' 
    }
  },
  components: {
    PhotoProfile,
  },
}
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
  }

  nav,
  footer {
    height: 35px;
    padding: 5px 10px;
    margin-bottom: 10px;
    box-shadow: 0 1px 0px rgba(10, 20, 30, 0.3);
    background-color: #D3D3D3;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header {
    width: 100%;
    height: 10vmin;
    margin-bottom: 5px;
  }

  main {
    height: 80vmin;
  }

  footer {
    margin-bottom: 0;
  }

  .left-sidebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 73px;
  }
</style>