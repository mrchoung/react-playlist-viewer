import React, { Component } from 'react';
import Caserne from "Caserne";

const List = ({items =[] }) => 

	(<div className="List">
		{
			items &&
			items.map((item, index) => {
				return (
					<Caserne key={index} name={item.name} />
				);
			})
		}
	</div>)

export default List