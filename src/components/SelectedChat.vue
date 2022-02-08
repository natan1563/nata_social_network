<template>
  <section>
     <header>
        <nav>
          <span class="left-sidebar">
            <PhotoProfile/>
            {{ user }}
          </span>

          <transition v-if="searchEnabled" mode="out-in">
            <input type="text" placeholder="Buscar" class="input-search">
          </transition>
          
          <span>
            <i id="search" @click="searchEnabled = !searchEnabled"></i>
          </span>
        </nav>
     </header>

      <main>
        <card-message 
          :userMessageId="99"
        />
        <card-message 
          :userMessageId="15"
        />
        <card-message 
          :userMessageId="99"
        />
        <card-message 
          :userMessageId="15"
        />
        <card-message 
          :userMessageId="99"
        />
        <card-message 
          :userMessageId="15"
        />
      </main>

      <footer>
        <div id="left-icons">
          <i id="emote" title="Emote" alt="Emote"></i>
          <i id="clip" title="Anexar" alt="Anexar"></i>
        </div>
        <input type="text" class="input-message" alt="Pesquisar" placeholder="Digite uma mensagem...">
        <i id="microphone" title="Audio" alt="Audio"></i>
      </footer>
    </section>
</template>

<script>
import PhotoProfile from '@/components/PhotoProfile.vue'
import CardMessage from '@/components/CardMessage.vue'

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
    CardMessage
  },
  data() {
    return {
      searchEnabled: false
    }
  },
}
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    margin-bottom: 0px;
  }

  .left-sidebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 75px;
  }

  nav,
  footer {
    padding: 5px 10px;
    margin-bottom: 10px;
    box-shadow: 0 1px 0px rgba(10, 20, 30, 0.3);
    background-color: #D3D3D3;
    border-radius: 3px;
    display: flex;
    align-items: center;
  }
  
  header {
    width: 100%;
  }

  nav {
    justify-content: space-between;
  } 

  /* Scroll */
  /* Works on Firefox */
  main {
    scrollbar-width: thin !important;
    scrollbar-color: #f6f6f6 #A9A9A9 !important;
    max-height: 85vmin;
    overflow: auto;
    height: calc(100vh - 155px);
    padding: 5px;
  }

  /* Works on Chrome, Edge, and Safari */
  main::-webkit-scrollbar {
    width: 3px;
  }

  main::-webkit-scrollbar-track {
    background: #363636;
    border-radius: 20px;
  }

  main::-webkit-scrollbar-thumb {
    background-color: #696969;
  }

  footer {
    height: 60px;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 15px;
  }

  #left-icons {
    display: flex;
    justify-content: space-between;
    flex-basis: 70px;
    align-items: center;
  }

  #emote {
    background: url('../assets/image/icons/poop.svg') no-repeat center center;
  }

  #clip {
    background: url('../assets/image/icons/paperclip.svg') no-repeat center center;
  }

  #microphone {
    background: url('../assets/image/icons/microphone.svg') no-repeat center center;
  }

  #search {
    background: url('../assets/image/icons/search.svg') no-repeat center center;
    background-size: contain;
    display: block;
    margin-right: 5px;
  }

  #emote,
  #clip,
  #microphone,
  #search {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: .3s all;
  }

  #emote:hover,
  #clip:hover,
  #microphone:hover,
  #search:hover {
    transform: scale(1.2);
  }

  .input-message,
  .input-search {
    flex: 1;
    margin: 0 10px;
    border-radius: 5px;
    border: none;
    max-height: 20px;
    padding: 20px;
    background-color: rgb(240, 240, 240);
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(10, 20, 30, 0.3);
    transition: .2s all;
  }

  .input-search {
    padding: 10px;
    max-width: 80%;
    font-size: 14px;
  }

  .input-message:hover,
  .input-message:focus,
  .input-search:hover,
  .input-search:focus {
    box-shadow: 0 4px 6px rgba(10, 20, 30, 0.5);
    transform: scaleY(1.2);
    outline: none;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    transition: all .3s ease-out;
    opacity: 0;
  }
</style>