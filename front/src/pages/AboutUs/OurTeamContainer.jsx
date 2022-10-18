import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Loading from '../../components/loading/Loading'
import TeamCard from './TeamCard'

const OurTeamContainer = () => {
    return (
        <Box>
            <Typography
                variant="h4"
                color="primary.main"
                fontFamily={'Merriweather'}
                fontWeight="bold"
            >
                Our Team!
            </Typography>
            <Grid
                display="grid"
                maxWidth="1024px"
                gridTemplateColumns="1fr 1fr 1fr"
                gap={5}
                margin="0 auto"
                mt={6}
            >
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </Grid>
        </Box>
    )
}

export default OurTeamContainer
