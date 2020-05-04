import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const MovieCartDetail = ({ movie }) => {
  return (
    <Card>
      <Image src={movie.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Meta>
          <span className="date">{movie.year}</span>
        </Card.Meta>
        <Card.Description>
          Direktor : {movie.direktor.name + ' ' + movie.direktor.surname}
          <hr/>
          Direktor bio : {movie.direktor.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        IMDB : {movie.imdbScore}
      </Card.Content>
    </Card>
  );
};

export default MovieCartDetail;
