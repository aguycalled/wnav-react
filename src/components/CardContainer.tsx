import React from 'react';
import Box from "@mui/material/Box"

export default function CardContainer(props:any) {
    let {children} = props;

    return (
        <Box sx={
            {
                flexWrap: 'wrap',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
                paddingBottom: '130px'
            }
        }>
            {children}
        </Box>
    )
}
