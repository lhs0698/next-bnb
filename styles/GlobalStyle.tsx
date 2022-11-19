import {} from "next/app";
import reset from "styled-reset"
import { createGlobalStyle, css} from "styled-components";
import palette from "../styles/palette";

const globalStyle = css`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        color: ${palette.black};
        font-family: Noto Sans, Noto Sans KR;
    }
`;

const Globalstyle = createGlobalStyle`
    ${globalStyle};
`

export default Globalstyle;
