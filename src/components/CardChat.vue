<template>
  <div class="card">
      <PhotoProfile />

      <div class="card-info">
          <div class="label-top">
              <strong class="contact-name">Natã</strong>
              <small class="last-message">22:09</small>
          </div>

          <div class="label-bottom">
              <p class="last-message">Last message</p>
              <div class="side-group">
                  <div class="icon">Fixed</div>
                  <div class="icon">2</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import PhotoProfile from '@/components/PhotoProfile.vue'

export default {
    components: {
        PhotoProfile,
    },
}
</script>

<style scoped>
    .card {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 40px 1fr;
        background-color: #4F4F4F;
        padding: 5px;
        border-radius: 5px;
    }

    .card:nth-child(1n) {
        margin-top: 3px;
    }

    .card:hover {
        
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
        margin-left: 2px;
    }

    .contact-name {
        color: #FFF;
        font-size: 14px;
    } 

    .last-message {
        color: #808080;
        font-size: 12px;
    }

    .label-bottom {
       align-items: baseline;
    }
</style>