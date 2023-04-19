<template>
  <section class="car-main__container">
    <div class="header-navigation__wrapper">
      <router-link to="/" class="back-page__button">
        <img class="arrow-left__icon" src="@/assets/icons/arrow-left.svg">
        <p class="navigation-page__title">Автомобиль</p>
      </router-link>
      <router-link to="/new-car" class="add-service__button">+</router-link>
    </div>

    <router-link class="page-link" to="/cars-details">
      <div class="section-information__container" v-for="(cars, items) in carsInfo" :key="items">
        <div class="car-model__wrapper">
          <img class="car-model__images" :src="cars.carLogo">
          <img class="car-number__images" :src="cars.carNumber">
        </div>
        <span class="car-name">{{cars.carName}}</span>
      </div>
    </router-link>
  </section>
</template>

<script>
    export default {
        name: "my-cars",
        data () {
            return {
                carsInfo: [
                    {
                        carLogo: require('../assets/images/toyota.png'),
                        carNumber: require('../assets/icons/car-number.svg'),
                        carName: 'Toyota RAV4 ||| (Xa30) 2005-2014',
                    },
                    {
                        carLogo: require('../assets/images/chevrolet.png'),
                        carNumber: require('../assets/icons/car-number.svg'),
                        carName: 'Chevrolet 2010-2017',
                    },
                    {
                        carLogo: require('../assets/images/ford.png'),
                        carNumber: require('../assets/icons/car-number.svg'),
                        carName: 'Ford Mondeo V 2016',
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
  .section-information__container {
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 50px;
    margin-bottom: 15px;
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
  .page-link {
    outline: none;
    text-decoration: none;
    color: #1c1c1c;
  }
</style>