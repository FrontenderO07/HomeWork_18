import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const goToAuthPage = () => {
    navigate("/");
  };
  return (
    <>
      <StyledHeader>
        <h1>TODO LIST</h1>

        <Button onClick={goToAuthPage}>Logout</Button>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: teal;
  color: white;
  h1 {
    margin-left: 30px;
  }
`;
const Button = styled.button`
  font-size: 1.25rem;
  background-color: #abda2a;

  padding: 0.5rem 1.5rem;
  border: none;
  margin-right: 20px;
  color: #ffffff;
  font-weight: 600;
  :hover {
    background-color: #23c8c8;
  }
  :active {
    border-color: #076767;
  }
`;
