import React,{useState} from 'react';
import {Image, Menu, Visibility, Container, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {fixedMenuStyle, menuStyle} from '../css/app/app';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/login/actionLogin';
const Header = (props) => {

    const [menuFixed,setMenuFixed] = useState(false);
    const stickTopMenu = () => setMenuFixed(true);
    const unStickTopMenu = () => setMenuFixed(false);
    return(
        <Visibility
          onBottomPassed={stickTopMenu}
          onBottomVisible={unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"
                />
              </Menu.Item>
              <Menu.Item header>Movies App</Menu.Item>
              <Menu.Item as={Link} to='/'>Home Page</Menu.Item>
              <Menu.Item as={Link} to='/movies'>Movies</Menu.Item>
              <Menu.Item as={Link} to='/movies/new'>Add New</Menu.Item>
              <Menu.Item as={Link} to='/login'>Login</Menu.Item>
              <Menu.Item><Button onClick={props.logout}>Logout</Button></Menu.Item>
            </Container>
          </Menu>
        </Visibility>
    )
}

const mapDispatchToProps = {
  logout:logout
}

export default connect(null,mapDispatchToProps)(Header);