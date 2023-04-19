<template>
  <section class="success-main__container">
    <div class="section-information__container">
      <div class="section-icon">
        <img class="icon" src="@/assets/icons/success-icon.svg">
      </div>
      <p class="success-text">Ваш заказ отправлен в работу!</p>
    </div>

    <router-link to="/" class="order-button">На главную</router-link>
  </section>
</template>

<script>
    export default {
        name: "place-order-success"
    }
</script>

<style scoped>
  .success-main__container {
    padding: 30px 15px;
    box-sizing: border-box;
  }
  .section-information__container {
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 50px;
    margin-bottom: 80px;
  }
  .icon {
    display: flex;
    width: 20vw;
    margin: auto;
  }
  .success-text {
    text-align: center;
    font-size: 6vw;
  }
  .order-button {
    display: flex;
    margin: auto;
    width: max-content;
    text-align: center;
    background-color: #ffed00;
    color: #1c1c1c;
    text-decoration: none;
    border: none;
    border-radius: 50px;
    padding: 15px 80px;
    font-family: HelveticaNeueCyr;
    font-size: 6vw;
  }
</style>