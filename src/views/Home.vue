<template>
  <div class="home">
    <!-- Left -->
    <section class="session-left">
      <nav id="navbar">
        <PhotoProfile/>
        <p class="logo">NataZap</p>
        <div class="icons">
          <span alt="mensagem" class="icon message" />
          <span alt="mensagem" class="icon options" />
        </div>
      </nav>

      <div class="input-search">
        <input type="text" placeholder="Pesquise uma conversa" class="main-input">
      </div>

      <div class="chats">
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
        <card-chat/>
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
import CardChat from '@/components/CardChat.vue'

export default {
  name: 'Home',
  components: {
    PhotoProfile,
    CardChat
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&display=swap');

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
  }

  #navbar {
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
    background-color: #D3D3D3;
  }

  .main-input:hover,
  .main-input:focus {
    transform: scale(1.1);
    box-shadow: 0 1px 3px rgba(10, 20, 30, .3);
    border: none;
  }

  /* Chats */
  .chats {
    display: flex;
    flex-direction: column;
    width: 98%;
    padding: 3px;
    max-height: 500px;
    overflow: auto;
    background-color: #363636;
    margin-top: 10px;
    border-top: 1px solid #808080;
  }


/* Scroll */
  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #696969 #A9A9A9;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 3px;
  }

  *::-webkit-scrollbar-track {
    background: #363636;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #696969;
  }

/* Logo */
.logo {
  font-family: 'Moo Lah Lah', Arial, Helvetica, sans-serif;
  font-size: 22px;
}
</style>