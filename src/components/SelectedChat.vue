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
    scrollbar-width: thin;
    scrollbar-color: #f6f6f6 #A9A9A9;
    max-height: 85vmin;
    min-height: 85vmin;
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

  #emote,
  #clip,
  #microphone {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: .3s all;
  }

  #emote:hover,
  #clip:hover,
  #microphone:hover {
    transform: scale(1.2);
  }

  .input-message {
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

  .input-message:hover,
  .input-message:focus {
    box-shadow: 0 4px 6px rgba(10, 20, 30, 0.5);
    transform: scaleY(1.2);
    outline: none;
  }
</style>