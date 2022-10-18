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
                textAlign="center"
            >
                Our Team!
            </Typography>
            {team.map((person) => (
                <Stack
                    direction="row"
                    maxWidth="1024px"
                    gap={5}
                    margin="0 auto"
                    mt={6}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Stack>
                        <TeamCard person={person} />
                    </Stack>
                </Stack>
            ))}
        </Box>
    )
}

export default OurTeamContainer
