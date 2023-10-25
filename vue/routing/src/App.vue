<template>
  <router-link to="/">Home</router-link>
  <router-link :to="{name:'ListView',query:{num:1000}}">List</router-link>
  <router-link to="/class">Class</router-link>
  
  <router-view/>
</template>

<script>

export default {
  name:'App'
}
</script>

