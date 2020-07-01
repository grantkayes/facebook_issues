import React from "react";
import { 
  TextField, 
  Dialog, 
  DialogContent,
  DialogTitle,
  Button,
  Card,
  CardContent,
  Chip,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Issues = ({issues}) => {
  const classes = useStyles();

  return (
    issues.map((issue, index) => (
      <a href={issue.html_url} target="_blank">
        <li key={issue.id} className="my-3">
          <Card className={classes.root}>
            <CardContent className="link" id={index}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <strong>Issue Title: </strong>{issue.title}
              </Typography>
              {issue.labels.map((label) => (
                <Chip label={label.name} color="secondary" className="mr-2"/>  
              ))}
            </CardContent>
          </Card>
        </li>
      </a>
    ))
  )
}

export default Issues;
