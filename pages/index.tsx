import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import SEO from '../src/components/SEO'
import AboutPage from '../src/routes/AboutPage'
import HomePage from '../src/routes/HomePage'

const Home: NextPage = () => (
    <>
        <SEO title="Home" />
        <Box
            id="scroll-container"
            height="100vh"
            overflowX="hidden"
            overflowY="scroll"
            sx={{
                scrollSnapType: 'y mandatory',
                scrollBehavior: 'smooth',
            }}
        >
            <HomePage />
            <AboutPage />
        </Box>
    </>
)

export default Home
