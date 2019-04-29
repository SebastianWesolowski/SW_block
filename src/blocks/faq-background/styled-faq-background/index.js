import { css } from 'astroturf';
export const faqBackground = css`

.faq {
  width: 100%;
  position: relative;
  z-index: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.wrapper {
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

.img {
  margin-right: 24px;
}

.title {
  font-size: 36px;
  line-height: normal;
  color: #FFFFFF;
  font-weight: bold;
  margin-bottom: 50px;
  display: flex;
}

@media (max-width: 480px) {
  .title {
    font-size: 25px;
  }
  .img {
    margin-right: 14px;
  }

}

`;
