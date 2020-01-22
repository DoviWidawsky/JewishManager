import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
  },
}));

class Edit extends Component {
    render() {
        return (
            <div>
                <h1>עריכת אזכרות</h1>
                <div>
                <FormControl className="formControl">
                    <InputLabel id="demo-simple-select-label">בחר</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={10}>לרפואת</MenuItem>
                        <MenuItem value={20}>לזכר</MenuItem>
                        <MenuItem value={30}>להצלחת</MenuItem>
                    </Select>
                </FormControl>
                    <TextField id="name-in-hebrew" label="שם בעברית" />
                    <TextField id="name-in-english" label="שם באנגלית" />
                </div>
                <Button variant="contained" color="primary">
                    אישור
                </Button>
            </div>
        )
    }
}

export default Edit


//TODO: 