<template>
  <section class="home-main__container">
    <div class="section-menu__container">
      <router-link to="/car-repair" class="menu-car-repair__block">
        <img class="car-repair__images" src="@/assets/icons/car-repair.svg">
        <div class="menu-repair__text-block">
          <p class="menu__title">Активный ремонт</p>
          <span class="menu__status">Состояние: <span class="status-color">В работе</span></span>
        </div>
      </router-link>

      <router-link to="/place-order"  class="menu-place-order__block">
        <div class="menu-order__text-block">
          <p class="menu__title">Сделать<br>заказ</p>
        </div>
        <img class="place-order__images" src="@/assets/icons/place-order.svg">
      </router-link>

      <router-link to="/active-order" class="menu-place-order__block">
        <div class="menu-order__text-block">
          <p class="menu__title">Активный<br>заказ</p>
        </div>
        <img class="place-order__images" src="@/assets/icons/place-order.svg">
      </router-link>

      <router-link to="/service-record" class="menu-service-record__block">
        <img class="service-record__images" src="@/assets/icons/service-record.svg">
        <div class="menu-record__text-block">
          <p class="menu__title">Запись<br>в автосервис</p>
        </div>
        <div class="add-service__button">+</div>
      </router-link>

      <router-link to="/my-cars" class="menu-my-car__block">
        <div class="menu-order__text-block">
          <p class="menu__title">Мои<br>автомобили</p>
        </div>
        <img class="my-car__images" src="@/assets/icons/my-cars.svg">
      </router-link>
    </div>
  </section>
</template>

<script>
    export default {
        name: "home-app"
    }
</script>

<style scoped>
.home-main__container {
  padding: 30px 15px;
  box-sizing: border-box;
}
.section-menu__container {
  padding: 20px 30px;
  box-sizing: border-box;
  background-color: #ffed00;
  border-radius: 50px;
}
.menu-car-repair__block {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  padding: 15px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  background: url(../assets/images/active-repair-background.webp);
  background-size: cover;
  background-position: left;
  outline: none;
  text-decoration: none;
  color: #ffffff;
}
.car-repair__images {
  width: 12vw;
  margin-right: 15px;
}
.menu__title {
  font-size: 4vw;
  margin: 0 0 5px;
}
.status-color {
  color: #ffed00;
}

.menu-place-order__block {
   display: flex;
   align-items: center;
   width: 100%;
   border-radius: 15px;
   padding: 15px 20px;
   box-sizing: border-box;
   margin-bottom: 15px;
   background: url(../assets/images/place-order-background.webp);
   background-size: cover;
   background-position: center;
  outline: none;
  text-decoration: none;
  color: #ffffff;
 }
.place-order__images {
  width: 15vw;
  margin-left: auto;
}

.menu-service-record__block {
  display: block;
  width: 100%;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  background: url(../assets/images/service-record-repair.webp);
  background-size: cover;
  background-position: center;
  outline: none;
  text-decoration: none;
  color: #ffffff;
}
.service-record__images {
  width: 15vw;
  margin-bottom: 15px;
}
.add-service__button {
  padding: 10px 25px;
  box-sizing: border-box;
  margin-top: 15px;
  width: fit-content;
  border-radius: 40px;
  background-color: #ffed00;
  color: #1c1c1c;
  font-size: 5vw;
  font-weight: bold;
}

.menu-my-car__block {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  padding: 15px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  background: url(../assets/images/my-cars-background.webp);
  background-size: cover;
  background-position: center;
  outline: none;
  text-decoration: none;
  color: #ffffff;
}
.my-car__images {
  width: 20vw;
  margin-left: auto;
}
</style>