import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#fff',
  preto: '#111',
  cinza: '#EEEEEE',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.preto};
        color: ${cores.branco};
    }
`
