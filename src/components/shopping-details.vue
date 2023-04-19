<template>
  <section class="shopping-main__container">
    <div class="section-information__container">
      <div class="shopping-panel__wrapper" v-for="(item, details) in shoppingDetails" :key="details">
        <div class="shopping-icons">
          <img :src="item.icons">
        </div>
        <div class="shopping-details__wrapper">
          <div class="shopping-magazine__wrapper">
            <span class="magazine-information">{{item.magazine}}</span>
            <img class="car-number__images" :src="item.carNumbers">
          </div>
          <div class="shopping-details">
            <span>{{item.article}}</span>
            <span class="details">{{item.date}}</span>
            <span class="details">{{item.sum}}</span>
          </div>
        </div>
      </div>

      <div class="receipt-main__wrapper">
        <div class="barcode-icon">
          <img class="icon" src="@/assets/icons/barcode.svg">
        </div>
        <div class="about-shopping-information">
          <p>Магазин Руль (ПЕРВОМАЙСКАЯ)</p>
          <p>398001, Липецкая область, г.Липецк, ул.Первомайская, дом №117</p>
          <p>ИНН 482415154476</p>
        </div>

        <div class="active-order-information__block">
          <div class="order-information__block">
            <span class="order-name">Приход</span>
            <span class="additional-information">13.05.2022</span>
          </div>
          <div class="order-information__block">
            <span class="order-name">CASTROL EDGE PROFESSIONAL 5W30 A5 1л.х6</span>
            <span class="additional-information">4x800₽</span>
          </div>
        </div>

        <div class="total-sum__block">
          <span class="order-total-sum">Итого</span>
          <span class="total-sum">4 800₽</span>
        </div>

        <p class="about-shopping-information">Спасибо за покупку!</p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "shopping-details",
        data () {
            return {
                shoppingDetails: [
                    {
                        icons: require('../assets/icons/orders-basket.svg'),
                        magazine: 'Магазин Руль (ПЕРВОМАЙСКАЯ)',
                        carNumbers: require('../assets/icons/car-number.svg'),
                        article: 'KEA0005905',
                        date: '13.04.2022',
                        sum: '4 800₽',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
  .shopping-main__container {
    padding: 50px 15px;
    box-sizing: border-box;
  }
  .section-information__container {
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 50px;
  }
  .shopping-panel__wrapper {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 15px;
  }
  .shopping-icons > img {
    margin-right: 15px;
    width: 9vw;
  }
  .shopping-magazine__wrapper {
    display: flex;
    align-items: flex-start;
  }
  .car-number__images {
    margin-left: auto;
    width: 35%;
  }
  .shopping-details {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .details {
    margin-left: auto;
  }
  .receipt-main__wrapper {
    width: 100%;
    padding: 40px 15px 20px;
    box-sizing: border-box;
    background: url(../assets/images/receipt-background.png);
    background-size: cover;
    background-position: top;
    border-radius: 0 0 30px 30px;
  }
  .barcode-icon {
    display: flex;
    margin: auto;
    width: 70%;
  }
  .barcode-icon > img {
    margin-bottom: 20px;
  }
  .about-shopping-information {
    text-align: center;
  }
  .active-order-information__block {
    border-bottom: 1px dashed #1c1c1c;
  }
  .order-information__block {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .additional-information {
    margin-left: auto;
  }
  .total-sum__block {
    display: flex;
    margin: 15px 0;
    font-size: 5vw;
    font-weight: bold;
  }
  .total-sum {
    margin-left: auto;
  }
</style>