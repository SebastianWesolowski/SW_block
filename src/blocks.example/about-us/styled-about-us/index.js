import { css } from 'astroturf';

export const styles = css`
.about-us {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 90px 30px 67px;
}

.about-us__row{
  display: flex;
  &.-reverse{
    flex-direction: row-reverse;
    .about-us__text{
      padding-left: 80px;
      padding-right: 0;
    }
  }
  &:first-of-type{
    .about-us__text{
      padding-top: 0;
    }
  }
}

.about-us__text{
  width: 50%;
  font-size: 18px;
  color: #182a4f;
  line-height: normal;
  padding-right: 80px;
  padding-top: 55px;
  padding-bottom: 50px;

  a{
    color: #ff0000;
    text-decoration: underline;
    &:hover{
      color: #ff0000;
    }
  }
}

.about-us__image{
  width: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 37%;
  min-height: 406px;
}

@media(max-width:1023px){
  .about-us__row{
    flex-direction: column;
    align-items: center;
    &.-reverse{
      flex-direction: column;
    }
  }
  .about-us__text{
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .about-us__text{
    width: 100%;
    max-width: 585px;
  }

  .about-us__image{
    width: 100%;
    max-width: 585px;
  }
}

@media(max-width:480px){

  .about-us__image{
    min-height: 265px;
  }
}
`;

export const buttonStyle = css`
.container{
	width: 100%;
	height: 30px;
	display: flex;
	justify-content: center;
	margin-top: 30px;
	.button{
		font-weight:20px;
		cursor: pointer;
	}
}
`;
