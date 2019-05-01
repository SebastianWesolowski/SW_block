import { css } from 'astroturf';

export const styles = css`
.bicycle-import{
    width: 100%;
    background-color: #f4f4f4;
  }

  .bicycle-import__wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1175px;
    margin: 0 auto;
    padding: 110px 30px 104px;
    box-sizing: border-box;
  }

  .bicycle-import__title{
    font-size: 36px;
    font-weight: bold;
    color: #182a4f;
    margin-bottom: 50px;
  }

  .bicycle-import__container{
    display: flex;
    margin: 0 -15px;
  }

  .bicycle-block{
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    max-width: 352px;
    margin: 0 15px;
  }


  .bicycle-block__title{
    font-size: 18px;
    color: #ff0000;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 35px;
  }

  .bicycle-block__img{
    width: 100%;
    height: 105px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    &.-double{
      flex-direction: column;
      align-items: center;
    }
    .bicycle-block__arrow{
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      right: -40px;
    }
  }

  .bicycle-block__text{
    font-size: 18px;
    color: #182a4f;
    line-height: normal;
    margin-bottom: 45px;
    min-height: 90px;
    &.-column{
      display: flex;
      flex-direction: column;
    }
    a{
      color: #ff0000;
      text-decoration: underline;
      &:hover{
        color: #ff0000;
      }
    }
    div{
      margin-bottom: 8px;
      &:last-of-type{
        margin-bottom: 0;
      }
    }
    .bicycle-block__pin{
      margin-right: 10px;
    }
  }

  .color-red{
    color: #ff0000;
  }

  .bicycle-block__box{
    min-height: 350px;
    padding: 30px;
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
  }

  .bicycle-block__box-text{
    font-size: 18px;
    color: #182a4f;
    line-height: normal;
    &.-margin-bottom{
      margin-bottom: 25px;
    }
    a{
      color: #ff0000;
      text-decoration: underline;
      &:hover{
        color: #ff0000;
      }
    }
    span{
      text-decoration: underline;
    }
  }

  .bicycle-block__box-row{
    display: flex;
    margin-bottom: 30px;
    &:last-of-type{
      margin-bottom: 0;
    }
  }

  .bicycle-block__box-column{
    margin-right: 10px;
    div{
      img,
      svg{
        vertical-align: unset;
      }
    }
  }

  @media(max-width:1024px){
    .bicycle-import__container{
      flex-wrap: wrap;
      justify-content: center;
    }
    .bicycle-block{
      width: calc(100% / 2);
      margin-bottom: 50px;
    }
    .bicycle-block__arrow{
      &.-down-first{
        bottom: -580px;
        transform: rotate(120deg);
        right: auto;
      }
    }
  }

  @media(max-width:790px){
    .bicycle-block{
      width: 100%;
    }
    .bicycle-block__arrow{
      &.-down-first{
        transform: rotate(90deg);
        right: 0;
      }
      &.-down-second{
        bottom: -580px;
        transform: rotate(90deg);
        right: 0;
      }
    }
  }
  @media(max-width:480px){
    .bicycle-import__title{
      font-size: 28px;
    }
    .bicycle-import__container{
      margin: 0;
    }
    .bicycle-block{
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
