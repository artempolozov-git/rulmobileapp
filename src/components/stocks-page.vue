<template>
  <section class="stocks-main__container">
    <div class="section-stocks__container">
      <div class="stocks-banner__wrapper">
        <p class="stocks-subtitle">Шиномонтаж третьего колеса в подарок!</p>
      </div>
      <div class="stocks-information">
        <p class="stocks-title">Условия акции</p>
        <p class="stocks-description">Условия акции</p>
      </div>
      <div class="buttons__wrapper">
        <router-link to="/place-order-success">
          <button class="order-button">Запись в автосервис</button>
        </router-link>
        <button class="callback-button">
          <img class="callback-icon" src="@/assets/icons/phone.svg">
          <span class="callback-btn__text">Позвонить консультанту</span>
        </button>
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
  .section-stocks__container {
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 50px;
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
  .stocks-subtitle {
    color: #ffffff;
    font-weight: bold;
    margin: 0;
  }
  .stocks-title {
    text-align: center;
    text-transform: uppercase;
  }
  .stocks-description {
    color: #a4a4a4;
  }
  .order-button {
    width: 100%;
    text-align: center;
    background-color: #1c1c1c;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    padding: 15px 50px;
    margin-bottom: 10px;
    font-family: AudiTypeScreen;
    font-size: 3.5vw;
  }
  .callback-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    background-color: #1c1c1c;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    padding: 15px 50px;
    margin-bottom: 15px;
    font-size: 3.5vw;
  }
  .callback-icon {
    width: 3vw;
    margin-right: 10px;
  }
</style>