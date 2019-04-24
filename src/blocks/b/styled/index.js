import styled, { css } from 'astroturf'
import ReactMde from 'react-mde'
import 'react-mde/lib/styles/css/react-mde-all'

import './common.scss';

export const StyledReactMde = styled(ReactMde)`
  background: rgba(0, 0, 0, 0.05);

  :global(.mde-header button svg) {
    width: 150px;
    height: 150px;
    min-height: 150px;
    max-height: 150px;
    max-width: 150px;
    min-width: 150px;
    margin-right: 15px;
    fill: rgba(0, 0, 0, 0.7);
  }

  :global(.md__raw),
  :global(.md__render_pane),
  :global(.md__rendered),
  :global(.mde-header .mde-tabs) {
    display: none;
  }
`

export const visibility = css`
  .hidden {
    display: none;
  }
`
