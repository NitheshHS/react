import React from 'react'
import {Stack, Button} from '@mui/material';
import {Send} from '@mui/icons-material'
function MuiButton() {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='conatined' >Primary</Button>
            <Button variant='conatined' color='secondary'>Secondary</Button>
            <Button variant='conatined' color='success'>Success</Button>
            <Button variant='conatined' color='error'>Error</Button>
            <Button variant='conatined' color='warning'>Warning</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <Button variant='contained' startIcon={<Send/>}>Send</Button>
        </Stack>
    </Stack>
    
  )
}

export default MuiButton