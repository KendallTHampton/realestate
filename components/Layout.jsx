import Head from 'next/head'
import {Box} from "@chakra-ui/react"

import Navbar from '../components/Navbar'
import Footer from './Footer';



/**
 * * ########### LAYOUT PAGE  #########
 */

/**
 * ? ------------- DESCRIPTION -------------
 */

//This page needed for our components to take affect. 

//The Next.js React model allows us to deconstruct a page into a series of components. Many of these components are often --- reused --- between pages. For example, you might have the same navigation bar and footer on every page.

//If you only have one layout for your entire application, you can create a Custom App and wrap your application with the layout. Since the <Layout /> component is re-used when changing pages, its component state will be preserved (e.g. input values)



const Layout = ({children}) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box
            maxWidth="1280px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
)

export default Layout;