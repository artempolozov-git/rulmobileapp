<template>
  <section class="active-order-main__container">
    <div class="header-navigation__wrapper">
      <router-link to="/" class="back-page__button">
        <img class="arrow-left__icon" src="@/assets/icons/arrow-left.svg">
        <p class="navigation-page__title">Заказ</p>
      </router-link>
      <div class="add-order__button">+</div>
    </div>

    <div class="section-information__container">
      <img class="rul-logo__icon" src="@/assets/icons/rul-logo.svg">

      <div class="active-order-information__block">
        <div class="order-information__block">
          <span class="order-name">Магазин Руль (ПЕРВОМАЙСКАЯ)</span>
          <span class="additional-information">13.04.2022</span>
        </div>
      </div>
      <div class="active-order-information__block">
        <div class="order-information__block">
          <span class="order-name">CASTROL EDGE PROFESSIONAL 5W30 A5 1л.х6</span>
          <span class="additional-information">7200₽</span>
        </div>
        <div class="order-information__block">
          <span class="order-name">Автошина 215/60 R16 95H Nano Energy 3x4</span>
          <span class="additional-information">35 000₽</span>
        </div>
      </div>

      <div class="total-sum__block">
        <span class="order-total-sum">Итого к оплате</span>
        <span class="total-sum">42 200₽</span>
      </div>
    </div>

    <button class="order-button">Оплатить</button>
  </section>
</template>

<script>
    export default {
        name: "active-order"
    }
</script>

<style scoped>
  .active-order-main__container {
    padding: 30px 15px;
    box-sizing: border-box;
  }
  .header-navigation__wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  .back-page__button {
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    outline: none;
    color: #ffffff;
  }
  .arrow-left__icon {
    width: 2vw;
    margin-right: 15px;
  }
  .navigation-page__title {
    font-size: 4vw;
    margin: 0 0 5px;
  }
  .add-order__button {
    padding: 8px 25px;
    box-sizing: border-box;
    width: fit-content;
    margin-left: auto;
    border-radius: 40px;
    background-color: #ffed00;
    color: #1c1c1c;
    font-size: 5vw;
    font-weight: bold;
  }
  .section-information__container {
    padding: 45px 30px 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 50px;
    margin-bottom: 15px;
  }
  .rul-logo__icon {
    width: 13vw;
    position: absolute;
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .active-order-information__block {
    border-bottom: 1px dashed #1c1c1c;
  }
  .order-information__block {
    display: flex;
    margin: 10px 0;
  }
  .order-name {
    width: 80%;
  }
  .additional-information {
    margin-left: auto;
  }
  .total-sum__block {
    display: flex;
    margin: 15px 0;
    font-size: 5vw;
  }
  .total-sum {
    margin-left: auto;
  }
  .order-button {
    width: 100%;
    text-align: center;
    background-color: #ffed00;
    border: none;
    border-radius: 50px;
    padding: 15px 50px;
    font-size: 4vw;
    text-transform: uppercase;
  }
</style>