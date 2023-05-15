import React from 'react'
import { Stack, TextField } from '@mui/material'

function MuiTextField() {
  return (
    <Stack spacing={2}>
        <Stack direction='column' width={300} display={'flex'} justifyContent={'center'} alignItem={'center'} >
        <TextField variant='filled' label="Name" marginBottom={30}></TextField>
        <TextField variant='standard' label="Name"></TextField>
        <TextField variant='outlined' label="Name"></TextField>
        </Stack>
        <Stack direction={'row'}>
            
        </Stack>
    </Stack>
  )
}

export default MuiTextField