import React from 'react'
import "./Style.css"
import { Grid } from '@mui/material'

const index = () => {
    const array = [
        {
            customerName : "vishvadatt",
            billNo : "123",
            billDate : "01/09/2023"
        },
        {
            customerName : "Rohan Patel",
            billNo : "456",
            billDate : "02/09/2023"
        },
        {
            customerName : "smitp Patel",
            billNo : "789",
            billDate : "03/09/2023"
        }
    ]
  return (
    <Grid container>
        <Grid item lg={12} xs={12} sm={12}>
        <div className='ourcustomer'>
            <h3>Our Customer</h3>
        </div>
        <div className='searchItem'>
            <input type="text" placeholder='Search Bill here...' className='createSearchInput createSearch'/>
        </div>
        <table style={{overflowX : "auto"}}>
            <thead>
                <tr>
                    <th>CustomerName</th>
                    <th>Bill No</th>
                    <th>Date</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                array.map((data,index) => {
                    return(
                        <tr key={index}>
                            <td>{data.customerName}</td>
                            <td>{data.billNo}</td>
                            <td>{data.billDate}</td>
                            <td>Edit</td>
                            <td>View</td>
                        </tr>
                    )
                })
              }
            </tbody>
        </table>
        </Grid>
    </Grid>
  )
}

export default index