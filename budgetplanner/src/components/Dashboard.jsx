import React, { Component } from 'react';
import '../css/output.css'
import expenses from './categories.json'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Accordion, AccordionItem } from 'react-sanfona';


class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
         expenses : []
          
        }
      }
 componentDidMount = ()=> {
     console.log(expenses)
 }

render() {

    return (
          <div className="body">
          
          <div className="card">
          
          
          <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Rent/Mortgage
            </NavText>
        </NavItem>

        <NavItem eventKey="grocery">
            <NavIcon>
                <i className="fas fa-shopping-basket" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Grocery
            </NavText>
        </NavItem>

        <NavItem eventKey="utility">
            <NavIcon>
                <i className="fas fa-file-invoice-dollar" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Utility Bills
            </NavText>
        </NavItem>

        <NavItem eventKey="auto">
            <NavIcon>
                <i className="fas fa-car" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Car Expenses
            </NavText>
        </NavItem>

        <NavItem eventKey="health">
            <NavIcon>
                <i className="fas fa-briefcase-medical" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Health
            </NavText>
        </NavItem>

        <NavItem eventKey="education">
            <NavIcon>
                <i className="fas fa-graduation-cap" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Education/Training
            </NavText>
        </NavItem>

        <NavItem eventKey="personalcare">
            <NavIcon>
                <i className="fas fa-user" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Personal Care
            </NavText>
        </NavItem>

        <NavItem eventKey="entertainment">
            <NavIcon>
                <i className="fas fa-football-ball" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Entertainment
            </NavText>
        </NavItem>

        <NavItem eventKey="other">
            <NavIcon>
                <i className="fas fa-angle-double-right" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Other
            </NavText>
        </NavItem>








       
            
  

      



    </SideNav.Nav>
</SideNav>

          
          </div>
          
          </div>
    )
  }
}
export default Dashboard;