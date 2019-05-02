import { css } from 'astroturf';
export const contentBlock = css`
.row {
  display: flex;

  @media (max-width: 1024px) {
    align-items: center;
	}

	&[data-direction$="right"]{
		flex-direction: row-reverse;
	}
	&[data-direction$="left"]{
		flex-direction: row;
	}
}

.text {
  width: 50%;
  font-size: 18px;
  color: #182a4f;
  line-height: normal;
  padding-right: 80px;

  @media (max-width: 1024px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 100%;
    max-width: 585px;
  }

  a {
    color: #f00;
    text-decoration: underline;

    &:hover {
      color: #f00;
    }
  }
}

.image {
  width: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 406px;

  @media (max-width: 480px) {
    min-height: 265px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 585px;
  }
}
`;
