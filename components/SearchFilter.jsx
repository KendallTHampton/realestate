import {useEffect, useState} from "react"
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button} from "@chakra-ui/react"
import {useRouter} from "next/router"
import {MdCancel} from "react-icons/md"
import Image from 'next/Image';
import {filterData, getFilterValues} from "../utils/filterData";


// Search Filters will allow us to filter the Properties on the based on their parameters 

// Set up filterData.js in the utility section HUGE FILE OF LARGE DATA


const SearchFilters = () =>
{

    // filters = all the data in filterData

    const [filters, setFilters] = useState(filterData);

    const router = useRouter()


    const searchProperties = (filterValues) =>
    {


        const {query} = router;
        const path = router.pathname;
        const values = getFilterValues(filterValues);

        values.forEach((item) =>
        {
            query[item.name] = item.value
        })
        router.push({pathname: path, query})
    }


    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">

            {/* filters(filterData) is mapped through to find certain data */}

            {filters.map((filter) => (

                <Box key={filter.queryName}>

                    <Select
                        w="fit-content"
                        p="2"
                        placeholder={filter.placeholder}
                        onChange={(e) => searchProperties({
                            [filter.queryName]: e.target.value
                        })}>


                        {/* // Only sending this specific value to the array [] */}


                        {/* Rendering all of the filter items */}

                        {/* This is optional chaining ?. enables you to read a value of a property located deep within a chain of connected objects */}


                        {filter?.items?.map((item) => (
                            <option value={item.value}
                                key={item.value}>
                                {item.name}
                            </option>

                            /* ONCE WE PASS THE VALUE WE HAVE TO PASS THE STATE  have to update the url*/
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters