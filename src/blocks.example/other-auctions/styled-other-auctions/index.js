
import { css } from 'astroturf';

export const styles = css`
.other-auctions {
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

.other-auctions__wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1170px;
	margin: 0 auto;
	padding: 72px 30px 104px;
	box-sizing: border-box;
}

.other-auctions__text {
	font-size: 18px;
	margin-bottom: 25px;
	color: #fff;

	&.-big {
		font-size: 36px;
		margin-bottom: 89px;
		font-weight: bold;
	}

	a {
		color: #ff0000;
		text-decoration: underline;
	}
}

.other-auctions__logo-wrapper {
	display: flex;
	justify-content: space-around;
}

.other-auctions__logo-block {
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 0 25px 50px;
}

.other-auctions__logo {
	min-height: 65px;
	margin-bottom: 30px;
}

.other-auctions__logo-text {
	color: #fff;
	font-size: 18px;

	&.-red {
		color: #ff0000;
		margin-bottom: 30px;
	}
}

.other-auctions__logo-button {
	width: 190px;
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	text-decoration: none;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	background-color: #ff0000;
	border-radius: 5px;
	margin: 0 auto;

	&:hover {
		color: #fff;
		text-decoration: none;
	}
}

@media(max-width:768px) {
	.other-auctions__logo-wrapper {
		flex-wrap: wrap;
		justify-content: center;
	}

	.other-auctions__text {
		&.-big {
			font-size: 24px;
		}
	}
}

@media(max-width:480px) {
	.other-auctions__logo-wrapper {
		flex-direction: column;
	}

	.other-auctions__logo-block {
		margin: 0 0 50px;
	}
}
`;
