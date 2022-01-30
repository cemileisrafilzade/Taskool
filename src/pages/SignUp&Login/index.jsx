import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Logo.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInfos = new FormData();
    if (registired) {
      console.log("username", e.target.email.value);
      console.log("password", e.target.password.value);

      formInfos.append("username", e.target.email.value);
      formInfos.append("password", e.target.password.value);
      axios
        .post("http://3.68.156.86:8000/api/v1/login/", formInfos)
        .then((res) => {
          console.log(res);
        });
    } else {
      console.log(
        "is_student",
        e.target.isStudent.value === "student" ? true : false
      );
      console.log("occupation", "");
      console.log("first_name", e.target.firstName.value);
      console.log("last_name", e.target.lastName.value);
      console.log("email", e.target.email.value);
      console.log("password", e.target.password.value);

      formInfos.append("first_name", e.target.firstName.value);
      formInfos.append("last_name", e.target.lastName.value);
      formInfos.append("email", e.target.email.value);
      formInfos.append("password", e.target.password.value);
      formInfos.append("occupation", "");
      axios.post("http://3.68.156.86:8000/api/v1/register/");
    }
    navigate("/profilePage");
  };

  // States for registration
  // const [name, setName] = useState("");
  // const [surName, setSurName] = useState("");
  // const [email, setEmail] = useState("");
  // const [profile, setProfile] = useState("");
  // const [phone, setPhone] = useState("");

  const [registired, setRegistired] = useState(false);

  const Login = (e) => {
    e.preventDefault();
    setRegistired(true);
  };
  const Register = (e) => {
    e.preventDefault();
    setRegistired(false);
  };
  // Handling the name change
  // const handleName = (e) => {
  //   setName(e.target.value);
  // };

  //password visibility
  const [isVisible, setVisible] = useState(false);
  const toggleVisiblilty = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <Container>
      <Header>
        <img className="logoImg" src={Logo} alt="" />

        {!registired ? (
          <p>
            Artıq hesabınız var? &nbsp;
            <span>
              <a onClick={Login} href="">
                {" "}
                Daxil Olun
              </a>
            </span>
          </p>
        ) : (
          <p>
            Hesabınız yoxdur?
            <span>
              <a onClick={Register} href="">
                {" "}
                Qeydiyyatdan keçin
              </a>
            </span>
          </p>
        )}
      </Header>

      <h2>Xoş gəlmişsiniz! </h2>

      {!registired ? (
        <p> Taskool ilə yeni dünyaya qapı açın</p>
      ) : (
        <p>Sizi yenidən görməyə şadıq</p>
      )}
      <form onSubmit={(e) => handleSubmit(e)} action="">
        {!registired ? (
          <>
            <InputContainer>
              <select id="isStudent" required>
                <option value="">Profili Seç</option>
                <option value="student">Tələbə</option>
                <option value="teacher">Müəllim</option>
              </select>
            </InputContainer>

            <InputContainer>
              <input required type="text" id="firstName" placeholder="Ad" />
            </InputContainer>
            <InputContainer>
              <input required type="text" id="lastName" placeholder="Soyad" />
            </InputContainer>
          </>
        ) : (
          ``
        )}
        <InputContainer>
          <input required type="email" id="email" placeholder="E-mail ünvanı" />
        </InputContainer>
        {!registired ? (
          <>
            <InputContainer>
              <input
                required
                autoComplete="off"
                id="number"
                type="tel"
                placeholder="Əlaqə nömrəsi"
              />
            </InputContainer>
          </>
        ) : (
          ``
        )}
        <InputContainer className="passwordField">
          <input
            required
            id="password"
            type={isVisible ? "text" : "password"}
            placeholder="Şifrə"
          />
          <button onClick={toggleVisiblilty}>
            {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </InputContainer>
        <SubmitBtn type="submit">
          {!registired ? `Qeydiyyat` : `Daxil ol`}
        </SubmitBtn>
      </form>
      {!registired ? (
        <>
          <p>
            Qeydiyyatdan keçməklə{" "}
            <span>
              <a> Qaydalar və Məxfilik şərtləri</a>
            </span>
            ni qəbul edirəm.
          </p>
        </>
      ) : (
        ``
      )}
      {registired ? (
        <span style={{ marginLeft: "20%" }}>
          <a>Şifrəmi unutdum</a>
        </span>
      ) : (
        ``
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  text-align: center;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #463401;
  }
  form {
    margin: 15px 0;
  }
  span > a {
    color: #2f80ed;
  }
  .passwordField {
    display: flex;
    align-items: center;
    button {
      background-color: transparent;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: #3f3e3e;
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;
const Header = styled.div`
  padding: 20px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 16px;
  }
  span {
    color: #2f80ed;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 13px;
    }
    .logoImg {
      width: 95px;
    }
  }
`;
const InputContainer = styled.div`
  background-color: #f2f2f2;
  width: 30%;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 7px;
  box-sizing: border-box;
  input,
  select,
  option {
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 15px;
  }
  @media only screen and (max-width: 768px) {
    width: 92%;
  }
`;
const SubmitBtn = styled.button`
  background-color: #ffe01b;
  width: 30%;
  margin: 0 auto;
  margin-bottom: 16px;
  margin-top: 35px;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 15px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #463401;
  @media only screen and (max-width: 768px) {
    width: 92%;
  }
`;
