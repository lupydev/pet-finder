import {
    Avatar,
    Button,
    FormControl,
    Modal,
    TextField,
    Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const UserDetails = () => {
    const navigate = useNavigate()
    const { petDetail } = useSelector((state) => state.pet)
    const { userInfo } = useSelector((state) => state.user)
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Stack
            justifyContent="space-evenly"
            width="400px"
            height="300px"
            p="15px"
            sx={{
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '5px',
            }}
        >
            <Stack
                direction="row"
                width="100%"
                minWidth="250px"
                height="150px"
                border="solid 3px"
                borderColor={
                    petDetail?.type.toLowerCase() === 'lost'
                        ? 'secondary'
                        : 'primary'
                }
                sx={{
                    borderColor:
                        petDetail?.type.toLowerCase() === 'lost'
                            ? 'secondary.main'
                            : 'primary.main',
                }}
                borderRadius="10px"
                alignItems="center"
            >
                <Avatar
                    src={petDetail?.userId?.img}
                    sx={{ width: 110, height: 110, ml: '20px' }}
                />
                <Stack width="100%">
                    <Typography
                        fontSize="25px"
                        component="div"
                        fontWeight={'bold'}
                        mx="auto"
                        color={
                            petDetail?.type.toLowerCase() === 'lost'
                                ? 'secondary'
                                : 'primary'
                        }
                    >
                        {petDetail?.userId?.fullname}
                    </Typography>
                </Stack>
            </Stack>
            {userInfo.isLogged ? (
                <Button
                    variant="contained"
                    color={
                        petDetail?.type.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                    sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        mx: '10px',
                    }}
                    onClick={handleOpen}
                >
                    Contact
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color={
                        petDetail?.type.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                    sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        mx: '10px',
                    }}
                    onClick={() => navigate('/login')}
                >
                    Log in to contact this user
                </Button>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    gap="20px"
                    sx={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/diyk4to11/image/upload/v1665620097/Imagenes%20Dise%C3%B1o%20UX/Logo/fondo1_iofpbd.png)',
                        borderRadius: '20px',
                        backgroundColor: '#eff5ff',
                        height: '640px',
                        width: '400px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <img
                        height="58px"
                        width="80px"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664207629/Imagenes%20Dise%C3%B1o%20UX/Logo/Pet_qcvo4b.png"
                    />
                    <Typography
                        fontSize="20px"
                        component="div"
                        fontWeight={'bold'}
                        mx="auto"
                        color={
                            petDetail?.type.toLowerCase() === 'lost'
                                ? 'secondary'
                                : 'primary'
                        }
                    >
                        Contact {petDetail?.userId?.nickname}
                    </Typography>

                    <TextField
                        label="Name"
                        variant="outlined"
                        size="small"
                        sx={{ width: '100%' }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        size="small"
                        sx={{ width: '100%' }}
                    />
                    <TextField
                        label="Phone"
                        variant="outlined"
                        size="small"
                        sx={{ width: '100%' }}
                    />
                    <TextField
                        multiline
                        rows={3}
                        label="Message"
                        variant="outlined"
                        sx={{ width: '100%' }}
                    />
                    <Button
                        variant="contained"
                        color={
                            petDetail?.type.toLowerCase() === 'lost'
                                ? 'secondary'
                                : 'primary'
                        }
                        sx={{
                            // px: '90px',
                            textTransform: 'none',
                            borderRadius: '8px',
                        }}
                    >
                        Send
                    </Button>
                </Stack>
            </Modal>
        </Stack>
    )
}

export default UserDetails
