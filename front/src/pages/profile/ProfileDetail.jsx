import {
    Container,
    Paper,
    Box,
    Typography,
    Divider,
    Avatar,
    IconButton,
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

                        <Typography
                            sx={{
                                p: 1.5,
                                borderRadius: 3,
                                bgcolor: 'white',
                            }}
                            border="1px solid gray"
                            variant="body1"
                            color="text.primary"
                            marginTop={5}
                        >
                            <b> Name:</b> {userData?.fullName}
                        </Typography>

                        <Typography
                            sx={{
                                p: 1.5,
                                borderRadius: 3,
                                bgcolor: 'white',
                            }}
                            border="1px solid gray"
                            variant="body1"
                            color="text.primary"
                            marginTop={5}
                            marginBottom={5}
                        >
                            <b> Email:</b> {userData?.email}
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}

export default ProfileDetail
