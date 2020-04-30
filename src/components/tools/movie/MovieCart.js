import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

const MovieCart = ({ data }) => (
  <Grid.Column>
    <Card>
      <Image
        src="https://3.bp.blogspot.com/-7hvztuBAX0s/U6r27SK0B-I/AAAAAAAAClQ/9RmkiDgpO38/s1600/The+Godfather+(8).jpg"
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
