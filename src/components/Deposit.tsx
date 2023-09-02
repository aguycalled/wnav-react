import * as React from "react";
import styled from '@emotion/styled'
import QRCode from "react-qr-code";
import Box from "@mui/material/Box"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {themeOptions} from "../App";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Deposit = (props: any) => {
    const {address, gas_cost, is_registered, onRegister} = props;

    return (
        <Card variant="outlined" sx={{
            margin: '10px', padding: '20px', width: '90%', maxWidth: '600px', minHeight: '600px', height: '90%'
        }
        }> {is_registered ? (
            <CardContent>

                <QRCode value={"navcoin:"+address}/>

                <Typography variant={"subtitle1"} sx={{
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    wordBreak: 'break-all'
                }}>
                    <b>{address}</b>
                </Typography>

                <Typography variant={"subtitle1"} sx={{
                    paddingTop: '20px'
                }}>
                    Coins sent to this address will be swapped automatically to wNAV.
                </Typography>

                <Typography variant={"subtitle1"} sx={{
                    paddingTop: '20px'
                }}>
                    <i>A fee will be deducted to cover the gas costs for minting.</i>
                </Typography>

                <Typography variant={"subtitle1"} sx={{
                    paddingTop: '20px'
                }}>
                    Estimated gas cost: <b>{parseFloat(gas_cost).toFixed(2)} NAV</b>.
                </Typography>

                <Typography variant={"subtitle1"}sx={{
                    paddingTop: '20px'
                }}>
                    Deposits smaller than this amount will be considered lost and won't be credited.
                </Typography>
            </CardContent>
        ) : (
            <CardContent>
                <Typography variant={"subtitle1"}>
                    Register your wallet in the bridge to swap NAV to wNAV.
                </Typography>
                <Typography variant={"subtitle1"}>
                    <Button onClick={onRegister} variant="contained">Register</Button>
                </Typography>
            </CardContent>
        )}
        </Card>
    )
}

export default Deposit;
