import React, { 
  useState, 
  useEffect, 
  useRef 
} from "react";
import { 
  TextField, 
  Dialog, 
  DialogContent,
  DialogTitle, 
  Button,
  List,
  ListItem,
  ListItemText,
  Typo
} from '@material-ui/core';
import Hotkeys from 'react-hot-keys';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { sizing } from '@material-ui/system';
import './App.scss';
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";

const App = () => {

  const url = `https://api.github.com/repos/facebook/react/issues`;
  const textBox = useRef(null);
  const resultNode = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [issues, setIssues] = useState([]);
  const [issueResults, setIssueResults] = useState([]);
  const [nodeIndex, setNodeIndex] = useState([]);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setIssues(data);
    });
  }, []);

  const keyDown = (keyName, e, handle) => {
    if (keyName === "enter") {
      textBox.current.focus();
      setIssueResults([]);
    } else if (keyName === "space") {
      setOpen(!open);
    } else if (keyName === "j") {
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (query) => {
    const results = issues.filter( issue => issue.title.includes(query) );
    setIssueResults(results);
  }

  //const indexOfLastArticle = currentPage * articlesPerPage
  //const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  //const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  return (
    <Hotkeys 
        keyName="enter, j, space" 
        onKeyDown={ e => keyDown(e) }
    >
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row justify-content-between w-100 mt-4">
          <Button disabled={true} className="text-white mx-auto"> Keyboard Shortcuts </Button>
          <h1 className="font-weight-bold mx-auto">React Issue Search<FontAwesomeIcon icon={faAtom} size="lg" className="ml-3" spin/></h1>
          <Button color="secondary" className="mx-auto" href="#" onClick={handleOpen}> Keyboard Shortcuts </Button>
        </div>
        <TextField className="mt-5 mb-5 w-50" inputRef={ textBox } id="standard-basic" label="Issues" onChange={ event => handleSearch(event.target.value) }/>
        <div className={classes.root}>
          <List component="nav">
            {issueResults.map( (issue, index) => (
              <a href={issue.html_url} target="_blank">
                <ListItem key={issue.id} className="my-2">
                  <ListItemText primary={issue.title}/>
                </ListItem>
              </a>
            ))}
          </List>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} selectedValue={"hey"}>
        <DialogContent>
          <DialogContentText>
            'spacebar' => Open shortcuts
          </DialogContentText>
          <DialogContentText>
            'enter/return' => Focus Search
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Hotkeys>
  )
}

export default App
