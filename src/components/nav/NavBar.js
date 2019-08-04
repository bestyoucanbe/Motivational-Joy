//TODO:  Delete this later
// import React, { Component } from "react"
// import { Link } from "react-router-dom"
// import { Menu } from 'semantic-ui-react'
// // import "bootstrap/dist/css/bootstrap.min.css"


// export default class NavBar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
//                 <ul className="nav nav-pills">
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/My Favorites">My Favorites</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/My Items">My Items</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/All Items">All Items</Link>
//                     </li>
//                 </ul>
//             </nav>
//         )
//     }
// }

//TODO: Delete this later
// import React, { Component } from 'react'


// export default class MenuExampleBasic extends Component {
//   state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu>
//         <Menu.Item
//           name='editorials'
//           active={activeItem === 'editorials'}
//           onClick={this.handleItemClick}
//         >
//           Editorials
//         </Menu.Item>

//         <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
//           Reviews
//         </Menu.Item>

//         <Menu.Item
//           name='upcomingEvents'
//           active={activeItem === 'upcomingEvents'}
//           onClick={this.handleItemClick}
//         >
//           Upcoming Events
//         </Menu.Item>
//       </Menu>
//     )
//   }
// }

// import React, { Component } from "react";
// import { Button, Dropdown, Menu, Icon } from "semantic-ui-react";
// import { Link, withRouter} from "react-router-dom"


// class NavBar extends Component {
//   // state = { activeItem: "",
//   //           redirect: false};
//   //--Above not in use yet--//
//  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

// //  handleLogOut = () => {
// //    sessionStorage.clear()
// //    this.props.history.push("/")
// //    window.location.reload();
// //  }

// render() {
//     return (
//       <Menu borderless size="huge">
//         <Menu.Item header as="h2">
//           Motivation Joy
//         </Menu.Item>
//         <Dropdown item icon="sidebar">
//           <Dropdown.Menu>
//             <Dropdown.Item>
//               <Link to="/My_Favorites">My Favorites</Link>
//             </Dropdown.Item>
//             <Dropdown.Item>
//               <Link to="/My_Items">My Items</Link>
//             </Dropdown.Item>
//             <Dropdown.Item>
//               <Link to="/All_Items">All Items</Link>
//             </Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Menu>
//     );
//   }
// }

// export default withRouter(NavBar)

import React from 'react';
import { Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  state = {
    isOpen: false
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Motivation Joy</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  What would you like to do?
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link to="/My_Favorites">My Favorites</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link to="/My_Photos">My Photos</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/My_Quotes">My Quotes</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link to="/logout">Logout</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}