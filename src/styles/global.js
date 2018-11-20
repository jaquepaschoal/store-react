import { injectGlobal } from "styled-components";

import "font-awesome/css/font-awesome.css";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    font-family: sans-serif;
  }
`;
