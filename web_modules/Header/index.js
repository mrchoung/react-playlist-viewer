import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  margin: 14,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <a href={`/`}><RaisedButton label="Acceuil" style={style} /></a>
   	<a href={`/artists`}><RaisedButton label="Artistes" style={style} /></a>
    <RaisedButton label="Films" disabled={true} style={style} />
    <RaisedButton label="Séries TV" disabled={true} style={style} />
  </div>
);

export default RaisedButtonExampleSimple;