<template>
  <footer class="footer-main__container">
    <nav class="footer-navigation__container">
      <router-link to="/" class="footer-navigation__blocks">
        <img class="images" src="@/assets/icons/home.svg">
        <p class="navigation-text">Главная</p>
      </router-link>

      <router-link to="/stocks" class="footer-navigation__blocks indent">
        <img class="images" src="@/assets/icons/sale.svg">
        <p class="navigation-text">Акции</p>
      </router-link>

      <router-link to="/shopping-cart" class="footer-navigation__blocks indent">
        <img class="images" src="@/assets/icons/package.svg">
        <p class="navigation-text">Покупки</p>
      </router-link>

      <router-link to="/profile-page"  class="footer-navigation__blocks indent">
        <img class="images" src="@/assets/icons/rudder.svg">
        <p class="navigation-text">Профиль</p>
      </router-link>

      <div class="footer-navigation__blocks indent">
        <img class="images last" src="@/assets/icons/lipetsk-online.svg">
      </div>
    </nav>
  </footer>
</template>

<script>
    export default {
        name: "footer-app"
    }
</script>

<style scoped>
.footer-main__container {
  padding: 0 15px 30px;
  box-sizing: border-box;
}
.footer-navigation__container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.footer-navigation__blocks {
  width: fit-content;
  outline: none;
  text-decoration: none;
}
.indent {
  margin-left: auto;
}
.images {
  height: 5vw;
  margin: auto;
  display: flex;
}
.last {
  height: 10vw;
}
.navigation-text {
  color: #ffed00;
  margin: 10px 0 0 0;
}
</style>