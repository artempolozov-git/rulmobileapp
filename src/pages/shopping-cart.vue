<template>
  <section class="shopping-main__container">
    <div class="section-information__container">
      <router-link class="page-link" to="/shopping-details">
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
      </router-link>
    </div>
  </section>
</template>

<script>
    export default {
        name: "shopping-cart",
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
                    {
                        icons: require('../assets/icons/machine.svg'),
                        magazine: 'Техцентр РУЛЬ-Сокол',
                        carNumbers: require('../assets/icons/car-number.svg'),
                        article: 'ХИС0089709',
                        date: '08.03.2022',
                        sum: '3 959₽',
                    },
                    {
                        icons: require('../assets/icons/machine.svg'),
                        magazine: 'Техцентр РУЛЬ-Сокол',
                        carNumbers: require('../assets/icons/car-number.svg'),
                        article: 'ХИС0089709',
                        date: '13.03.2022',
                        sum: '2 159₽',
                    },
                    {
                        icons: require('../assets/icons/orders-basket.svg'),
                        magazine: 'Магазин Руль (ПЕРВОМАЙСКАЯ)',
                        carNumbers: require('../assets/icons/car-number.svg'),
                        article: 'KEA0005905',
                        date: '01.04.2022',
                        sum: '14 000₽',
                    },
                    {
                        icons: require('../assets/icons/machine.svg'),
                        magazine: 'Техцентр РУЛЬ-Сокол',
                        carNumbers: require('../assets/icons/car-number.svg'),
                        article: 'ХИС0089709',
                        date: '08.03.2022',
                        sum: '3 959₽',
                    },
                    {
                        icons: require('../assets/icons/machine.svg'),
                        magazine: 'Техцентр РУЛЬ-Сокол',
                        carNumbers: require('../assets/icons/car-number.svg'),
                        article: 'ХИС0089709',
                        date: '13.03.2022',
                        sum: '2 159₽',
                    },
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
  .page-link {
    text-decoration: none;
    outline: none;
    color: #1c1c1c;
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
</style>