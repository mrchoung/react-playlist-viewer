import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Artists from "Artists";

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = artists => () [
  {
    img: backdrop-path,
    name: name,
    biography: biography
  }
];


const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.name}
          subtitle={<span>by <b>{tile.biogrpahy}</b></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
