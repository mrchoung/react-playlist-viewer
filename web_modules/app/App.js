import React, { Component } from 'react';

import Caserne from "Caserne";

import List from "List";

const athlets = [
	{name:"Kelly McGarry"},
	{name:"Fabien Barel"},
	{name:"Gee Atherton"},
	{name:"Loic Bruni"}
]

const kinds = {
	enduro: {name:"enduro"},
	fourcross: {name:"fourCross"},
	descente: {name:"descente"},
	freeride: {name: "freeride"}
}

// let kindArray = Object.keys(kinds)
//console.log(kindArray)

export default class App extends Component {
	getCaserne(athlet, index) {
		return (<Caserne key={index} name={athlet.name} />)
	}

  render() {
    return (
  		<div>
  		{
  			<List items={athlets} />
  		}	
  		</div>
    );
  }
}
