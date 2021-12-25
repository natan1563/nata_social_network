<template>
  <span 
    class="circle-icon"
    :style="{backgroundColor: color}"
   >
      <div class="content">
          <slot></slot>
      </div>
  </span>
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
        width: 14px;
        height: 14px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s;
    }

    .circle-icon:hover {
        transform: scale(1.1);
    }

    .content {
        font-size: 8px;
        font-weight: bold;
        max-width: 8px;
        max-height: 8px;
    }
</style>