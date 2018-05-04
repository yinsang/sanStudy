<template>
<div>
    <router-link to="/page1">Go to Foo</router-link>
    <router-link to="/page2">Go to Bar</router-link>
    <router-view></router-view>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
// import routers from "./routers";
export default {
  created() {
    this.getGithubStars();
  },
  methods: {
    getGithubStars() {
      axios
        .get(
          "https://api.github.com/search/repositories?q=language:javascript&sort=stars"
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
