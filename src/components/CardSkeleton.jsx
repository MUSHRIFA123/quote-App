import { Box, Skeleton } from '@mui/material'
import React from 'react'

export default function CardSkeleton() {
  return (
    <Box sx={{p:2}}>
        <Box sx={{p:3,direction:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
        <Skeleton sx={{p:1}} width={"100%"}animation="wave" />
        <Skeleton sx={{p:1}} width={100} animation="wave" />


        </Box>
    </Box>
  )
}
