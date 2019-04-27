import { css } from 'astroturf';

export const abutSite = css`
  .about-site {
    display: flex;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 98px 30px;
  }

  .about-site__left {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    box-sizing: border-box;
    width: 42%;
    padding-top: 12px;
    padding-right: 62px;
    .left__text-block {
      width: 100%;
      max-width: 380px;
      min-height: 180px;
      padding-left: 40px;
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 50px;
    }

    .left__circle {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      color: #fff;
      left: 0;
      &.-car {
        background-color: #182a4f;
      }
      &.-bicycle {
        background-color: #ff0000;
      }
      &.-vehicle {
        background-color: #0084ff;
      }
    }
  }
  .left__rectangle {
    width: 100%;
    max-width: 340px;
    height: 100%;
    box-sizing: border-box;
    color: #182a4f;
    padding: 38px 20px 30px 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.15);

    .rectangle__title {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 18px;
      text-transform: uppercase;
      font-weight: bold;
    }

    .rectangle__text {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .about-site__right {
    display: flex;
    flex-direction: column;
    width: 58%;
    .right__title {
      font-size: 36px;
      font-weight: bold;
      line-height: normal;
      margin-bottom: 30px;
    }
    .right__text {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 50px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    .about-site {
      flex-direction: column;
    }

    .about-site__left {
      flex-direction: row;
      align-items: stretch;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      padding: 0;
    }

    .left__text-block {
      margin-left: 25px;
      margin-right: 25px;
    }

    .about-site__right {
      width: 100%;
      .right__title {
        font-size: 26px;
      }
    }
  }

  @media (max-width: 480px) {
    .about-site__left {
      .left__text-block {
        width: 100%;
        padding-top: 40px;
        padding-left: 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-left: 0;
        margin-right: 0;

        .left__circle {
          left: auto;
          top: 0;
        }

        .left__rectangle {
          padding: 38px 20px 30px 20px;
        }
      }
    }
  }
`;
