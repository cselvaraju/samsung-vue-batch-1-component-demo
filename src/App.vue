<template>
  <h1>Actor List</h1>
  <!-- <ul>
    <li v-for="(actor, index) in actorList" :key="index">
      <actor-item v-bind:actor-name="actor.name" v-bind:actor-city="actor.city"></actor-item>
    </li>
  </ul> -->

  <ul>
    <li v-for="(actor, index) in actorList" :key="index">
      <ActorItem v-bind="actor"></ActorItem>
    </li>
  </ul>
  <div>
    URL is: {{ url }}
    <br>
    <a :href="url">Visit Google</a>
  </div>
</template>

<script>
import ActorItem from "./components/ActorItem.vue"

export default {
  components: {
    ActorItem
  },

  data() {
    return {
      actorList: [
        {
          name: 'Amitabh Bachhan',
          city: 'Mumbai'
        },
        {
          name: 'Ajith',
          city: 'Chennai'
        }
      ],
      url: 'https://google.com'
    }
  }
}
</script>

<style>

</style>