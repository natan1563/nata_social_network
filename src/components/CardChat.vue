<template>
  <div class="card">
      <PhotoProfile class="image"/>
      <div class="card-info">
          <div class="label-top">
              <strong class="contact-name">Natã</strong>
              <small class="last-message">22:09</small>
          </div>

          <div class="label-bottom">
              <p class="last-message">Last message</p>
              <div class="side-group">
                   <circle-icon class="icon">
                       <img :src="require('../assets/image/icons/pin.svg')"/>
                   </circle-icon>

                   <circle-icon color="#50c878" class="icon align-middle">
                       <span>12</span>
                  </circle-icon>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import PhotoProfile from '@/components/PhotoProfile.vue'
import CircleIcon from './CircleIcon.vue'

export default {
    components: {
        PhotoProfile,
        CircleIcon
    },
}
</script>

<style scoped>
    .card {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 40px 1fr;
        background-color: #4F4F4F;
        padding: 15px 5px;
        border-radius: 5px;
        cursor: pointer;
    }

    .card:nth-child(1n) {
        margin-top: 3px;
    }

    .card:hover {
        background-color: #696969;
    }

    .card-info {
        display: flex;
        flex-direction: column;
    }

    .label-top,
    .label-bottom,
    .side-group {
        display: flex;
        justify-content: space-between;
    }

    .icon {
        margin-left: 4px;
        font-size: 12px;
    }

    .align-middle {
        display: flex;
        align-items: center;
    }

    .contact-name {
        color: #FFF;
        font-size: 18px;
    } 

    .last-message {
        color: #808080;
        font-size: 14px;
    }

    .label-bottom {
        height: 20px;
    }

    .label-bottom p {
       align-self: flex-end;
    }

</style>