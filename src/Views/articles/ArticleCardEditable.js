import { Grid } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import { StyledCard, StyledButton } from "./styles.js";

function ArticleCardEditable({ element, onClickEdit, onClickDelete }) {
  return (
    <StyledCard sx={{ p: 2 }}>
      <Grid container direction="row" spacing={1}>
        <Grid item xs>
          <CardMedia
            component="img"
            height="200"
            image={element.image}
            alt={element.name}
          />
        </Grid>
        <Grid item xs={8} container direction="column">
          <Grid item>
            <CardContent>
              <Typography variant="h5" component="div">
                {element.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" color="text.secondary">
                {element.date}
              </Typography>
              <Typography variant="body1" paragraph>
                {element.corpus}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardActions style={{
              justifyContent: 'flex-end'
            }}>
              <StyledButton
                startIcon={<EditIcon />}
                onClick={() => onClickEdit(element.id)}
                sx={{
                  background: "green"
                }}>
                Modifier
              </StyledButton>
              <StyledButton startIcon={<DeleteIcon />} sx={{
                background: "red"
              }}>
                Supprimer (TODO)
              </StyledButton>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </StyledCard>
  );
}

export default ArticleCardEditable;