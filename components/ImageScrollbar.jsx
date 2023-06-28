import {useContext} from "react";
import Image from "next/image";
import {Box, Icon, Flex} from "@chakra-ui/react";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

// Use Context is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving "props"



const LeftArrow = () =>
{
    const {scrollPrev} = useContext(VisibilityContext)
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1" >
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}

const RightArrow = () =>
{
    const {scrollNext} = useContext(VisibilityContext)
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1" >
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>

    )
}





// Data is a derived from [id].js


const ImageScrollbar = ({data}) => (

    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: "hidden"}} >


        {data.map((item) => (
            <Box key={item.id} width="910px" itemId={item.id} overflow="hidden">
                <Image
                    placeholder="blur"
                    blurDataURL={item.url}
                    src={item.url}
                    width={1000}
                    height={500}
                    alt={item.property}
                    // Media query chakraui
                    sizes="(max-width: 500px) 100px, (max-width): 1023px 400px, 1000px  "
                />
            </Box>
        ))}
    </ScrollMenu>



)

export default ImageScrollbar