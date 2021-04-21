import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }
  *, button, input {
    border: 0;
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --primary: #4076FA;
    --success: #00D233;
    --error: #F15025;
    --alert: #E8C547;
    --dark: #001634;
    --extra-dark: #091223;
    --grey: #a7a7a7;
    --light: #f3f3f3;
  }
`;
