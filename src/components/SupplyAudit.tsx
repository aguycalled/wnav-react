import * as React from "react";
import SupplyRow from "./SupplyRow";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const SupplyAudit = (props: any) => {
    const { supply } = props;

    return (
        <Card>
            <CardHeader
                title={'Bridge supply'}
                subheader={'Audit the bridge supply'}
            />

            <CardContent>
                <SupplyRow label={"Bridge supply"} value={supply.bridge} decimal={8} symbol={"WNAV"}/>
                <SupplyRow label={"Cold storage supply"} value={supply.cold} decimal={8} symbol={"WNAV"}/>
            </CardContent>
        </Card>
    );
};

export default SupplyAudit;
