import { css } from 'astroturf';
export const faqQuestion = css`

:global(.-rotate) {
	transform: rotateX(180deg);
}

.question {
  font-size: 24px;
  color: #82C3FF;
  cursor: pointer;
  display: flex;
}

.arrowIcon {
	transition: transform 0.5s;
	margin-right: 20px;
	&.-rotate {
		transform: rotateX(180deg);
	}
}

.item {
  margin-bottom: 30px;
}

@media (max-width: 480px) {
	.arrowIcon {
		margin-right: 10px;
	}
}
`;

export const Answer = css`
	.answer{
		color: #FFFFFF;
		font-size: 18px;
	}
	.save{
		display: none;
	}
	.edit{
		display: inline;
	}

`;
