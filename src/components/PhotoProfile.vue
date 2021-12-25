<template>
  <div id="profile">
      <img :src="require(`@/assets/image/profile/${source}`)">
  </div>
</template>

<script>
export default {
    props: {
        source: {
            type: String,
            default: "default.jpg"
        },
    },
}
</script>

<style scoped>
    #profile img {
        border-radius: 50%;
    }

    #profile {
       justify-self: center; 
    }
    #profile,
    #profile img {
        max-width: 35px;
        height: 35px;
    }
</style>