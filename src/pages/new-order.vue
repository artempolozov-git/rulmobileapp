<template>
  <section class="place-order-main__container">
    <div class="header-navigation__wrapper">
      <router-link to="/" class="back-page__button">
        <img class="arrow-left__icon" src="@/assets/icons/arrow-left.svg">
        <p class="navigation-page__title">Новый заказ</p>
      </router-link>
    </div>

    <div class="section-information__container">
      <div class="section-icon">
        <img class="icon" src="@/assets/icons/order-icon.svg">
      </div>
      <div class="section-description__text">
        <p>Наша команда профессионалов ценит Ваше время, подбор запчастей делаем Мы через форму запроса!</p>
      </div>
      <div class="validate-inputs__error" v-show="false">
        <span>Внимание! Поле автомобиль не заполнено.</span>
      </div>

      <form class="place-order__form">
        <div class="select__container">
          <select name="Магазин" required>
            <option value="Магазин" selected disabled>Магазин</option>
            <option value="Магазин РУЛЬ-Сокол">Магазин РУЛЬ-Сокол</option>
            <option value="Магазин РУЛЬ-Советская">Магазин РУЛЬ-Советская</option>
            <option value="Магазин РУЛЬ-Елецкий">Магазин РУЛЬ-Елецкий</option>
            <option value="Магазин РУЛЬ-Елецкий">Магазин РУЛЬ-Елецкий</option>
            <option value="Магазин РУЛЬ-Елецкий">Магазин РУЛЬ-Елецкий</option>
          </select>
        </div>
        <div class="select__container">
          <select name="Автомобиль" required>
            <option value="Автомобиль" selected disabled>Автомобиль</option>
            <option value="Ваш автомобиль">Ваш автомобиль</option>
            <option value="Ваш автомобиль">Ваш автомобиль</option>
            <option value="Ваш автомобиль">Ваш автомобиль</option>
          </select>
        </div>
        <div class="request-field__container">
          <textarea name="Запрос" placeholder="Впишите запрос"></textarea>
        </div>
      </form>

      <router-link to="/place-order-success">
        <button class="order-button">Отправить</button>
      </router-link>
      <button class="callback-button">
        <img class="callback-icon" src="@/assets/icons/phone.svg">
        <span class="callback-btn__text">Позвонить консультанту</span>
      </button>
    </div>


  </section>
</template>

<script>
    export default {
        name: "place-order"
    }
</script>

<style scoped>
  .place-order-main__container {
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
  .section-information__container {
    padding: 45px 30px 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 50px;
    margin-bottom: 15px;
  }
  .icon {
    width: 13vw;
    position: absolute;
    top: 11%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .section-description__text {
    text-align: center;
    border-bottom: 1px dashed #1c1c1c;
    margin-bottom: 10px;
  }
  .validate-inputs__error {
    text-align: center;
    color: #ffffff;
    background-color: rgba(28, 28, 28, 0.2);
    border-radius: 50px;
    padding: 15px;
    font-size: 3vw;
    margin-bottom: 15px;
  }
  .order-button {
    width: 100%;
    text-align: center;
    background-color: #1c1c1c;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    padding: 15px 50px;
    margin-bottom: 15px;
    font-family: AudiTypeScreen;
    text-transform: uppercase;
    font-size: 3.5vw;
  }
  .select__container > select {
    width: 100%;
    padding: 15px 20px;
    box-sizing: border-box;
    font-family: AudiTypeScreen;
    color: #ffffff;
    border-radius: 50px;
    background-color: #1c1c1c;
    border: 2px #1c1c1c solid;
    margin-bottom: 15px;
    font-size: 3.5vw;
  }
  .request-field__container > textarea {
    width: -webkit-fill-available;
    height: 100px;
    padding: 20px;
    margin-bottom: 15px;
    background-color: #ffed00;
    color: #1c1c1c;
    border-radius: 20px;
    border: 1px solid #1c1c1c;
    font-family: AudiTypeScreen;
    resize: none;
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