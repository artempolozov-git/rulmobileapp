<template>
  <div class="car-main__container">
    <div class="header-navigation__wrapper">
      <router-link to="/my-cars" class="back-page__button">
        <img class="arrow-left__icon" src="@/assets/icons/arrow-left.svg">
        <p class="navigation-page__title">Автомобиль</p>
      </router-link>
      <router-link to="/new-car" class="add-service__button">+</router-link>
    </div>

    <div class="car-information__container" v-for="(cars, items) in carsInfo" :key="items">
      <div class="car-model__wrapper">
        <img class="car-model__images" :src="cars.carLogo">
        <img class="car-number__images" :src="cars.carNumber">
      </div>
      <span class="car-name">{{cars.carName}}</span>
    </div>

    <div class="records-buttons__wrapper">
      <router-link to="/place-order" class="records-button">
        <span>Сделать заказ</span>
        <img src="@/assets/icons/success-icon.svg">
      </router-link>
      <router-link to="/service-record" class="records-button indent">
        <span>Запись в автосервис</span>
        <img src="@/assets/icons/record.svg">
      </router-link>
    </div>

    <tabs>
      <tab title="Регламентные замены">
        <replacements-tabs></replacements-tabs>
      </tab>
      <tab title="Рекомендации">
        <recommendations-tabs></recommendations-tabs>
      </tab>
      <tab title="История покупок">
        <history-tabs></history-tabs>
      </tab>
    </tabs>
  </div>
</template>

<script>
    import { Tabs, Tab } from 'vue-slim-tabs'
    import ReplacementsTabs from "./replacements-tabs";
    import RecommendationsTabs from "./recommendations-tabs";
    import HistoryTabs from "./history-tabs";
    export default {
        name: "cars-details",
        components: {
            HistoryTabs,
            RecommendationsTabs,
            ReplacementsTabs,
            Tabs,
            Tab,
        },
        data () {
            return {
                carsInfo: [
                    {
                        carLogo: require('../assets/images/toyota.png'),
                        carNumber: require('../assets/icons/car-number.svg'),
                        carName: 'Toyota RAV4 ||| (Xa30) 2005-2014',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
  .car-main__container {
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
    align-items: center;
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
    margin: 0;
  }
  .add-service__button {
    padding: 8px 25px;
    box-sizing: border-box;
    width: fit-content;
    margin-left: auto;
    border-radius: 40px;
    background-color: #ffed00;
    color: #1c1c1c;
    font-size: 5vw;
    font-weight: bold;
    text-decoration: none;
  }
  .car-information__container {
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .car-model__wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .car-model__images {
    width: 30vw;
    margin-right: 20px;
  }
  .car-number__images {
    width: 55%;
  }
  .records-buttons__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .records-button {
    display: flex;
    align-items: center;
    width: 200px;
    height: 70px;
    padding: 10px 15px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #ffed00;
    text-decoration: none;
    outline: none;
    color: #1c1c1c;
  }
  .indent {
    margin-left: 20px;
  }
  .records-button > img {
    width: 8vw;
    margin-left: 15px;
  }
</style>

<style>
  .vue-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 60px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 20px 20px 0 0;
    background-color: #B0A725;
    font-weight: normal;
  }
  .vue-tablist {
    display: flex;
    align-items: center;
    list-style: none;
    padding-left: 0;
    margin: 0;
    color: #1c1c1c
  }
  .vue-tab[aria-selected="true"] {
    background-color: #ffed00;
    color: #1c1c1c;
  }
</style>