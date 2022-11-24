import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";


// Container는 div 스타일드 컴포넌트. 기본적으로 div 태그의 타입을 가지고 있다. 저희가 넣은 iconExist라는 속성은 div태그에 존재하지 않아서 타입에러가 발생한다.

const Container = styled.div<{ iconExist: boolean }>`
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px" : "0 11px")};
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    ::placeholder {
      color: ${palette.gray_76};
    }
    & :focus {
      border-color: ${palette.dark_cyan} !important;
    }
  }

  .input-icon-wrapper {
    position: absolute;
    top: 0;
    right: 11px;
    height: 46px;
    display: flex;
    align-items: center;
  }
`;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

// React.InputHTMLAttributes<HTMLInputElement>는 input 태그가 가지는 속성들에 대한 타입. extendsfmf 사용하여 IProps는 inpu가 가지는 속성을 확장하여 사용
// icon?: JSX.Element는 타입이 JSX 엘리먼트인 icon 값을 받지 않을 수도 undefined일 수도 있다는 것을 의미한다.
// icon? JSX.Element == icon? JSX.Element || undefinded;


const Input: React.FC<IProps> = ({ icon, ...props }) => {
    return (
        <Container iconExist={!!icon}>
            <input {...props} />
            <div className="input-icon-wrapper">{icon}</div>
        </Container>
    )
}

export default Input;