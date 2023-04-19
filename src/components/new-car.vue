<template>
  <section class="active-order-main__container">
    <div class="header-navigation__wrapper">
      <router-link to="/my-cars" class="back-page__button">
        <img class="arrow-left__icon" src="@/assets/icons/arrow-left.svg">
        <p class="navigation-page__title">Новый автомобиль</p>
      </router-link>
      <p class="section-description">Для продолжения работы в приложении добавьте, пожалуйста, автомобиль!</p>
    </div>

    <div class="section-information__container">
      <img class="rul-logo__icon" src="@/assets/icons/rul-logo.svg">
      <form class="forms__container">
        <input class="inputs-form" type="text" name="VIN" placeholder="VIN" required>
        <input class="inputs-form" type="text" name="Год выпуска" placeholder="Год выпуска" required>
        <input class="inputs-form" type="text" name="Марка" placeholder="Марка" required>
        <input class="inputs-form" type="text" name="Модель" placeholder="Модель" required>
        <input class="inputs-form" type="text" name="Поколение" placeholder="Поколение" required>
        <input class="inputs-form" type="text" name="Пробег" placeholder="Пробег" required>
        <input class="inputs-form" type="text" name="Госномер" placeholder="Гос номер" required>

        <textarea class="request-field__container" name="Комментарий" placeholder="Комментарий"></textarea>
      </form>
      <button class="order-button">Сохранить</button>
    </div>
  </section>
</template>

<script>
    export default {
        name: "new-car"
    }
</script>

<style scoped>
  .active-order-main__container {
    padding: 30px 15px;
    box-sizing: border-box;
  }
  .header-navigation__wrapper {
    margin-bottom: 30px;
  }
  .back-page__button {
    display: flex;
    align-items: center;
    text-decoration: none;
    outline: none;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .arrow-left__icon {
    width: 2vw;
    margin-right: 15px;
  }
  .navigation-page__title {
    font-size: 4vw;
    margin: 0;
  }
  .section-description {
    color: #ffffff;
    padding: 0 10px 0 10px;
    text-align: center;
    margin-bottom: 40px;
  }
  .section-information__container {
    padding: 55px 30px 30px;
    box-sizing: border-box;
    background: url(../assets/images/new-car-background.webp);
    background-size: cover;
    background-position: top;
    border-radius: 50px;
    margin-bottom: 15px;
  }
  .rul-logo__icon {
    width: 13vw;
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .order-button {
    width: 100%;
    text-align: center;
    background-color: #1c1c1c;
    color: #ffed00;
    border: none;
    border-radius: 50px;
    padding: 15px 50px;
    font-size: 4vw;
    text-transform: uppercase;
  }
  .inputs-form {
    width: -webkit-fill-available;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 50px;
    border: 1px solid #1c1c1c;
    background: transparent;
    margin-bottom: 15px;
    font-family: AudiTypeScreen;
  }
  .inputs-form:focus-visible {
    outline: none;
  }
  .request-field__container {
    width: -webkit-fill-available;
    padding: 20px 15px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 1px solid #1c1c1c;
    background: transparent;
    margin-bottom: 15px;
    font-family: AudiTypeScreen;
  }
</style>