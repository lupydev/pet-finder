import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-carousel-minimal'
import { useSelector } from 'react-redux'

const PetCarousel = () => {
    const { petDetail } = useSelector((state) => state.pet)
    const [data, setData] = useState([])

    const loadData = () => {
        let images = []

        petDetail.img.map((item) => {
            images.push({ image: item })
        })

        setData(images)
    }

    useEffect(() => {
        petDetail != undefined && loadData()
    }, [petDetail])

    return (
        <Stack
            width={{ xs: '100%', sm: '50%', md: '750px' }}
            height="280px"
            sx={{}}
            mt="10px"
        >
            {data.length && (
                <Carousel
                    data={data}
                    width={{ xs: '100%', sm: '50%', md: '750px' }}
                    height="270px"
                    radius="10px"
                    dots={false}
                    automatic={false}
                    slideBackgroundColor="#dbdbdb"
                    slideImageFit="contain"
                    thumbnails={false}
                    thumbnailWidth="100px"
                />
            )}
        </Stack>
    )
}

export default PetCarousel
