import { css } from 'astroturf';
export const faq = css`

.faq {
  width: 100%;
  position: relative;
  z-index: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.faq__wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 100px 30px 270px;
  box-sizing: border-box;
}

.faq__img {
  margin-right: 24px;
}

.faq__title {
  font-size: 36px;
  line-height: normal;
  color: #FFFFFF;
  font-weight: bold;
  margin-bottom: 50px;
  display: flex;
}

.faq__item {
  margin-bottom: 30px;
}

.faq__question {
  font-size: 24px;
  color: #82C3FF;
  cursor: pointer;
  display: flex;
  .faq__question-arrow {
    transition: transform 0.5s;
    margin-right: 20px;
    &.-rotate {
      transform: rotateX(180deg);
    }
  }
}

.faq__answer {
  font-size: 18px;
  color: #FFFFFF;
  display: none;
}

@media (max-width: 480px) {
  .faq__title {
    font-size: 25px;
  }
  .faq__img {
    margin-right: 14px;
  }
  .faq__question {
    .faq__question-arrow {
      margin-right: 10px;
    }
  }
}

`;
