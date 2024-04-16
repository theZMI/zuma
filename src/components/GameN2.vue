<template>
  <div id="game-n-2">
    <!-- Game -->
    <button type="button" class="button button-pause">
      <i class="bi bi-pause-fill"></i>
    </button>
    <div class="shadow"></div>
    <div id="score" class="score">
      <div class="title">Счёт</div>
      <div class="num">0</div>
    </div>
    <div class="popup-container">
      <div id="start" class="popup active">
        <div class="title">Начнём</div>
        <div class="info">
          <p>Выберите уровень сложности:</p>
        </div>
        <div class="button-container">
          <div @click="difficultyName='Легко'" class="button button-difficulty-1 mb-15">Легко</div>
          <div @click="difficultyName='Нормально'" class="button button-difficulty-2 mb-15">Нормально</div>
          <div @click="difficultyName='Трудно'" class="button button-difficulty-3">Трудно</div>
        </div>
      </div>
      <div id="stop" class="popup">
        <div class="title">Пауза</div>
        <div class="info">
        </div>
        <div class="button-container">
          <div id="continue-btn" class="button mb-15">Продолжить</div>
          <div id="reset-btn" class="button mb-15 button-secondary">Заново</div>
          <div id="donat-btn" style="display: none;" class="button button-secondary">Донат разрабу</div>
        </div>
      </div>
      <div id="donat" class="popup">
        <div class="title">Донат разрабу</div>
        <div class="info">
          <div class="mb-3">
            Игра бесплатна, но если хотите поблагодарить меня:
          </div>
          <div class="lead">
            <div class="mb-2">Сбербанк:</div>
            +7 (999) 255-37-77
          </div>
        </div>
        <div class="button-container">
          <div id="back-to-pause-menu" class="button mb-15">Назад</div>
        </div>
      </div>
      <div id="final" class="popup">
        <div class="title">Счёт:</div>
        <div class="info">
          <span class="num"></span>
          <div>Сложность: {{ difficultyName }}</div>
        </div>
        <div class="button-container">
          <div class="button button-again">Ещё разок?</div>
        </div>
      </div>
      <div class="mask"></div>
    </div>
    <div id="game-n-2-like-body"></div>
    <div style="background: #000; color: #FFF; position: fixed; bottom: 0; left: 0; width: 100%; padding: 15px; font-size: 12px; text-align: left; height: 100px;" id="my-console"></div>
    <!-- /Game -->
  </div>
</template>

<script>
import { InitGame2 } from "@/libraries/game-n2";

export default {
  data() {
    return {
      difficultyName: ''
    }
  },
  mounted() {
    InitGame2();
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

#game-n-2-like-body {
  rotate: 90deg;
  scale: 0.66;
  margin-top: 0 !important;
  height: fit-content;
}

#game-n-2 {
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(circle at center, #002129, #000);
  overflow: hidden;
  //font-family: "Josefin Sans", sans-serif;
  font-family: 'PT Sans', sans-serif;
  position: relative;

  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  *[hidden] {
    display: none;
  }

  .button-pause {
    color: #FFF;
    background: rgba(0, 0, 0, 0.65);
    width: 70px;
    height: 70px;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 99;
    font-size: 35px;
    border-radius: 50%;
  }

  #menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .mb-15 {
    margin-bottom: 15px;
  }

  .container {
    position: relative;
    background-image: url("@/assets/images/bg.svg");
  }
  .container::before {
    content: "";
    display: block;
    width: 1287.709px;
    height: 1004.262px;
    background-image: url("@/assets/images/bg-leaf.svg");
    position: absolute;
    top: -55px;
    left: -80px;
  }
  .container .leaf {
    position: absolute;
    z-index: 10;
    opacity: 0.33;
  }
  .container .leaf-01 {
    width: 290.296px;
    height: 197.981px;
    /*background-image: url("./../image/leaf-01.svg");*/
    transform-origin: top left;
    top: -10px;
    left: -50px;
    animation: leaf 8s -2s infinite;
  }
  .container .leaf-02 {
    width: 130.828px;
    height: 131.056px;
    /*background-image: url("./../image/leaf-02.svg");*/
    transform-origin: top right;
    top: -60px;
    right: 325px;
    animation: leaf 10s -3s infinite;
  }
  .container .leaf-03 {
    width: 214.618px;
    height: 225.252px;
    /*background-image: url("./../image/leaf-03.svg");*/
    transform-origin: top right;
    top: 60px;
    right: -60px;
    animation: leaf 5s -2s infinite;
  }
  .container .leaf-04 {
    width: 303.2px;
    height: 356.908px;
    background-image: url("@/assets/images/leaf-04.svg");
    transform-origin: bottom left;
    bottom: -60px;
    left: 0px;
    animation: leaf 7s -1s infinite;
  }
  .container .leaf-05 {
    width: 253.153px;
    height: 292.861px;
    background-image: url("@/assets/images/leaf-05.svg");
    transform-origin: bottom right;
    bottom: -110px;
    right: 660px;
    animation: leaf 9s -3s infinite;
  }
  .container .leaf-06 {
    width: 269.787px;
    height: 346.454px;
    background-image: url("@/assets/images/leaf-06.svg");
    transform-origin: bottom right;
    bottom: -75px;
    right: -40px;
    animation: leaf 15s -5s infinite;
  }
  .container svg {
    opacity: 0;
    pointer-events: none;
  }
  .container .player {
    width: 175px;
    height: 175px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
  }
  .container .player::before {
    content: "";
    display: block;
    width: 2px;
    height: 600px;
    margin-left: -1px;
    position: absolute;
    left: 50%;
    bottom: 30px;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));
    z-index: 1;
  }
  .container .player::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    background-size: contain;
    background-image: url("@/assets/images/frog.svg");
    z-index: 2;
  }
  .container .player .marble-1,
  .container .player .marble-2 {
    position: absolute;
    z-index: 3;
  }
  .container .player .marble-1 {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .container .player .marble-2 {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    left: 50%;
    border: solid 5px #83be7c;
  }
  .container .player .marble-2:nth-child(2) {
    top: 85px;
    transform: translateX(calc(-50% - 30px));
  }
  .container .player .marble-2:nth-child(3) {
    width: 25px;
    height: 25px;
    top: 105px;
    transform: translateX(-50%);
  }
  .container .player .marble-2:nth-child(4) {
    top: 85px;
    transform: translateX(calc(-50% + 30px));
  }
  .container .start-hole {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: black;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .container .final-hole {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .marble {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient(circle at center, rgba(0, 33, 41, 0), rgba(0, 0, 0, 0.8));
    z-index: 20;
    pointer-events: none;
    opacity: 0.25;
  }
  .shadow::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/noise.png");
    position: absolute;
    display: none;
    //opacity: 0.15;
  }

  .score {
    position: absolute;
    bottom: 15px;
    right: 15px;
    color: #fff;
    text-align: right;
  }
  .score .title {
    font-size: 16px;
  }
  .score .num {
    font-size: 70px;
  }

  .popup-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #002129;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 19;
    pointer-events: none;
  }
  .popup-container .popup {
    max-width: 320px;
    min-width: 300px;
    padding: 50px 40px 30px;
    border-radius: 15px;
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    transform: translateY(20px);
    transition: 0.2s;
    pointer-events: none;
    z-index: 1;
  }
  .popup-container .popup::after {
    content: "";
    display: block;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border: solid 2px #002129;
    border-radius: 11px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .popup-container .popup .title {
    font-size: 30px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }
  .popup-container .popup .info {
    font-size: 16px;
    color: #002129;
    text-align: center;
  }
  .popup-container .popup .info ul {
    list-style-type: disc;
    padding-left: 1em;
    text-align-last: left;
  }
  .popup-container .popup .info ul li {
    margin-top: 10px;
  }
  .popup-container .popup .info .num {
    font-size: 60px;
    font-weight: bold;
  }
  .popup-container .popup .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 30px;
  }
  .popup-container .popup .button-container .button {
    //font-weight: 500;
    color: #fff;
    font-size: 20px;
    text-align: center;
    letter-spacing: 1px;
    background-color: #002129;
    border-radius: 25px;
    padding: 15px 30px;
    cursor: pointer;
    min-width: 215px;
    box-sizing: border-box;
  }
  .popup-container .popup .button-container .button.button-secondary {
    font-size: 20px;
    color: #002129;
    background-color: transparent;
    border: 2px solid;
    padding: 13px 30px;
    border-radius: 25px;
    min-width: 215px;
    box-sizing: border-box;
  }
  .popup-container .popup.active {
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;
  }
  .popup-container .popup.active ~ .mask {
    opacity: 1;
  }
  .popup-container .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.5s;
    pointer-events: none;
  }

  @keyframes leaf {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>