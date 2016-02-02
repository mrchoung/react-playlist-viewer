// var caserne = (props) => {
// 	var soldat = getCaserne(props.species);
// 	return <tank>{soldat}</tank>;
// };

// var soldat = ({species}) => (
// 	<tank>
// 		{getCaserne(species)}
// 	</tank>
// );

import React, {Component} from "React";

const Caserne = ({name = ""}) => {
	return <span className="soldat">{name}</span>
}

export default Caserne

