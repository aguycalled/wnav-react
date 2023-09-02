import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Divider from '@mui/material/Divider';
import {CardActions} from "@mui/material";
import {themeOptions} from "../App";
import ActionButton from "./ActionButton";
import {getNativeCurrency} from "./AccountAssets";

export function LiquidityPoolCard(props:any) {
    let {farmingData, onAdd, onRemove, chainId} = props;

    return (
        <Card>
            <CardHeader
                title={'Liquidity Pool'}
                subheader={farmingData.exchangeName}
            />

            <CardContent>
                <Typography variant={"subtitle1"} sx={{paddingTop: '10px'}}>
                    You are farming:
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    {String(farmingData.depositedNavLp / 1e8).toLocaleString()} wNAV
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" >
                    {String(farmingData.depositedBnbLp / 1e18).toLocaleString()} {getNativeCurrency(chainId).symbol}
                </Typography>
                <Typography variant={"subtitle1"} sx={{paddingTop: '20px'}}>
                    Your share:
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" >
                    {String(farmingData.share)}%
                </Typography>
            </CardContent>
            <CardActions>
                <ActionButton onClick={onAdd}>Add to farming</ActionButton>
                <ActionButton onClick={onRemove}>Remove from farming</ActionButton>
            </CardActions>
        </Card>
    )
}
