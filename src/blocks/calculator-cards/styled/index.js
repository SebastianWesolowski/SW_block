import styled, { css } from 'astroturf';

export const styles = css`
.calculator-cards{
    width: 100%;
    background-color: #f4f4f4;
  }

  .calculator-cards__wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1175px;
    margin: 0 auto;
    padding: 110px 30px 75px;
    box-sizing: border-box;
  }

  .calculator-cards__title{
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .calculator-cards__text{
    display: flex;
    flex-direction: column;
    .calculator-cards__paragraph{
      font-size: 18px;
      line-height: normal;
      margin-bottom: 25px;
      &:last-of-type{
        margin-bottom: 0;
      }
      &.-bold{
        font-weight: bold;
      }
      a{
        color: #ff0000;
        text-decoration: underline;
        &:hover{
          color: #ff0000;
        }
      }
    }
  }

  .calculator-cards__block-container{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;
    margin: 0 -30px;
  }

  .calculator-cards__item{
    width: calc(100% / 3);
    max-width: 310px;
    min-height: 304px;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 2px dashed #989ca4;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.1);
    margin: 0 37px 70px;
    &::before{
      content: '';
      width: 20px;
      height: 20px;
      position: absolute;
      top: 18px;
      right: 18px;
      background-color: #989ca4;
      border-radius: 50%;
    }
    &:nth-of-type(3){
      .calculator-cards__arrow{
        bottom: -10px;
        right: 25px;
        transform: rotate(90deg);
      }
    }
    &:nth-of-type(4){
      .calculator-cards__arrow{
        right: 135px;
        bottom: -20px;
        transform: rotate(-70deg) rotateY(180deg);
      }
    }
    &:nth-of-type(5){
      .calculator-cards__arrow{
        transform: rotateY(180deg);
        left: -55px;
        right: auto;
      }
    }
    &:nth-of-type(6){
      .calculator-cards__arrow{
        transform: rotateY(180deg);
        left: -55px;
        right: auto;
      }
    }
  }

  .calculator-cards__item-text-section{
  margin-bottom: 10px;
  }

  .calculator-cards__item-title{
    font-size: 18px;
    font-weight: bold;
    color: #ff0000;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .calculator-cards__item-text{
    font-size: 18px;
    line-height: 26px;
    color: #182a4f;
  }

  .calculator-cards__arrow{
    position: absolute;
    bottom: 30px;
    right: -50px;
  }

  @media(max-width:1168px){
    .calculator-cards__block-container{
      justify-content: center;
      margin-left: 0;
      margin-right: 0;
    }
    .calculator-cards__item{
      width: calc(100% / 2);

      &:nth-of-type(1){
        order: 1;
      }
      &:nth-of-type(2){
        order: 2;
        .calculator-cards__arrow{
          bottom: -20px;
          right: 25px;
          transform: rotate(90deg);
        }
      }
      &:nth-of-type(3){
        order: 4;
        .calculator-cards__arrow{
          transform: rotateY(180deg);
          left: -55px;
          right: auto;
          bottom: 30px;
        }
      }
      &:nth-of-type(4){
        order: 6;
        .calculator-cards__arrow{
          bottom: -20px;
          right: 25px;
          left: auto;
          transform: rotate(90deg);
        }
      }
      &:nth-of-type(5){
        order: 5;
        .calculator-cards__arrow{
          transform: rotateY(0);
          left: auto;
          right: -50px;
        }
      }
      &:nth-of-type(6){
        order: 3;
        .calculator-cards__arrow{
          right: 135px;
          bottom: -20px;
          left: auto;
          transform: rotate(-70deg) rotateY(180deg);
        }
      }
    }

  }
  @media(max-width:827px){
    .calculator-cards__item{
      width: 100%;

      &:nth-of-type(1){
        order: 1;
        .calculator-cards__arrow{
          bottom: -20px;
          right: 25px;
          transform: rotate(90deg);
        }
      }
      &:nth-of-type(2){
        order: 2;
        .calculator-cards__arrow{
          right: 135px;
          bottom: -20px;
          left: auto;
          transform: rotate(-70deg) rotateY(180deg);
        }
      }
      &:nth-of-type(3){
        order: 3;
        .calculator-cards__arrow{
          bottom: -20px;
          right: 25px;
          left: auto;
          transform: rotate(90deg);
        }
      }
      &:nth-of-type(4){
        order: 4;
        .calculator-cards__arrow{
          right: 135px;
          bottom: -20px;
          left: auto;
          transform: rotate(-70deg) rotateY(180deg);
        }
      }
      &:nth-of-type(5){
        order: 5;
        .calculator-cards__arrow{
          bottom: -20px;
          right: 25px;
          left: auto;
          transform: rotate(90deg);
        }
      }
      &:nth-of-type(6){
        order: 6;
        .calculator-cards__arrow{
          right: 135px;
          bottom: -20px;
          left: auto;
          transform: rotate(-70deg) rotateY(180deg);
        }
      }
    }

  }
  @media(max-width:679px){
    .calculator-cards__item{
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
