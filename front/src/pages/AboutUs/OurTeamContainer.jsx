import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import TeamCard from './TeamCard'
import team from './team.json'

const OurTeamContainer = () => {
    return (
        <Box>
            <Typography
                variant="h4"
                color="primary.main"
                fontFamily={'Merriweather'}
                fontWeight="bold"
                sx={{
                    paddingLeft: '40px',
                }}
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
                {team.map((item) => (
                    <Box key={item._id}>
                        <TeamCard person={item} />
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}

export default OurTeamContainer
