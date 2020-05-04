import React from "react";
import { Card, Icon, Image, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MovieCart = ({ data, deleteMovie }) => {
  return (
    <Grid.Column>
      <Link to={"/movies/" + data._id}>
        <Card>
          <Image src={data.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{data.title}</Card.Header>
            <Card.Meta>
              <span className="date">{data.year}</span>
            </Card.Meta>
            <Card.Description>{data.category}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="film" />
            {data.country}
          </Card.Content>
        </Card>
      </Link>
      <Button animated onClick={() => deleteMovie(data._id)}>
        <Button.Content visible>Sil</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Link to={"/movie/edit/" + data._id}>
        <Button animated>
          <Button.Content visible>Edit</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Link>
    </Grid.Column>
  );
};

export default MovieCart;
