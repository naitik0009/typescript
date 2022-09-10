import React from "react";
import {Navbar,NavItem,Badge,Nav,Dropdown,Container,FormControl} from "react-bootstrap";
import { RiShoppingCart2Fill } from "react-icons/ri";
const Header:React.FC = () =>{
  return (
<Navbar bg="dark" variant="dark" style={{height:80}}>
<Container>
    <Navbar.Brand>
        <a href="/">Shopping Cart</a>
    </Navbar.Brand>
    <Navbar.Text className="search">
<FormControl    className="m-auto" placeholder="search a product" style={{width:500}}>

</FormControl>
    </Navbar.Text>
    <Nav>
<Dropdown>
<Dropdown.Toggle >
<RiShoppingCart2Fill color="white" fontSize="25px" />
    <Badge>
        {10}
    </Badge>
</Dropdown.Toggle>
<Dropdown.Menu style={{minWidth:370}}>
    <span style={{padding:10}}>Cart is empty</span>
</Dropdown.Menu>
</Dropdown>
    </Nav>
</Container>
</Navbar>

  )
}
export default Header;