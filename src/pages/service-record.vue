<template>
  <section class="place-order-main__container">
    <div class="header-navigation__wrapper">
      <router-link to="/" class="back-page__button">
        <img class="arrow-left__icon" src="@/assets/icons/arrow-left.svg">
        <p class="navigation-page__title">Запись в автосервис</p>
      </router-link>
    </div>

    <div class="section-information__container">
      <div class="section-icon">
        <img class="icon" src="@/assets/icons/record-icon.svg">
      </div>
      <div class="validate-inputs__error" v-show="false">
        <span>Внимание! Поле автомобиль не заполнено.</span>
      </div>

      <form class="place-order__form">
        <div class="select__container">
          <select name="Автомобиль" required>
            <option value="Автомобиль" selected disabled>Выберите Автомобиль</option>
            <option value="Ваш автомобиль">Ваш автомобиль</option>
            <option value="Ваш автомобиль">Ваш автомобиль</option>
            <option value="Ваш автомобиль">Ваш автомобиль</option>
          </select>
        </div>

        <div class="select__container">
          <select name="Услуга" required>
            <option value="Услуга" selected disabled>Выберите Услугу</option>
            <option value="Услуга">Услуга</option>
            <option value="Услуга">Услуга</option>
            <option value="Услуга">Услуга</option>
          </select>
        </div>

        <div class="select__container">
          <select name="Техцентр" required>
            <option value="Техцентр" selected disabled>Выберите Техцентр</option>
            <option value="Техцентр РУЛЬ-Сокол">Техцентр РУЛЬ-Сокол</option>
            <option value="Техцентр РУЛЬ-Советская">Техцентр РУЛЬ-Советская</option>
            <option value="Техцентр РУЛЬ-Елецкий">Техцентр РУЛЬ-Елецкий</option>
            <option value="Техцентр РУЛЬ-Елецкий">Техцентр РУЛЬ-Елецкий</option>
            <option value="Техцентр РУЛЬ-Елецкий">Техцентр РУЛЬ-Елецкий</option>
          </select>
        </div>

        <div class="date-picker__wrapper">
          <p class="records-title">Ближайшее время для записи</p>
          <datepicker :inline="true" :language="ru"></datepicker>
          <div class="select-time__container">
            <div class="select-time__wrapper">
              <div class="choose-time__block" style="margin-left: 0">
                <input id="first-time" type="radio" name="radio" value="1" checked>
                <label for="first-time">11:00</label>
              </div>
              <div class="choose-time__block">
                <input id="second-time" type="radio" name="radio" value="2">
                <label for="second-time">11:00</label>
              </div>
              <div class="choose-time__block">
                <input id="third-time" type="radio" name="radio" value="3">
                <label for="third-time">11:00</label>
              </div>
            </div>

            <div class="select-time__wrapper" style="margin-bottom: 0">
              <div class="choose-time__block" style="margin-left: 0">
                <input id="four-time" type="radio" name="radio" value="4">
                <label for="four-time">11:00</label>
              </div>
              <div class="choose-time__block">
                <input id="five-time" type="radio" name="radio" value="5">
                <label for="five-time">11:00</label>
              </div>
              <div class="choose-time__block">
                <input id="six-time" type="radio" name="radio" value="6">
                <label for="six-time">11:00</label>
              </div>
            </div>
          </div>
        </div>

        <div class="request-field__container">
          <textarea name="Комментарий" placeholder="Комментарий"></textarea>
        </div>
      </form>

      <router-link to="/service-record-success">
        <button class="order-button">Записаться</button>
      </router-link>
    </div>


  </section>
</template>

<script>
    import {ru} from 'vuejs-datepicker/dist/locale'
    import Datepicker from 'vuejs-datepicker';
    export default {
        data () {
            return {
                ru: ru
            }
        },
        name: "service-record",
        components: {
            Datepicker
        }
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
    height: 70px;
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
  .date-picker__wrapper {
    margin-bottom: 15px;
  }
  .select-time__container {
    background-color: #ffffff;
    padding: 30px 20px;
    border-top: 1px dashed #1c1c1c;
    border-radius: 0 0 20px 20px;
  }
  .select-time__wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 45px;
  }
  .choose-time__block {
    margin-left: 20px;
  }
  .choose-time__block > input[type=radio] {
    display: none;
  }
  .choose-time__block > input[type=radio]:checked + label {
    background-color: #1c1c1c;
    border: 2px solid #1c1c1c;
    color: #ffffff;
  }
  .choose-time__block > label {
    padding: 10px 20px;
    border-radius: 15px;
    user-select: none;
    background: #FFF466;
    border: 2px solid #FFF466;
    font-weight: bold;
  }
</style>