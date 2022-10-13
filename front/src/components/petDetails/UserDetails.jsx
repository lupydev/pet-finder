import {
    Avatar,
    Button,
    FormControl,
    Modal,
    TextField,
    Typography,
} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'


const UserDetails = (props) => {
    const { petDetail } = useSelector((state) => state.pet)
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
                        {petDetail?.userId?.nickname}
                    </Typography>
                </Stack>
            </Stack>

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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack
                    height="850px"
                    width="540px"
                    alignItems="center"
                    gap="20px"
                    py="20px"
                    sx={{
                        backgroundImage: `url(https://res.cloudinary.com/diyk4to11/image/upload/v1665620097/Imagenes%20Dise%C3%B1o%20UX/Logo/fondo1_iofpbd.png)`,
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
                        Contact {props.name}
                        </Typography>

                    <FormControl my="15px">
                        <TextField
                            label="Name"
                            variant="outlined"
                            size="small"
                        />
                    </FormControl>
                    <FormControl my="15px">
                        <TextField
                            label="Email"
                            variant="outlined"
                            size="small"
                        />
                    </FormControl>
                    <FormControl my="15px">
                        <TextField
                            label="Phone"
                            variant="outlined"
                            size="small"
                        />
                    </FormControl>
                    <FormControl my="15px">
                        <TextField
                            multiline
                            rows={3}
                            maxRows={4}
                            label="Message"
                            variant="outlined"
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        color={
                            petDetail?.type.toLowerCase() === 'lost'
                                ? 'secondary'
                                : 'primary'
                        }
                        sx={{
                            px: '90px',
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
