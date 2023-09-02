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
import {CardHeader} from "@mui/material";

const Sign = (props: any) => {
    const {address, chainId, queryParams, action, signature} = props;

    window.history.replaceState(null, "Navcoin Bridge", "/")

    let message = `Hi!

This message will be signed to verify the ownership of your address.

Your user identifier is ${queryParams.uid}.

Signing this message has no cost.

Best,

Your Navcoin Bridge Team.`;

    return (
        <Card variant="outlined" sx={{
            margin: '10px', padding: '20px', width: '90%', maxWidth: '600px', height: '90%'
        }
        }>
            <CardHeader title={"Sign message "} subheader={"Authenticate your address"}/>
            <CardContent>
                { signature ? (
                    <>
                        <Typography variant={"subtitle1"} sx={{
                            paddingTop: '20px',
                            paddingBottom: '40px',
                            wordBreak: 'break-all'
                        }}>
                            Use the following signature to validate your address:
                        </Typography>

                        <Typography variant={"caption"} sx={{
                            paddingTop: '20px',
                            paddingBottom: '40px',
                            wordBreak: 'break-all'
                        }}>
                            { signature }
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography variant={"subtitle1"} sx={{
                            paddingTop: '20px',
                            paddingBottom: '40px',
                            wordBreak: 'break-all'
                        }}>
                            The following message will be signed by<br/><b>{address}</b>:
                        </Typography>

                        <Button variant={"contained"} sx={{mt: '40px'}} onClick={() => {
                            action(message, queryParams.redirect)
                        }}>Sign</Button>
                    </>
                )}
            </CardContent>
        </Card>
    )

    /*                        {message.split('\n').map ((line) =>
(<Typography variant={"overline"} sx={{display: 'block'}}>
    {line}
</Typography>)
)}*/
}

export default Sign;
