<template>
  <div class="home">
    <!-- Left -->
    <section class="session-left">
      <nav id="navbar">
        <PhotoProfile/>
        <div class="icons">
          <span alt="mensagem" class="icon message" />
          <span alt="mensagem" class="icon options" />
        </div>
      </nav>

      <div class="input-search">
        <input type="text" placeholder="Busque seu campo" class="main-input">
      </div>

      <div class="chats">
        <chat/>
      </div>
    </section>

    <!-- Right -->
    <section>
      <nav>
        Topo
      </nav>

      <div>
        Corpo
      </div>

      <footer>
        <i>Icone 1</i>
        <i>Icone 2</i>
        <input type="text" class="inputMessage">
        <i>Microfone</i>
      </footer>
    </section>
  </div>
</template>

<script>
import PhotoProfile from '@/components/PhotoProfile.vue'
import Chat from '@/components/Chat.vue'

export default {
  name: 'Home',
  components: {
    PhotoProfile,
    Chat
  }
}
</script>

<style scoped>
  .home {
    display: grid;
    grid-template-columns: 300px 1fr;
    background-color: #363636;
    height: 100vh;
    width: 100%;
  }

  /* Navbar */
  section {
    margin: 10px;
  }

  .session-left {
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgb(151, 150, 150);
  }

  #navbar {
    height: 35px;
    padding: 5px 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 0px rgba(222, 222, 223, 0.5);
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .session-left ul {
    list-style: none;
  }

  /* Icons */
  .message {
    background: url('../assets/image/icons/message.svg') no-repeat center center;
  }

  .options {
    background: url('../assets/image/icons/options.svg') no-repeat center center;
  }

  .icons {
    display: flex;
  }
  
  .icon {
    background-size: cover;
    text-indent: -150px;
    display: block;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .icon:nth-child(1n) {
    margin-right: 5px;
  }
  
  /* Input */
  .input-search,
  .main-input {
    margin: 0 auto;
  }

  .input-search {
    width: 90%;
    margin-bottom: 5px;
  }
  
  .main-input {
    width: 95%;
    border-radius: 10px;
    border: none;
    height: 20px;
    padding: 10px 5px;
    text-align: center;
    cursor: pointer;
    transition: all .3s;
  }

  .main-input:hover,
  .main-input:focus {
    transform: scale(1.1);
    box-shadow: 0 1px 3px rgba(10, 20, 30, .3);
  }

/* Chats */
.chats {
  display: flex;
  flex-direction: column;
  width: 94%;
  padding: 3px;
  max-height: 500px;
  overflow: auto;
  background-color: #363636;
  margin-top: 10px;
}


/* Scroll */
  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #696969 #A9A9A9;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #C0C0C0;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #696969;
    border-radius: 20px;
    border: 3px solid #A9A9A9;
  }
</style>