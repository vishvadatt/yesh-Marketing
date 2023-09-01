import React from 'react'
import "./Style.css"
import { Grid } from '@mui/material'
const index = () => {
  return (
    <>
    <Grid container  className='CustomerInforMainContainer'>
        <Grid item lg={12} xs={12} sm={12} className='parentContainer'>
            <input type="text" placeholder='Enter Customer Name' className='InputClass customerName'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='parentContainer'>
            <input type="text" placeholder='Enter Bill No.' className='InputClass billNo'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='parentContainer'>
            <input type="text" placeholder='Enter Dt.' className='InputClass dtClass1'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='parentContainer'>
            <input type="text" placeholder='Enter Challan.' className='InputClass chalanClass'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='parentContainer'>
            <input type="text" placeholder='Enter Dt.' className='InputClass dtClass2'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='parentContainer'>
            <input type="text" placeholder='Enter Trans. Name.' className='InputClass transClass'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='parentContainer'>
            <input type="text" placeholder='Enter Dt.' className='InputClass dtClass3'/>
        </Grid>
        </Grid>
      </>
  )
}

export default index