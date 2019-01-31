import React, { Component } from 'react';
import '../css/output.css'
import expenses from './categories.json'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
         expenses : [],
          class:'inputContainer withoutmargin hide'
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
        console.log(selected)
        this.setState({
            ...this.state,
            item : selected
        })
        if(this.state.class=="inputContainer withoutmargin hide"){
            this.setState({
                ...this.state,
                class: 'inputContainer'
            })}
    }}
    onToggle={()=>{
        
            this.setState({
                ...this.state,
                class: 'inputContainer withoutmargin hide'
            })
       
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="">
        <NavItem eventKey="Rent/Mortgage" active>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Rent/Morgage
            </NavText>
        </NavItem >
        <NavItem eventKey="Grocery" active>
            <NavIcon>
                <i className="fas fa-shopping-basket" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Grocery
            </NavText>
            </NavItem >
            <NavItem eventKey="Car Expenses" active>
            <NavIcon>
                <i className="fas fa-car" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Car Expenses
            </NavText>
            </NavItem> 
            <NavItem eventKey="Health" active>
            <NavIcon>
                <i className="fas fa-briefcase-medical" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Health
            </NavText>
            </NavItem>
            <NavItem eventKey="Entertainment" active>
            <NavIcon>
                <i className="fas fa-bowling-ball" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Entertainment
            </NavText>
            </NavItem>
            <NavItem eventKey="Utility Bills" active>
            <NavIcon>
                <i className="fas fa-file-invoice-dollar" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Utility Bills
            </NavText>
            </NavItem>
            <NavItem eventKey="Personal Care" active>
            <NavIcon>
                <i className="fas fa-user-alt" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Personal Care
            </NavText>
            </NavItem>
            <NavItem eventKey="Education/Training" active>
            <NavIcon>
                <i className="fas fa-graduation-cap" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Education/Training
            </NavText>
            </NavItem>
            <NavItem eventKey="Other" active>
            <NavIcon>
                <i className="fas fa-angle-double-right" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Other
            </NavText>
            </NavItem>
    </SideNav.Nav>
</SideNav>
<div className={this.state.class}>
          <div className="inputDiv">
          <h4>Enter {this.state.item} Amount:</h4>
          <input className="amount" type="text" placeholder="$"/>
          <button className="submit">Submit</button>
          </div>
          </div>
          
          </div>
          
          </div>
    )
  }
}
export default Dashboard;