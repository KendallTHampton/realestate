import {useState} from "react"
import {useRouter} from "next/router"
import Image from "next/image"
import {Flex, Box, Text, Icon} from "@chakra-ui/react"
import {BsFilter} from "react-icons/bs"
import SearchFilters from "../components/SearchFilter"
import Property from "../components/Property"
import noResult from "../assets/images/noresult.svg"
import {baseUrl, fetchApi} from "../utils/fetchApi"



/** 
 * * =================== (SEARCH PAGE) ================== 
*/

/* 
 ? DESCRIPTION BELOW
*/

//The Search page's purpose is to Pass in <SearchFilter/> Component to have options to filter from && Passing in <Property /> Component to show the Properties based on those Query



const Search = ({properties}) =>
{


    const [searchFilters, setSearchFilters] = useState(false)

    const router = useRouter()

    return (


        /** 
         * ? --------  SEARCHBAR COMPONENT ---------------- 
         */

        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2"
                fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"

                // SetSearch is equal to a false boolean value. On click is taking the callback ((prevFilters) === false and the changes it to the opposite boolean value everytime it's clicked because of ! Logical NOT (! returns true if the value is false and returns false if the value if true)

                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}>

                <Text>Search Property By Filters</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>

            {/* searchFilters is the value of the useState(false) it is using the logical operator && 
            If searchFilters === true then show the <SearchFilters /> Component if searchFilters is === false then don't show the <SearchFilters />  Component */}

            {
                /**
                    * * PASSING IN <SEARCHFILTERS/> TO PICK FROM
                */
            }

            {searchFilters && <SearchFilters />}

            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}

                {/* router allows us to access  */}

            </Text>


            {
                /**
                * ? ------ LOADS PROPERTIES COMPONENTS ----- */
            }


            <Flex flexWrap="wrap">

                {/* Mapping through properties: data?.hits */}

                {properties.map((property) => <Property property={property} key={property.id} />)}

            </Flex>

            {properties.length === 0 && (
                <Flex justifyContent="center" alignItems="center" flexDirection="coloumn" marginTop="5" marginBottom="5">
                    <Image alt="no result found" src={noResult} />
                </Flex>
            )}
        </Box>
    )
}

export default Search;


/** 
 * * ============== (END OF SEARCH PAGE) ================= 
 */



/** 
 * ? ------------ GET DATA FROM SERVERSIDE -----------
 */


// This is a query for the search bar. When someone types something in the search it will query for it and show corresponding results. That data will come from our API

// get serverSideProps() utility function is used here instead of getStaticProps() PRERENDERING - NEXT.JS

// const purpose is a parameter from API based on the purpose there will be different data associated with it 

// but we can add more parameters on top of it shown in API page



export async function getServerSideProps({query})
{
    const purpose = query.purpose || "for-rent" //default 
    const rentFrequency = query.rentFrequency || "yearly"
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props:
        {
            properties: data?.hits
        }
    }

}