import { Grid } from '@mui/material'
import React from 'react'
import "./Style.css";

const index = () => {
  return (
    <>
        <Grid container>
            <Grid item className='tableParent'>
                <table>
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Particulars</th>
                            <th>MFG.Name</th>
                            <th>Batch No.</th>
                            <th>Exp. Date</th>
                            <th>Packing</th>
                            <th>Qty.</th>
                            <th>Rate.</th>
                            <th>Amount Rs.</th>
                            <th>Ps.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>item 1</td>
                            <td>Abc</td>
                            <td>1234</td>
                            <td>19/08/23</td>
                            <td>pack</td>
                            <td>2</td>
                            <td>2500</td>
                            <td>2500</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>item 2</td>
                            <td>XYZ</td>
                            <td>1234678</td>
                            <td>30/08/23</td>
                            <td>pack</td>
                            <td>2</td>
                            <td>3000</td>
                            <td>3000</td>
                            <td>1   </td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                20B-G/BH-804 Dated 21/06/2005
                                21B-G/BH-789 Dated 21/06/2005
                            </th>
                            <th colSpan={6}>
                                Total...
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        </Grid>
    </>
  )
}

export default index