import React from 'react';
import {Segment, Container, List, Image} from 'semantic-ui-react';
const Footer = () => {
    return(
        <Segment
          inverted
          style={{ margin: "5em 0em 0em"}}
          vertical
        >
          <Container textAlign="center">
            <Image src="https://react.semantic-ui.com/logo.png" centered size="mini" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
    )
}


export default Footer;