import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Loading from '../../components/loading/Loading'
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
            <Stack
                direction="row"
                maxWidth="1440px"
                alignItems="center"
                justifyContent="space-evenly"
                marginTop={6}
                gap={1}
                flexWrap="wrap"
            >
                <Stack gap="30px">
                    <TeamCard person={team[0]} />
                    <TeamCard person={team[1]} />
                    <TeamCard person={team[2]} />
                </Stack>
                <Stack gap="30px">
                    <TeamCard person={team[3]} />
                    <TeamCard person={team[4]} />
                </Stack>
                <Stack gap="30px">
                    <TeamCard person={team[5]} />
                    <TeamCard person={team[6]} />
                    <TeamCard person={team[7]} />
                </Stack>
            </Stack>
        </Box>
    )
}

export default OurTeamContainer
