<template>
  <div class="home">
    <!-- Left -->
    <section class="session-left">
      <nav id="navbar">
        <PhotoProfile/>
        <p class="logo">NatãZap</p>
        <div class="icons">
          <span alt="mensagem" class="icon message" />
          <span alt="mensagem" class="icon options" />
        </div>
      </nav>

      <div class="input-search">
        <input type="text" placeholder="Pesquise uma conversa" class="main-input">
      </div>

      <div class="chats">
        <card-chat
          v-for="contact in getContactsAvailables"
          :key="contact.id"
          :contactData="contact"
        />
      </div>
    </section>

    <!-- Right -->
    <SelectedChat />
  </div>
</template>

<script>
import PhotoProfile from '@/components/PhotoProfile.vue'
import CardChat from '@/components/CardChat.vue'
import SelectedChat from '@/components/SelectedChat.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    PhotoProfile,
    CardChat,
    SelectedChat
  },
  computed: {
    ...mapGetters([
      'getContactsAvailables'
    ])
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&display=swap');

  .home {
    display: grid;
    grid-template-columns: 450px 1fr;
    max-height: 100vmin;
    max-width: 1920px;
    margin: 10px auto 0 auto;
    background: url('../assets/image/background/bg_chat.svg') repeat top;
    box-shadow: 0 2px 4px rgba(21, 29, 37, 0.3);
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
    transition: all .3s;
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
  .main-input:focus,
  .icon:hover {
    transform: scale(1.1);
    box-shadow: 0 1px 3px rgba(10, 20, 30, .3);
    outline: none;
  }

  /* Chats */
  .chats {
    display: flex;
    flex-direction: column;
    width: 98%;
    padding: 3px;
    max-height: 85vmin;
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
  font-size: 24px;
}
</style>