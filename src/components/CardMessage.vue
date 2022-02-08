<template>
  <div 
    class="box" 
    :style="{justifyContent: checkIfIsMyUser() ? 'flex-end' : 'flex-start'}"
  >
    <div 
      :class="checkIfIsMyUser() ? 'bg-sender' : 'bg-recipient'"
      class="message"
    >
      <i class="arrow"></i>
      <p class="main-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora doloremque consequatur eius aliquam doloribus ducimus? Fuga rem est ducimus iusto amet cumque nostrum vero, in illum, perferendis reprehenderit atque.
      </p>
      <small class="label-info">12:00</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMessage',
  data() {
    return {
      userId: 99
    }
  },

  props: {
    userMessageId: {
      type: Number,
      required: true
    },
  },

  methods: {
    checkIfIsMyUser() {
      return  this.userMessageId === this.userId
    },
  },
}
</script>

<style scoped>
* {
  color: #FFF;
}

.box {
  max-width: 100%;
  margin-top: 10px;
  display: flex;
}

.message {
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 300px;
  padding: 8px;
  position: relative;
  border-radius: 15px 20px;
}

.main-text {
  margin: 7px 3px;
}
.arrow {
  position: absolute;
  top: 1.5px;
  right: 10px;
  background: url('../assets/image/icons/arrow.svg') no-repeat center center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: .2s all;
}

.arrow:hover {
  transform: scale(1.2);
}

.label-info {
  align-self: flex-end;
  font-size: 11px;
}

.bg-recipient {
  background-color: rgba(207, 192, 159, 0.7);
}

.bg-sender {
  background-color: #117165;
}
</style>