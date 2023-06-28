import Link from 'next/link'
import Image from "next/image"
import {Flex, Box, Text, Button} from "@chakra-ui/react"
import {baseUrl, fetchApi} from '../utils/fetchApi'
import Property from '../components/Property'

//  STYLING BANNER //

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (

  // Passing these props through Example: <Banner purpose = "Buy House" />

  //  these Props are accessed as an object. (props) will always be an object so we can eliminate saying props.propName. Destructuring props allows for neat code.

  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">

    <Image src={imageUrl} width={500} height={300} alt="banner" />

    <Box p="5">

      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>

      <Text color="gray.500" fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>

      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>

      <Button fontSize="xl">
        <Link href={linkName}><a>
          {buttonText}</a>
        </Link>
      </Button>

    </Box>

  </Flex>
)

// HOME PAGE ///

const Home = ({propertiesForSale, propertiesForRent}) => (

  // Props: propertiesForSale & propertiesForRent are exported from down below


  <Box>

    <Banner
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName='/search?purpose=for-rent'
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
    />

    {/* Fetch the properties and map over them */}

    <Flex flexWrap="wrap">
      {propertiesForRent.map((property) =>
        <Property property={property} key={property.id} />)}
    </Flex>



    <Banner
      purpose="BUY A HOME"
      title1="Find, Buy & Own Your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName='/search?purpose=for-sale'
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
    />
    <Flex flexWrap="wrap">
      {propertiesForSale.map((property) =>
        <Property property={property} key={property.id} />)}
    </Flex>
  </Box>
)



//  An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior
// asynchronous (async) is a computer timing protocol in which a specific operation begins receipt of an indication (await) preceding the operation has been completed. Not occuring at the same time as another thing.



// GO TO FETCHAPI.js for more information



// Bayut Api has required/optional parameters 

export async function getStaticProps()
{
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);


  // Passing these const's through by returning the props associated with them
  // .hits comes from the api and allows to tap into the data

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home