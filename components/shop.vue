<template>
  <div class="flex bg-green-500 w-18 p-4 rounded-full">
      <img class="h-8 w-8" src="https://e7.pngegg.com/pngimages/632/751/png-clipart-computer-icons-shopping-cart-shopping-cart-desktop-wallpaper-area.png" alt="">
      <h1>{{count}}</h1>
  </div>
</template>

<script>
export default {
    props:{
        count:{
            default:0
        }
    }

}
</script>

<style>

</style>