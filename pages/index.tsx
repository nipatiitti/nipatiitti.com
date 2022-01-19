import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import SEO from '../src/components/SEO'
import AboutPage from '../src/routes/AboutPage'
import HomePage from '../src/routes/HomePage'

const Home: NextPage = () => (
    <>
        <svg width="0" height="0">
            <defs>
                <clipPath id="small-clip">
                    <svg viewBox="0 0 100 50">
                        <polygon points="0,20 5,20 5,5 20,5 20,0 0,0" />
                        <polygon points="100,100 100,80 95,80 95,95 80,95 80,100" />
                    </svg>
                </clipPath>
            </defs>
        </svg>
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
