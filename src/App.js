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
  Card,
  CardContent,
  Chip,
  Typography
} from '@material-ui/core';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import Hotkeys from 'react-hot-keys';
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import { makeStyles } from '@material-ui/core/styles';
import Issues from './components/issues'

const App = () => {

  const url = `https://api.github.com/repos/facebook/react/issues`;
  const textBox = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [issues, setIssues] = useState([]);
  const [issueResults, setIssueResults] = useState([]);
  const [nodeIndex, setNodeIndex] = useState(-1);
  const link = document.getElementsByClassName('link')

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setIssues(data);
    });
  }, []);

  useEffect(() => {
    if (nodeIndex === 0) {
      const link = document.getElementsByClassName('link');
      link[link.length - 1].classList.remove("focused");
    }
  }, [nodeIndex])

  const handleHotkey = (keyName, e, handle) => {
    switch (keyName) {
      case 'enter':
        textBox.current.focus();
        setIssueResults([]);
        if (nodeIndex !== 0) {setNodeIndex(0)}
        break;
      case 'space':
        setOpen(!open);
        break;
      case 'j':
        setNodeIndex(nodeIndex + 1);
        console.log(nodeIndex, keyName)
        link[nodeIndex].classList.add("focused");
        link[nodeIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (nodeIndex !== 0) {
          link[nodeIndex - 1].classList.remove("focused");
        } else if (nodeIndex >= link.length) {
          setNodeIndex(0);
        }
        break;
      default:
        console.log("Error: not a valid hotkey");
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
    setNodeIndex(0);
  }

  return (
    <Hotkeys 
        keyName="enter, j, space" 
        onKeyDown={ e => nodeIndex >= link.length ? setNodeIndex(0) : handleHotkey(e) }
    >
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row justify-content-between w-100 mt-4">
          <Button disabled={true} className="text-white mx-auto"> Keyboard Shortcuts </Button>
          <h1 className="font-weight-bold mx-auto">React Issue Search<FontAwesomeIcon icon={faAtom} size="lg" className="ml-3" spin/></h1>
          <Button color="secondary" className="mx-auto" href="#" onClick={handleOpen}> Keyboard Shortcuts </Button>
        </div>
        <TextField className="mt-5 mb-5 w-50" inputRef={ textBox } id="standard-basic" label="Issues" onChange={ event => handleSearch(event.target.value) }/>
        <div>
          <ul>
           <Issues issues={issueResults} /> 
          </ul>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} selectedValue={"hey"}>
        <DialogContent>
          <DialogTitle>🚀Keyboard Shortcuts 🚀</DialogTitle>
          <DialogContentText>
            'spacebar' => Open shortcuts
          </DialogContentText>
          <DialogContentText>
            'enter/return' => Focus search
          </DialogContentText>
          <DialogContentText>
            'j' => Toggle through results
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Hotkeys>
  )
}

export default App
