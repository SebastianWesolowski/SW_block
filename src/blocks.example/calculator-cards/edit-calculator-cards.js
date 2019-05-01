const { Component } = wp.element;
import { styles } from './styled-calculator-cards';

class Edit extends Component {
	render() {
		const svgArrow = <svg
			xmlns="http://www.w3.org/2000/svg"
			xlink="http://www.w3.org/1999/xlink"
			width="77px" height="28px">
			<path fillRule="evenodd" fill="rgb(152, 156, 164)"
				d="M65.775,0.958 C65.824,0.870 65.824,0.870 65.775,0.958 C65.824,0.870 65.824,0.870 65.775,0.958 C65.873,0.782 66.058,0.655 66.106,0.567 C65.970,0.607 65.873,0.782 65.775,0.958 C65.890,2.399 67.162,4.023 67.957,5.268 C68.791,6.650 69.713,8.080 70.596,9.374 C72.488,12.146 74.604,14.928 76.729,17.485 C76.817,17.534 74.371,22.145 74.147,22.136 C67.634,22.536 61.033,22.888 54.519,23.289 C54.743,23.298 55.689,21.183 55.835,20.920 C55.981,20.657 56.878,18.630 57.150,18.551 C59.755,18.391 62.312,18.318 64.830,18.110 C62.197,16.877 59.555,15.869 56.814,15.036 C47.447,12.130 37.260,11.525 27.557,13.139 C17.941,14.801 6.349,18.580 0.768,27.189 C1.440,26.185 2.385,24.070 3.252,22.715 C6.525,17.645 11.729,14.451 17.205,12.212 C33.360,5.571 52.101,6.221 67.849,13.702 C67.092,12.593 66.297,11.348 65.589,10.152 C64.755,8.770 63.046,6.903 63.476,5.305 C63.427,5.393 63.378,5.481 63.291,5.432 C63.388,5.257 63.437,5.169 63.534,4.993 C63.534,4.993 63.534,4.993 63.583,4.906 C63.993,3.756 64.831,2.040 65.775,0.958 ZM65.337,1.747 C65.434,1.572 65.581,1.308 65.678,1.133 C65.493,1.260 65.347,1.523 65.337,1.747 Z" />
		</svg>;

		return (
			<div>
				<div className={ styles[ 'calculator-cards' ] }>
					<div className={ styles[ 'calculator-cards__wrapper' ] }>
						<div className={ styles[ 'calculator-cards__title' ] }>
                      Struktura kosztów
						</div>
						<div className={ styles[ 'calculator-cards__block-container' ] }>
							<div className={ styles[ 'calculator-cards__item' ] }>
								<div className={ styles[ 'calculator-cards__item-title' ] }>
                          podatek vat
								</div>
								<div className={ styles[ 'calculator-cards__item-text' ] }>
                          19% w Niemczech<br />
                          23% w Polsce
								</div>
								<div className={ styles[ 'calculator-cards__arrow' ] }>
									{ svgArrow }
								</div>
							</div>
							<div className={ styles[ 'calculator-cards__item' ] }>
								<div className={ styles[ 'calculator-cards__item-title' ] }>
                          akcyza
								</div>
								<div className={ styles[ 'calculator-cards__item-text' ] }>
                          Dotyczy tylko aut: <br />
                          3,1% pojemności do 2.0L <br />
                          18,6% pojemności powyżej 2.0L
								</div>
								<div className={ styles[ 'calculator-cards__arrow' ] }>
									{ svgArrow }
								</div>
							</div>
							<div className={ styles[ 'calculator-cards__item' ] }>
								<div className={ styles[ 'calculator-cards__item-title' ] }>
                          cło
								</div>
								<div className={ styles[ 'calculator-cards__item-text' ] }>
                          samochód osobowy 10%<br />
                          jacht 1.7%<br />
                          łódź od 1.7% do 2.7%<br />
                          skuter wodny 1.7%<br />
                          motocykl 6%<br />
                          quad 10%
								</div>
								<div className={ styles[ 'calculator-cards__arrow' ] }>
									{ svgArrow }
								</div>
							</div>
							<div className={ styles[ 'calculator-cards__item' ] }>
								<div className={ styles[ 'calculator-cards__item-title' ] }>
                          opłata za usługę
								</div>
								<div className={ styles[ 'calculator-cards__item-text' ] }>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
										<b>1&nbsp;500 zł</b> – motocykl, skutery wodne/śnieżne lub quad do 10&nbsp;000$
									</div>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
                          od <b>2&nbsp;500 zł</b> – samochód osobowy
									</div>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
                          Łodzie, maszyny, kampery i inne pojazdy – <b>cena do uzgodnienia</b>
									</div>
								</div>
								<div className={ styles[ 'calculator-cards__arrow' ] }>
									{ svgArrow }
								</div>
							</div>
							<div className={ styles[ 'calculator-cards__item' ] }>
								<div className={ styles[ 'calculator-cards__item-title' ] }>
                        transport do europy
								</div>
								<div className={ styles[ 'calculator-cards__item-text' ] }>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
                            Samochód osobowy: <br />
                            do Bremenhaven <b>600$</b> <br />
                            do Gdyni <b>700$</b>
									</div>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
                            Motocykl bądź quada: <br />
                            do Bremenhaven <b>400$</b> <br />
                            do Gdyni <b>500$</b>
									</div>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
                            Transport lądowy (USA) z placu aukcyjnego do portu od <b>300$</b>
									</div>
								</div>
								<div className={ styles[ 'calculator-cards__arrow' ] }>
									{ svgArrow }
								</div>
							</div>
							<div className={ styles[ 'calculator-cards__item' ] }>
								<div className={ styles[ 'calculator-cards__item-title' ] }>
                        koszty aukcyjne
								</div>
								<div className={ styles[ 'calculator-cards__item-text' ] }>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
                            wartość auta do <b>$2&nbsp;500</b> – opłata do <b>$500</b>
									</div>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
                            wartość auta od $2&nbsp;501 do $19&nbsp;999 – opłata do <b>$800</b>
									</div>
									<div className={ styles[ 'calculator-cards__item-text-section' ] }>
                            wartość auta od $20&nbsp;000 do $50&nbsp;000 – opłata do <b>$1 100</b>
									</div>
								</div>
								<div className={ styles[ 'calculator-cards__arrow' ] }>
									{ svgArrow }
								</div>
							</div>
						</div>
						<div className={ styles[ 'calculator-cards__text' ] }>
							<div className={ [ styles[ 'calculator-cards__paragraph' ], styles[ '-bold' ] ].join( ' ' ) }>
											Uwaga: Nie licytujemy samochodów bez otrzymania kaucji.<br />
											Zanim rozpoczniemy licytację, prosimy o <a href="/kontakt">kontakt</a> z naszą firmą w celu omówienia szczegółów i zawarcia umowy.
							</div>
							<div className={ [ styles[ 'calculator-cards__paragraph' ], styles[ '-bold' ] ].join( ' ' ) }>
											Kaucja stanowi zabezpieczenie finansowe transakcji. W przypadku braku dokonania wpłaty przez Klienta za zakupiony samochód bądź inny pojazd, dom aukcyjny obciąża finansowo naszą firmę karą w wysokości 10 % wylicytowanej kwoty.
							</div>
							<div className={ [ styles[ 'calculator-cards__paragraph' ], styles[ '-bold' ] ].join( ' ' ) }>
											W przypadku przegranej licytacji, w której nie doszło do zakupu, kaucja jest zwracana w całości w ciągu 2 dni roboczych na konto Klienta.
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Edit;
