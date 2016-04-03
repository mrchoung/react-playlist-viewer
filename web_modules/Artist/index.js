import React, { Component, PropTypes } from 'react';
import Artists, {persons} from "Artists";
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';


export default class Artist extends Component {

  static contextTypes = {
      router: PropTypes.object,
  };

  static propTypes = {
      params: PropTypes.shape({
        personId:PropTypes.string,
      }),
  };

  componentDidMount(){
    const {
      params,
    } = this.props
  }

  render = () => {

    var dataPersons = persons[0]['results'];
    var idPerson = this.props.params.id;

    return(
      <div>
      {dataPersons.map((dataPerson) => {
          if (idPerson == dataPerson.id)
          return <Card key={dataPerson.id}>
            <CardHeader
              key={dataPerson.id}
              title={dataPerson.name}
              subtitle={dataPerson.overview}
              avatar={'http://image.tmdb.org/t/p/w500'+dataPerson.profile_path}
            />
            <CardMedia
              overlay={<CardTitle title={dataPerson.known_for[0].original_title} subtitle={dataPerson.known_for[0].release_date} />}
            >
              <img src={'http://image.tmdb.org/t/p/w500'+dataPerson.known_for[0].backdrop_path} />
            </CardMedia>
            <CardText>
              {dataPerson.known_for[0].overview}
            </CardText>
            
          </Card>;
      })}
      </div>
    );                   
  };
}

export default Artist;
