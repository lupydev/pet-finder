import {
    Avatar,
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material'
import {
    BsBehance,
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsLinkedin,
} from 'react-icons/bs'
import React from 'react'
import { motion } from "framer-motion";

const TeamCard = ({ person }) => {
    return (
        <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
        >
            <Card
                sx={{
                    width: '270px',
                    height: '320px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
            >
                <CardContent
                    sx={{
                        borderRadius: '8px',
                        padding: '8px',
                        gap: '16px',
                    }}
                >
                    <Stack alignItems="center" justifyContent="center">
                        <Avatar
                            src={person?.img}
                            sx={{
                                width: '170px',
                                height: '170px',
                            }}
                        />
                    </Stack>
                    <Stack p="11px" gap="10px">
                        <Typography
                            noWrap
                            gutterBottom
                            fontSize="25px"
                            component="div"
                            fontWeight={'bold'}
                            m="0"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                gap: '6px',
                            }}
                        >
                            {person?.fullname}
                            <Typography
                                fontSize="14px"
                                padding="2px"
                                color="#9b9fa0"
                            >
                                {person?.rol}
                            </Typography>
                        </Typography>
                        <Box
                            sx={{
                                borderTop: ' 1px solid #15c6dd',
                            }}
                        ></Box>
                        <Stack
                            direction="row"
                            gap="15px"
                            justifyContent="flex-start"
                            alignSelf="center"
                            width="100%"
                        >
                            {person?.network?.instagram && (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={person?.network?.instagram}
                                >
                                    <BsInstagram
                                        fontSize="25px"
                                        color="#357ABD"
                                    />
                                </a>
                            )}
                            {person?.network?.facebook && (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={person?.network?.facebook}
                                >
                                    <BsFacebook
                                        fontSize="25px"
                                        color="#357ABD"
                                    />
                                </a>
                            )}
                            {person?.network?.linkedin && (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={person?.network?.linkedin}
                                >
                                    <BsLinkedin
                                        fontSize="25px"
                                        color="#357ABD"
                                    />
                                </a>
                            )}
                            {person?.network?.github && (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={person?.network?.github}
                                >
                                    <BsGithub fontSize="25px" color="#357ABD" />
                                </a>
                            )}
                            {person?.network?.behance && (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={person?.network?.behance}
                                >
                                    <BsBehance
                                        fontSize="25px"
                                        color="#357ABD"
                                    />
                                </a>
                            )}
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default TeamCard
