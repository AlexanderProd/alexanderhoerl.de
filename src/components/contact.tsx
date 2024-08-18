/** @jsx jsx */
import { Button, Container, jsx, Link } from "theme-ui";
import ContactMDX from "../sections/contact.mdx";

const Contact = () => (
  <Container my={[7, 7, 7]} px={[3, 3, 3, 3, 0]}>
    <ContactMDX />
    <Button>
      <Link
        href="https://calendly.com/productionsalexander/gettoknow"
        target="_blank"
        sx={{
          color: `white`,
          "&:hover": { color: `white`, textDecoration: `none` },
        }}
      >
        Schedule a call
      </Link>
    </Button>
  </Container>
);

export default Contact;
