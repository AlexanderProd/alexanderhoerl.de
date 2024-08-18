/** @jsx jsx */
import { Container, jsx } from "theme-ui";
import ContactMDX from "../sections/contact.mdx";

const Contact = () => (
  <Container my={[7, 7, 7]} px={[3, 3, 3, 3, 0]}>
    <ContactMDX />
  </Container>
);

export default Contact;
