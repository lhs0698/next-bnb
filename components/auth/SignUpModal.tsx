import React, { useState } from "react";
import styled from "styled-components";

import CloseXIcon from "../../public/static/svg/modal/modal_close_x_icon.svg";
import MailIcon from "../../public/static/svg/auth/mail.svg";
import PersonIcon from "../../public/static/svg/auth/person.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/opened_eye.svg";
import CloseEyeIcon from "../../public/static/svg/auth/closed_eye.svg";
import Input from "../common/Input";
import palette from "../../styles/palette";

const Container = styled.form`
  width: 568px;
  /* height: 614px; */
  padding: 32px;
  background-color: white;
  z-index: 11;
  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }
  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
    /* input {
      position: relative;
      width: 100%;
      height: 46px;
      padding: 0 44px 0 11px;
      border: 1px solid ${palette.gray_eb};
      border-radius: 4px;
      font-size: 16px;
      outline: none;
      ::placeholder {
        color: ${palette.gray_76};
      }
    }
    svg {
      position: absolute;
      right: 11px;
      top: 16px;
    } */
    // Input 공통 컴포넌트 사용으로 인해 input-wrapper안의 input 스타일은 제거
  }
  .sign-up-password-input-wrapper {
    svg {
        cursor: pointer;
    }
  }
`;

// z-index, postion 보기

const SignUpModal: React.FC = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  // useState를 사용해서 input 컴포넌트가 값을 받고 변경할 수 있도록 한다.

  //* 이메일 주소 변경 시
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  //* 이름 변경 시
  const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };
  //* 성 변경 시
  const onChangeFisrtname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value);
  };
  //* 비밀번호 변경 시
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  //* 비밀번호 숨김 토글하기
  //* Q&A
  const [hidePassword, setHidePassword] = useState(true);
  
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };


  //* input 태그에 넣은 속성 중 특별한 값 = name = "email", type = "password"
  //* 앞의 값들을 사용하면 브라우저에서 이름과 비밀번호를 저장할 수 있고, 다음에 불러 올 수 있도록 제공한다. type = "password"를 사용하면 값이 *로 대체되어 나온다.

  return (
    <Container>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <Input
          placeholder="이메일 주소"
          type="email"
          icon={<MailIcon />}
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="이름"
          icon={<PersonIcon />}
          value={lastname}
          onChange={onChangeLastname}
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="성"
          icon={<PersonIcon />}
          value={firstname}
          onChange={onChangeFisrtname}
        />
      </div>
      <div className="input-wrapper sign-up-password-input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          type={hidePassword ? "password" : "text"} // ?
          icon={
            hidePassword ? (
                <CloseEyeIcon onClick={toggleHidePassword}/>
            ) : (
                <OpenedEyeIcon onClick={toggleHidePassword}/>
            )
          }
          //* 비밀번호 보이게 하기
          value={password}
          onChange={onChangePassword}
        />
      </div>
    </Container>
  );
};

export default SignUpModal;
