import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

const MovieCart = ({ data }) => (
  <Grid.Column>
    <Card>
      <Image
        src={data.image}
        wrapped
        ui={false}
      />
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
  </Grid.Column>
);

export default MovieCart;
