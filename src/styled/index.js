/**
 * Block dependencies
 *
 * Text Domain: sw-block
 */

import {
	css,
} from 'astroturf';

export const styles = css `
  .pantone {
    padding: 1rem;
    width: 300px;
    max-width: 100%;
    background: rgb(219, 112, 147);
    color: rgb(255, 255, 255);
  }
`;

export const visibility = css `
  .hidden {
    display: none;
  }
`;
