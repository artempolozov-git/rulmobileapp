<template>
  <section class="profile-main__container">
    <div class="section-information__container">
      <div class="validate-inputs__error" v-show="false">
        <span>Внимание! Поле Новый пароль не заполнено.</span>
      </div>
      <form class="forms__container">
        <select class="inputs-form" name="Техцентр" required>
          <option value="Липецк">Липецк</option>
          <option value="Липецк">Липецк</option>
          <option value="Липецк">Липецк</option>
        </select>
        <input class="inputs-form" type="text" name="Фамилия" placeholder="Фамилия" required>
        <input class="inputs-form" type="text" name="Имя" placeholder="Имя" required>
        <input class="inputs-form" type="text" name="Отчество" placeholder="Отчество" required>

        <p class="form-support-text">Электронная почта не подтверждена</p>

        <input class="inputs-form" type="email" name="email" placeholder="Email" required>
        <input class="inputs-form" type="password" name="Имя" placeholder="Новый пароль" required>
        <input class="inputs-form" type="password" name="Отчество" placeholder="Подтверждение пароля" required>
        <button class="order-button">Сохранить</button>

        <p class="form-support-text">Настройки приложения</p>

        <select class="inputs-form" name="Предпочитаемый способ связи" required>
          <option value="Предпочитаемый способ связи" selected disabled>Предпочитаемый способ связи</option>
          <option value="Телефон">Телефон</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Telegram">Telegram</option>
        </select>
        <select class="inputs-form" name="Предпочитаемый способ связи" required>
          <option value="Предпочитаемый способ связи" selected disabled>Магазин по умолчанию</option>
          <option value="Магазин РУЛЬ-Сокол">Магазин РУЛЬ-Сокол</option>
          <option value="Магазин РУЛЬ-Советская">Магазин РУЛЬ-Советская</option>
          <option value="Магазин РУЛЬ-Елецкий">Магазин РУЛЬ-Елецкий</option>
        </select>
        <button class="order-button">Выход</button>
      </form>

      <div class="partner-logotypes__wrapper">
        <img class="partner-logotype" src="@/assets/icons/partner.svg">
        <div class="show-button__wrapper">
          <span>Показывать кнопку Липецк.Онлайн</span>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "profile-page"
    }
</script>

<style scoped>
  .profile-main__container {
    padding: 15px;
    box-sizing: border-box;
  }
  .section-information__container {
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffed00;
    border-radius: 50px;
    margin-bottom: 15px;
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
    box-sizing: border-box;
    margin-bottom: 15px;
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
  .form-support-text {
    text-align: center;
    margin-top: 0;
    font-weight: bold;
  }
  .partner-logotype {
    display: flex;
    margin: 10px auto 20px;
    width: 70%;
  }
  .show-button__wrapper {
    display: flex;
    align-items: center;
  }
  /* Стили кнопки слайдера */
  .switch {
    margin-left: auto;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1c1c1c;
    border: 1px solid #1c1c1c;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #ffffff;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: #ffed00;
    border: 1px solid #1c1c1c;
  }
  input:checked + .slider:before {
    background-color: #1c1c1c;
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
</style>