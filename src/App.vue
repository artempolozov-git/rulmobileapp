<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  computed: {
      defaultViewKey: function () {
          return this.$route.name;
      }
  }
}
</script>

<style>
html, body {
  height: 100%;
  font-size: 3.5vw;
  color: #1c1c1c;
}
body {
  margin: initial;
  font-family: AudiTypeScreen;
  line-height: 1;
  font-weight: normal;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 800px;
  margin: auto;
  background: url(./assets/images/main-background.webp);
  background-size: contain;
}
@font-face {
  font-family: AudiTypeScreen;
  src: url('./assets/auditypescreen_bold.ttf');
  font-weight: bold;
}
@font-face {
  font-family: AudiTypeScreen;
  src: url('./assets/auditypescreen_normal.ttf');
  font-weight: normal;
}
#app-content {
  flex: 1 0 auto;
  align-self: center;
  box-sizing: border-box;
  width: 100%;
}
</style>
