const App = {
  data() {
    return {
      activeIndex: 0,
      isEnd: false,
      steps: [
        {
          id: 1,
          title: "Основы",
          text:
            "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
        },
        {
          id: 2,
          title: "Компоненты",
          text:
            "Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.",
        },
        {
          id: 3,
          title: "Роутер",
          text:
            "В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.",
        },
        {
          id: 4,
          title: "Vuex",
          text:
            "В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.",
        },
        {
          id: 5,
          title: "Composition",
          text:
            "Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.",
        },
      ],
    };
  },
  methods: {
    prev() {
      this.resetIsEnd(false);

      if (this.isFirstStep) {
        return;
      }

      this.activeIndex--;
    },
    reset() {
      this.resetIsEnd(false);
      this.activeIndex = 0;
    },
    nextOfFinish() {
      if (this.isLastStep) {
        this.resetIsEnd(true);
        return;
      }

      this.activeIndex++;
    },
    setActive(index) {
      this.resetIsEnd(false);
      this.activeIndex = index;
    },
    resetIsEnd(val) {
      if (this.isEnd !== val) {
        this.isEnd = val;
      }
    },
  },
  computed: {
    getCurrentStepText() {
      return this.steps[this.activeIndex].text;
    },
    isFirstStep() {
      return this.activeIndex === 0;
    },
    isLastStep() {
      return this.steps.length - 1 === this.activeIndex;
    },
  },
};

Vue.createApp(App).mount("#app");
