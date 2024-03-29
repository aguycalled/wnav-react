import * as React from 'react';
import {Alert, AlertTitle} from '@mui/material'
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Slider from '@mui/material/Slider';
import {getNativeCurrency} from "./AccountAssets";
import {TOKEN_NAME} from "../constants";

export default function DialogAmount(props: any) {
    const {max, web3, chainId, title, text, open, result, button, decimals, error_max_0, bridge_info, balance, token_balance, native_balance, type} = props;

    const [value, setValue] = React.useState(
        100
    );

    const handleInputChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (open && new web3.utils.BN(balance).eq(new web3.utils.BN(0))) ? (
            <Alert severity="error" action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => { result(undefined) ; }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
                   sx={{ mb: 2 }}
            >
                {error_max_0}
            </Alert>
        ) :
        (
        <Dialog open={open} onClose={() => { result() ; }}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{
                    marginBottom: '20px'
                }}>
                    {text}
                </DialogContentText>
                <Slider defaultValue={value} onChange={handleInputChange} aria-label="Default" valueLabelDisplay="auto" />
                <DialogContentText sx={{
                    marginTop: '20px'
                }}>
                    Amount: {new web3.utils.BN(token_balance).div(new web3.utils.BN(10**8)).mul(new web3.utils.BN(value)).div(new web3.utils.BN(100)).toString()} {TOKEN_NAME} / {(native_balance/10**18)*value/100} {getNativeCurrency(chainId).symbol}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { result() ; }}>Cancel</Button>
                <Button onClick={() => {
                    if (type == "add_liq")
                    {
                        result((new web3.utils.BN(token_balance).mul(new web3.utils.BN(value)).div(new web3.utils.BN(100))),
                            (new web3.utils.BN(native_balance).mul(new web3.utils.BN(value)).div(new web3.utils.BN(100))));

                    }
                    else
                    {
                        result((new web3.utils.BN(balance).mul(new web3.utils.BN(value)).div(new web3.utils.BN(100))));
                    }
                }}>{button}</Button>
            </DialogActions>
        </Dialog>
    );
}
