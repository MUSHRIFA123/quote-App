import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Card({data}) {
  return (
    <div style={{height:"20vh",overflow:"auto",backgroundImage: "url(back.jpeg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <Box sx={{p:3}}>
            <Typography sx={{fontWeight:"100", color:"white"}} variant='body2'>{data?.quote}</Typography>
            <Typography variant='caption' color={"text.secondary"}>{data?.author}</Typography>
        </Box>
    </div>
  )
}
