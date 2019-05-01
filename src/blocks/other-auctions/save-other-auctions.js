
import { styles } from './styled-other-auctions';

import backgroundImageCopart from './assets/copart.png';
import backgroundImageCraigslist from './assets/craigslist.png';
import backgroundImageIaai from './assets/iaai.png';
import backgroundImageFlag from './assets/flag.jpg';

import blockGlobalConst from '../../global-block-consts';

export const save = () => {
	const backgroundImage = {
		backgroundImage: 'url(' + blockGlobalConst.srcDist + backgroundImageFlag + ')',
	};
	const copart = blockGlobalConst.srcDist + backgroundImageCopart;
	const craigslist = blockGlobalConst.srcDist + backgroundImageCraigslist;
	const iaai = blockGlobalConst.srcDist + backgroundImageIaai;

	return (
		<div>
			<div className={ styles[ 'other-auctions' ] } style={ backgroundImage }>
				<div className={ styles[ 'other-auctions__wrapper' ] }>
					<div className={ styles[ 'other-auctions__text' ] }>
						Za naszym posrednictwem kupisz i sprowadzisz auto z Copart, IAA, Craigslist oraz innych portali.
					</div>
					<div className={ [ styles[ 'other-auctions__text' ], styles[ '-big' ] ].join( ' ' ) }>
						Znajdź samochód na jednym z portali aukcyjnych, zapisz numer aukcji, <a href="/kontakt">wyślij&nbsp;do&nbsp;nas</a> , a my zajmiemy się resztą.
					</div>
					<div className={ styles[ 'other-auctions__logo-wrapper' ] }>
						<div className={ styles[ 'other-auctions__logo-block' ] }>
							<div className={ styles[ 'other-auctions__logo' ] }>
								<img src={ copart } alt="" />
							</div>
							<div className={ styles[ 'other-auctions__logo-text' ] }>
								Zapisz numer aukcji
							</div>
							<div className={ [ styles[ 'other-auctions__logo-text' ], styles[ '-red' ] ].join( ' ' ) }>
								#LOT
							</div>
							<a href="http://copart.com" target="_blank" rel="noopener noreferrer" className={ styles[ 'other-auctions__logo-button' ] }>
								copart.com
							</a>
						</div>
						<div className={ styles[ 'other-auctions__logo-block' ] }>
							<div className={ styles[ 'other-auctions__logo' ] }>
								<img src={ iaai } alt="" />
							</div>
							<div className={ styles[ 'other-auctions__logo-text' ] }>
								Zapisz numer aukcji
							</div>
							<div className={ [ styles[ 'other-auctions__logo-text' ], styles[ '-red' ] ].join( ' ' ) }>
								STOCK#
							</div>
							<a href="http://iaai.com" target="_blank" rel="noopener noreferrer" className={ styles[ 'other-auctions__logo-button' ] }>
								iaai.com
							</a>
						</div>
						<div className={ styles[ 'other-auctions__logo-block' ] }>
							<div className={ styles[ 'other-auctions__logo' ] }>
								<img src={ craigslist } alt="" />
							</div>
							<div className={ styles[ 'other-auctions__logo-text' ] }>
								Zapisz numer aukcji
							</div>
							<div className={ [ styles[ 'other-auctions__logo-text' ], styles[ '-red' ] ].join( ' ' ) }>
								post id
							</div>
							<a href="http://craigslist.com" target="_blank" rel="noopener noreferrer" className={ styles[ 'other-auctions__logo-button' ] }>
								craigslist.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
