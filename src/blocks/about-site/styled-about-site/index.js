import { css } from 'astroturf';

export const abutSite = css`

	.aboutSite {
		display: flex;
		width: 100%;
		max-width: 1170px;
		margin: 0 auto;
		padding: 98px 30px;
		flex-direction: column;

		@media (min-width: 1024px) {
			flex-direction: row;
		}
	}

	.leftContainer {
		flex-direction: row;
		align-items: stretch;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		padding: 0;

		@media (min-width: 1024px) {
			display: flex;
			align-items: flex-end;
			flex-direction: column;
			box-sizing: border-box;
			width: 42%;
			padding-top: 12px;
			padding-right: 62px;
		}
	}

	.rightContainer {
		width: 100%;

		@media (min-width: 1024px) {
			display: flex;
			flex-direction: column;
			width: 58%;
		}
	}

	.title {
		font-size: 26px;
		font-weight: bold;
		line-height: normal;
		margin-bottom: 30px;

		@media (min-width: 1024px) {
			font-size: 36px;
		}
	}

	.right__text {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 50px;
		&:last-of-type {
			margin-bottom: 0;
		}
	}
`;

export const card = css`
	.darkBlue {
		background-color: #182A4F;
	}
	.red {
		background-color: #FF0000;
	}
	.blue {
		background-color: #0084FF;
	}

	.textBlock {
		padding-top: 40px;
		width: 100%;
		padding-left: 0;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin-left: 0;
		margin-right: 0;
		min-height: 180px;
		margin-bottom: 50px;
		flex-direction: row;

		@media (min-width: 480px) {
			padding-left: 40px;
			align-items: center;
		}
		@media (min-width: 1024px) {
			flex-direction: column;
			position: relative;
			display: -webkit-box;
			display: -ms-flexbox;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			paddin-top: 0;
		}
	}

	.circle {
		width: 75px;
		height: 75px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		color: #FFFFFF;
		left: auto;
		top: 0;

		@media (min-width: 480px) {
			left: 0;
			top: auto;
		}
	}

	.card {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		color: #182A4F;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.15);
		padding: 38px 20px 30px 20px;

		@media (min-width: 480px) {
			padding: 38px 20px 30px 55px;
		}
	}

	.title {
		font-size: 24px;
		line-height: 24px;
		margin-bottom: 18px;
		text-transform: uppercase;
		font-weight: bold;
	}

	.text {
		font-size: 14px;
		line-height: 18px;
	}
`;
