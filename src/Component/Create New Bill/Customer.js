import { Grid } from '@mui/material'
import React from 'react'
import "./Style.css"
const Customer = () => {
  return (
    <>
        {/* <Grid item lg={12} xs={12} sm={12} className='createBillClass'>
            <h1>Create New Bill</h1>
        </Grid> */}
        <Grid item lg={12} xs={12} sm={12} className='flexContainer'>
            <input type="text" placeholder='Enter Customer Name' className='CreateInput createName'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='flexContainer'>
            <input type="text" placeholder='Enter Bill No.' className='CreateInput createBillNo'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='flexContainer'>
            <input type="text" placeholder='Enter Dt.' className='CreateInput createDt1'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='flexContainer'>
            <input type="text" placeholder='Enter Challan' className='CreateInput createChalan'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='flexContainer'>
            <input type="text" placeholder='Enter Dt.' className='CreateInput createDt2'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='flexContainer'>
            <input type="text" placeholder='Enter Trans. Name' className='CreateInput createTrans'/>
        </Grid>
        <Grid item lg={4} xs={12} sm={4} className='flexContainer'>
            <input type="text" placeholder='Enter Dt.' className='CreateInput createDt3'/>
        </Grid>
    </>
  )
}

export default Customer