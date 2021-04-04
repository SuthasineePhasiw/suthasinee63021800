<template>
  <div>
      <center class="mt-10 ">
      <img class="h-52 w-52 rounded-full border-4 shadow-2xl" :src="users.image" alt="">
      <div class="text-2xl mt-5">Username : {{users.username}}</div>
      <div class="text-2xl mt-3"> {{users.first_name}} {{users.last_name}} </div>
      <div class="text-xl mt-3" >Age : {{users.age}}</div>
      <div class="text-xl mt-3">Email : {{users.email}}</div>
      </center>
  </div>
</template>

<script>
import user from "@/static/user.json"
export default {
  data:() => {
    return( {
      users:user
    })
  }

}
</script>

<style>

</style>