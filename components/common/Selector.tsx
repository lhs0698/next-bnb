import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    padding: 0 11px;
    outline: none;
    -webkit-appearance: none;
    background-image: url("/public/static/svg/common/selector/selector_down_arrow.svg");
    background-position: right 11px center;
    background-repeat: no-repeat; // 배경 이미지 반복 여부
    font-size: 16px;

    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  // disabledOptions?: string[];
  value?: string;
}

const Selector: React.FC<IProps> = ({
  options = [],
  // disabledOptions = [],
  ...props
}) => {
  // console.log(options)
  // console.log(disabledOptions)
  return (
    <Container>
      <select {...props}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

//* disabledOptions를 넣으면 잘 안되서 일단 제외 

export default Selector;
