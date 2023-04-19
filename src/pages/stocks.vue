<template>
  <section class="stocks-main__container">
    <div class="section-information__container">
      <router-link class="stocks-links" to="/stocks-page">
        <div class="stocks-banner__wrapper">
          <p class="stocks-information">Шиномонтаж третьего колеса в подарок!</p>
        </div>
      </router-link>

      <div class="stocks-banner__wrapper second-banner">
        <div>
          <p class="stocks-information">Защитная накидка</p>
          <p class="stocks-information-stroke">520₽</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "stocks-page"
    }
</script>

<style scoped>
  .stocks-main__container {
    padding: 50px 15px;
    box-sizing: border-box;
  }
  .section-information__container {
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 50px;
  }
  .stocks-links {
    outline: none;
    text-decoration: none;
  }
  .stocks-banner__wrapper {
    display: flex;
    align-items: flex-end;
    padding: 40px 20px;
    box-sizing: border-box;
    border-radius: 30px;
    height: 300px;
    margin-bottom: 15px;
    background: url(../assets/images/first-action-banner.jpg);
    background-size: cover;
    background-position: left;
  }
  .second-banner {
    background: url(../assets/images/second-action-banner.jpg);
    background-size: cover;
    background-position: left;
    margin: 0;
  }
  .stocks-information {
    color: #ffffff;
    font-weight: bold;
    margin: 0;
  }
  .stocks-information-stroke {
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    margin: 5px 0 0 0;
  }
</style>