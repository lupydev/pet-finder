import React, { useEffect, useState } from 'react'
import {
    Typography,
    Avatar,
    Stack,
    ToggleButtonGroup,
    ToggleButton,
    useMediaQuery,
} from '@mui/material'
import { useSelector } from 'react-redux'
import Title from '../../components/petBrowser/Title'
import Loading from '../../components/loading/Loading'

const ProfileContainer = ({ menuItems, view, setView, children }) => {
    const { userData } = useSelector((state) => state.user)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'))

    const handleMenuChange = (event, nextView) => {
        nextView && setView(nextView)
    }

    useEffect(() => {
        if (userData !== undefined) {
            const [name, lastName, ...rest] = userData.fullname.split(' ')
            setName(name)
            setLastName(lastName)
        }
    }, [userData])

    return (
        <Stack width="100%" gap={5} alignItems={'center'} pt="100px">
            {userData !== undefined ? (
                <>
                    <Title
                        title={'Account'}
                        desc={`Hi ${userData.nickname}!`}
                    />
                    <Stack
                        width="100%"
                        py="65px"
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{
                            backgroundColor: '#E9F1F7',
                        }}
                    >
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            width="100%"
                            maxWidth="1440px"
                            height="100%"
                            gap={{ xs: 3, md: 5 }}
                            alignItems={'start'}
                            justifyContent={'center'}
                            px={{ xs: '20px', md: '40px' }}
                        >
                            {/* Profile Card */}
                            <Stack
                                width={{ xs: '100%', md: '320px' }}
                                height={{ xs: 'auto', md: '630px' }}
                                backgroundColor="#FDFEFF"
                                boxShadow={5}
                                borderRadius={5}
                                alignItems="center"
                                p="24px"
                                gap="20px"
                            >
                                <Stack
                                    alignItems="center"
                                    justifyContent={'center'}
                                    width="100%"
                                >
                                    <Stack
                                        width={{ xs: '60px', md: '180px' }}
                                        height={{ xs: '60px', md: '180px' }}
                                        p="3px"
                                        sx={{ border: '3px solid #3981BF' }}
                                        borderRadius="50%"
                                    >
                                        <Avatar
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            src={userData?.img}
                                            alt={userData?.nickname}
                                        />
                                    </Stack>
                                    <Stack
                                        direction={{ xs: 'row', md: 'column' }}
                                        alignItems="center"
                                        justifyContent={'center'}
                                    >
                                        <Typography
                                            fontSize={{
                                                xs: '22px',
                                                md: '32px',
                                            }}
                                            color="#0D0D0D"
                                        >
                                            {name}
                                        </Typography>
                                        <Typography
                                            fontSize={{
                                                xs: '22px',
                                                md: '24px',
                                            }}
                                            color="#0D0D0D"
                                        >
                                            {lastName}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack
                                    width="100%"
                                    height="3px"
                                    backgroundColor={'#D9E6F7'}
                                />
                                <Stack width="100%">
                                    <ToggleButtonGroup
                                        orientation={
                                            isSmallScreen
                                                ? 'horizontal'
                                                : 'vertical'
                                        }
                                        value={view}
                                        onChange={handleMenuChange}
                                        exclusive
                                        sx={{
                                            width: '100%',
                                            justifyContent: isSmallScreen
                                                ? 'space-between'
                                                : 'flex-start',
                                        }}
                                    >
                                        {menuItems.map((item) => (
                                            <ToggleButton
                                                key={item.id}
                                                value={item.id}
                                                color="primary"
                                                fullWidth
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    direction: 'row',
                                                    p: 1,
                                                    // px: isSmallScreen?2:1 ,
                                                    justifyContent:
                                                        isSmallScreen
                                                            ? 'center'
                                                            : 'flex-start',
                                                    gap: '20px',
                                                    border: 'none',
                                                }}
                                            >
                                                <Stack
                                                    width={{
                                                        xs: '22px',
                                                        md: '22px',
                                                    }}
                                                    alignItems="center"
                                                >
                                                    {item.icon}
                                                </Stack>
                                                <Typography
                                                    display={{
                                                        xs: 'none',
                                                        md: 'block',
                                                    }}
                                                    color="#0D0D0D"
                                                    spacing={0}
                                                    textTransform="none"
                                                >
                                                    {item.title}
                                                </Typography>
                                            </ToggleButton>
                                        ))}
                                    </ToggleButtonGroup>
                                </Stack>
                            </Stack>
                            {/* End Profile Card */}
                            {/* Side Card */}
                            <Stack
                                width={{ xs: '100%', md: '750px' }}
                                minHeight={{ xs: 'auto', md: '450px' }}
                                backgroundColor="#FDFEFF"
                                py="50px"
                                px="26px"
                                boxShadow={5}
                                borderRadius={5}
                                gap="30px"
                            >
                                {children}
                            </Stack>
                            {/* End Side Card  */}
                        </Stack>
                    </Stack>
                </>
            ) : (
                <Stack height='80vh' width='100%' alignItems='center' justifyContent='center'>

                    <Loading />

                </Stack>
            )}
            <Stack
                height="100px"
                width={'100%'}
                sx={{
                    backgroundImage:
                        'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664932414/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellitas_icwbmh.svg)',
                    backgroundRepeat: 'repeat',
                }}
            ></Stack>
        </Stack>
    )
}

export default ProfileContainer
