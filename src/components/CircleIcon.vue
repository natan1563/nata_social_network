<template>
  <div 
  class="circle-icon"
  :style="{backgroundColor: color}"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
        color: {
            type: String,
            default: '#CCC'
        },
    },
  }
</script>

<style scoped>
.circle-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: all .3s;
}

.circle-icon:hover {
    transform: scale(1.15);
}
</style>