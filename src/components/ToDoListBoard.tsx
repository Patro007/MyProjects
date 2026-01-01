
//import {AppBar, Container, Toolbar, Typography, Button} from @mui/material/Button
import { Stack, Button } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import DeleteIcon from "@mui/icons-material/Delete"
//import React from 'react'

const ToDoListBoard = () => {
    return (
        <div>
            <h1>PTheory stands for Praveen's theory.</h1>
            <Stack direction={"row"} spacing={4} >
                <Button variant="text" color="success" size="small">Text</Button>
                <div>
                    <Button variant="contained" color="secondary" size="small" onClick={() => alert('small Clicked')}>SMALL</Button>
                    <Button variant="contained" color="success" size="medium" onClick={() => alert('medium Clicked')}>MEDIUM</Button>
                    <Button variant="contained" color="warning" size="large" onClick={() => alert('large Clicked')}>LARGE</Button>
                </div>
                <Button variant="outlined" color="error" size="medium">ERROR</Button>
            </Stack>
            <Stack direction={"row"} spacing={3}>
                <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
                <Button variant="contained" endIcon={<DeleteIcon></DeleteIcon>} aria-label="delete"></Button>
            </Stack>
        </div>
    )
}

export default ToDoListBoard
