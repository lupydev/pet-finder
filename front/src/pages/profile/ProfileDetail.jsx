import {
    Container,
    Paper,
    Box,
    Typography,
    Divider,
    Avatar,
    IconButton,
    Button,
} from '@mui/material'

const ProfileDetail = ({ userData }) => {
    return (
        <div key={userData?._id}>
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        backgroundColor: 'primary.main',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            display="flex"
                            justifyContent="flex-end"
                            width="100%"
                        >
                            <IconButton
                                color="primary"
                                aria-label="edit"
                            ></IconButton>
                        </Box>
                        <Typography variant="h4" marginY={5} color="white">
                            My Profile
                        </Typography>

                        <Divider variante="middle"></Divider>

                        <Avatar
                            sx={{ width: 200, height: 200 }}
                            src={userData?.img}
                            alt={userData?.nickname}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                sx={{
                                    p: 1.5,
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    marginRight: '1rem',
                                    marginLeft: '1rem',
                                }}
                                border="1px solid gray"
                                color="text.primary"
                                marginTop={3}
                            >
                                <b> Name:</b> {userData?.fullName}
                            </Typography>

                            <Typography
                                sx={{
                                    p: 1.5,
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    marginRight: '1rem',
                                    marginLeft: '1rem',
                                }}
                                border="1px solid gray"
                                color="text.primary"
                                marginTop={3}
                                marginBottom={3}
                            >
                                <b> Email:</b> {userData?.email}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1rem',
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 'regular',
                        }}
                    >
                        Edit Information
                    </Button>
                </Box>
            </Container>
        </div>
    )
}

export default ProfileDetail
