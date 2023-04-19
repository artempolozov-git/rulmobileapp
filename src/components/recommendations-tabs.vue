<template>
  <div class="information__container">
    <div class="information__wrapper" v-for="(item, replace) in replacementsInfo" :key="replace">
      <p class="name">{{item.name}}</p>
      <p class="mileage">{{item.mileage}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "recommendations-tabs",
        data () {
            return {
                replacementsInfo: [
                    {
                        name: 'Суппорт тормозной обслуживание',
                        mileage: '149936км',
                    },
                    {
                        name: 'Фильтр воздушный двигателя замена',
                        mileage: '155936км',
                    },
                    {
                        name: 'Регулировка углов установки колес (одна ось)',
                        mileage: '116476км',
                    },
                    {
                        name: 'Регулировка углов установки колес (две оси)',
                        mileage: '145476км',
                    },
                    {
                        name: 'Суппорт тормозной обслуживание',
                        mileage: '149936км',
                    },
                    {
                        name: 'Фильтр воздушный двигателя замена',
                        mileage: '155936км',
                    },
                    {
                        name: 'Регулировка углов установки колес (одна ось)',
                        mileage: '126476км',
                    },
                    {
                        name: 'Регулировка углов установки колес (две оси)',
                        mileage: '205476км',
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
  .information__wrapper {
    display: flex;
    align-items: center;
  }
  .name {
    margin-right: 30px;
  }
  .mileage {
    margin-left: auto;
  }
</style>