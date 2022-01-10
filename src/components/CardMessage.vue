<template>
  <div class="box" :style="{justifyContent: userMessageId === userId ? 'flex-start' : 'flex-end'}">
    <div class="message">
      <i class="arrow"></i>
      <p class="main-text">Texto teste</p>
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
  background-color: rgba(207, 192, 159, 0.7);
  position: relative;
  border-radius: 15px 20px;
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
</style>