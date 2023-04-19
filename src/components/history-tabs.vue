<template>
  <div class="information__container">
    <div class="shopping-panel__wrapper" v-for="(item, details) in shoppingDetails" :key="details">
      <div class="shopping-icons">
        <img :src="item.icons">
      </div>
      <div class="shopping-details__wrapper">
        <div class="shopping-magazine__wrapper">
          <span class="magazine-information">{{item.magazine}}</span>
        </div>
        <div class="shopping-details">
          <span>{{item.article}}</span>
          <span class="details">{{item.date}}</span>
          <span class="details">{{item.sum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "history-tabs",
        data () {
            return {
                shoppingDetails: [
                    {
                        icons: require('../assets/icons/orders-basket.svg'),
                        magazine: 'Магазин Руль (ПЕРВОМАЙСКАЯ)',
                        article: 'KEA0005905',
                        date: '13.04.2022',
                        sum: '4 800₽',
                    },
                    {
                        icons: require('../assets/icons/machine.svg'),
                        magazine: 'Техцентр РУЛЬ-Сокол',
                        article: 'ХИС0089709',
                        date: '08.03.2022',
                        sum: '3 959₽',
                    },
                    {
                        icons: require('../assets/icons/machine.svg'),
                        magazine: 'Техцентр РУЛЬ-Сокол',
                        article: 'ХИС0089709',
                        date: '13.03.2022',
                        sum: '2 159₽',
                    },
                    {
                        icons: require('../assets/icons/orders-basket.svg'),
                        magazine: 'Магазин Руль (ПЕРВОМАЙСКАЯ)',
                        article: 'KEA0005905',
                        date: '01.04.2022',
                        sum: '14 000₽',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
  .information__container {
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 0 0 20px 20px;
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
  .shopping-details__wrapper {
    width: 100%;
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