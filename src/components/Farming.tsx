import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Box from "@mui/material/Box"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';

import {themeOptions} from "../App";
import styled from '@emotion/styled';
import CardHeader from "@mui/material/CardHeader";
import ActionButton from "./ActionButton";
import {CircularProgress} from "@mui/material";

export default function Farming(props:any) {
    let {farmingData, onWithdrawRewards, fetchingFarming} = props;

    return (
        <Card>
            <CardHeader
                title={'Rewards'}
            />
            <CardContent>

            {fetchingFarming ? (
                <CircularProgress/>
            ) : (
                <>
                    <Typography variant={"subtitle1"}>
                        Expected per day
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary"  marginBottom={"20px"}>
                        {farmingData.expectedNavPerYear > 0 ? String(farmingData.expectedNavPerYear * farmingData.share / (365 * 100)).toLocaleString() : '-'} wNAV
                    </Typography>
                    <Typography variant={"subtitle1"} marginTop={"20px"}>
                        APY
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" >
                        {(String(farmingData.apy)).toLocaleString()}%
                    </Typography>
                    <Typography variant={"subtitle1"} marginTop={"20px"}>
                        Pending distribution
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" >
                        {String(farmingData.pendingDistribute / 1e8).toLocaleString()} wNAV
                    </Typography>

                    <Typography variant={"subtitle1"} marginTop={"20px"}>
                        Already distributed
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" >
                        {String(farmingData.userRewards / 1e8).toLocaleString()} wNAV
                    </Typography>
                </>
                )}
            </CardContent>

            <CardActions>
                <ActionButton onClick={onWithdrawRewards}>Withdraw rewards</ActionButton>
            </CardActions>
        </Card>
    );
}
