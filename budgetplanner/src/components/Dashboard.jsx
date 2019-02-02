import React, { Component } from 'react';
import '../css/output.css'
import expenses from './categories.json'
import {Bar, Line, Pie, Doughnut, Bubble} from 'react-chartjs-2';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//insert data to local storage only once then comment it out.
//localStorage.setItem('data',JSON.stringify([15,40,50,65,90,130,45,75,90]))

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            class:'inputContainer hide',
            chartData: {
            
          labels : expenses,
          datasets:[{
          label: "My budget distribution",
          data: JSON.parse(localStorage.getItem('data')),
          backgroundColor: [
            'rgba(0, 51, 153,0.6)',
            'rgba(54,162,235,0.6)',
            'rgba(255,206,86,0.6)',
            'rgba(102, 255, 102,0.6)',
            'rgba(153,102,255,0.6)',
            'rgb(179,0,0,0.6)',
            'rgba(255,99,132,0.6)',
            'rgba(102, 255, 179,0.6)',
            'rgba(102, 51, 0,0.6)'
          ],
          borderWidth: 2
          }]
        }
    }
      }
 componentDidMount = ()=> {
     console.log(expenses)
 }

 getItemValue = (e) =>{
     console.log(this.state.chartData.datasets[0].data[0])
     expenses.forEach((each,index)=>{
       if(this.state.item = "each"){
       this.setState({
        ...this.state,
        enteredAmount: this.state.chartData.datasets[0].data[index]+parseInt(e.target.value)
          },()=>{
          console.log(this.state.enteredAmount)
         })
       }
    })
  }

  updateValue =() =>{
      expenses.forEach((each,index)=>{
     if(this.state.item = "each"){
         let oldArr = JSON.parse(localStorage.getItem('data'))  //get initial amount in the array from local storage
         oldArr[0] = this.state.enteredAmount  // change the grocery value 
         localStorage.setItem('data',JSON.stringify(oldArr))  //set the updated array to local storage
         window.location.reload();     //to refresh page if needed
       }
    })
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
             item:selected,
         })
        if(this.state.class=="inputContainer hide"){
            this.setState({
                ...this.state,
                class: 'inputContainer',
            })}
    }}
    onToggle={()=>{
        
            this.setState({
                ...this.state,
                class: 'inputContainer hide'
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
          <input className="amount" type="text" placeholder="$" onChange={this.getItemValue}/>
          <button className="submit" onClick={this.updateValue}>Submit</button>
          </div>
         
          </div>
          <div className="graphDiv">

              <div className="barDiv">
            <Bar
            data={this.state.chartData}
            options={{

                title:{
                    display: true,
                    text: 'Budget Distribution Bar Graph',
                    fontSize: 20
                },
                legend:{
                    display:false,
                    position: 'top',
                    labels:{
                    fontSize: 20}
                },
                scales:{
                    xAxes:[{
                        ticks:{
                            fontSize: 13,
                        }
                    }]
                }

            }}
             />
              </div>
             

              <div className="pieDiv">
              <Pie
            data={this.state.chartData}        
            options={{
                title:{
                    display: true,
                    text: 'Budget Distribution Pie Graph',
                    fontSize: 20
                },
                legend:{
                    display:true,
                    position: 'right',
                    labels:{fontSize: 16
                    }   
                }
            }}
             />
              </div>


          </div>
          </div>
          
          </div>
    )
  }
}
export default Dashboard;