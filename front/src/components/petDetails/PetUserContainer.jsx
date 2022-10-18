import { Button, IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import PetCarousel from './PetCarousel'
import UserDetails from './UserDetails'
import { FacebookShareButton } from 'react-share'
import DocumentMeta from 'react-document-meta'
import { IoMdShareAlt } from 'react-icons/io'

const PetUserContainer = (props) => {
    const url = window.location

    console.log(url.href)
    const meta = {
        title: 'Help me to find my Home',
        description:
            'I am a lost Pet that wanna come home, help me sharing this link to find my family',
        canonical:
            'https://petfinder-phi.vercel.app/lostPets/63494bf4223d4335fbdb1c8c',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'pet, find, lost, dog,cat,petfinder',
            },
            image: 'https://res.cloudinary.com/diyk4to11/image/upload/v1665747788/upload_petfinder/xx6gchaqhxmqiltmsonv.jpg',
        },
    }
    return (
        <Stack
            width="100%"
            px={{ xs: 2, sm: 5, md: 10 }}
            gap="30px"
            marginTop="20px"
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                width="100%"
                justifyContent="space-evenly"
                alignItems="center"
                gap={{ xs: '0px', sm: '15px' }}
            >
                <PetCarousel />
                <UserDetails />
            </Stack>

            <Stack direction="row" width="100%">
                <Stack
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                    }}
                >
                    <Typography
                        fontSize="18px"
                        component="div"
                        m="0"
                        fontWeight="bold"
                    >
                        Description:
                    </Typography>
                    <Typography
                        fontSize="16px"
                        component="div"
                        m="0"
                        sx={{ textIndent: '100px', textAlign: 'justify' }}
                    >
                        {props.description}
                    </Typography>
                    <DocumentMeta {...meta}>
                        <FacebookShareButton
                            url={url.href}
                            quote="Help this Pet come home"
                            hashtag="PetFinder"
                        >
                            <Button>
                                Share on Facebook
                                <IconButton>
                                    <IoMdShareAlt color="#3b5998"></IoMdShareAlt>
                                </IconButton>
                            </Button>
                        </FacebookShareButton>
                    </DocumentMeta>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default PetUserContainer
