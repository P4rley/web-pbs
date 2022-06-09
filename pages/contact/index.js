import styled from "styled-components";
import Contacts from "../../components/Contacts";

const index = () => {
  return (
    <Container>
      <Wrapper>
        <Header>More information?</Header>
        <Contacts />

        <Form>
          <Label>Company Name</Label>
          <Input
            type="text"
            name="companyname"
            placeholder="Company name"
            required
          />
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullname"
            placeholder="Your name.."
            required
          />
          <Label>Phone Number</Label>
          <Input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            required
          />
          <Label>Email</Label>
          <Input type="text" name="email" placeholder="Email" required />
          <Label for="subject">Subject</Label>
          <Textarea name="subject" placeholder="Write something.."></Textarea>

          <Submit type="submit" value="SEND"></Submit>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default index;

const Container = styled.div`
  padding: 0 5%;
  @media screen and (min-width: 425px) {
    padding: 0 10%;
  }
`;
const Wrapper = styled.div``;
const Header = styled.div`
  height: 60vh;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
`;
const Label = styled.label`
  font-size: ${(props) => props.theme.fontmd};
`;
const Input = styled.input`
  margin: 0.5rem 0 2rem;
  border: 1px solid #000;
  outline: none;
  width: 100%;
  height: 20px;
  padding: 1rem;
  resize: vertical;
`;
const Submit = styled.input`
  margin: 0.5rem 0 2rem;
  border: 1px solid #000;
  outline: none;
  width: 100%;
  height: 40px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;
const Textarea = styled.textarea`
  resize: vertical;
  margin: 0.5rem 0 1rem;
  width: 100%;
  height: 100px;
  border: 1px solid #000;
  outline: none;
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
`;
