import { FC } from 'react'

// import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react'

const Header: FC = () => {
  // const { user, error, isLoading } = useUser()

  // if (isLoading) return <Box textAlign="center">Loading...</Box>
  // if (error) return <Box textAlign="center">{error.message}</Box>

  // if (user) {
  //   return (
  //     <Box
  //       id="navbar"
  //       h={{ base: '13vh', md: '13vh', lg: '13vh' }}
  //       // borderBottom="1x solid #ffffff"
  //       bg="#000000"
  //       color="white"
  //     >
  //       <Heading textAlign="center" fontWeight="bold">
  //         <Flex justifyContent="space-between" px={4}>
  //           <Link href="/">
  //             <a>
  //               Welcome <Spacer />
  //               <Text
  //                 color="blue.400"
  //                 _hover={{ color: 'blue.200' }}
  //                 transition="ease .1s"
  //               >
  //                 {user.name}!
  //               </Text>
  //             </a>
  //           </Link>
  //           <Box pt={4} color="#000000">
  //             {/* <Link href="/api/auth/logout">
  //               <a className="">
  //                 <Button
  //                   bg="blue.400"
  //                   color="white"
  //                   _hover={{ bg: 'blue.200' }}
  //                 >
  //                   Logout
  //                 </Button>
  //               </a>
  //             </Link> */}
  //           </Box>
  //         </Flex>
  //       </Heading>
  //     </Box>
  //   )
  // }

  return (
    <Box
      id="navbar"
      h={{ base: '13vh', md: '13vh', lg: '13vh' }}
      // borderBottom="1px solid #ffffff"
      color="white"
      bg="#000000"
    >
      <Heading textAlign="center" fontWeight="bold">
        <Flex justifyContent="space-between" px={{ base: 4, md: 8, lg: 16 }}>
          <Link href="/">
            <a>
              Welcome to
              <Spacer />
              <Text
                color="blue.400"
                _hover={{ color: 'blue.200' }}
                transition="ease .1s"
              >
                My Portfolio!
              </Text>
            </a>
          </Link>
          <Box pt={4}>
            {/* <Link href="/api/auth/login">
              <a>
                <Button bg="blue.400" color="white" _hover={{ bg: 'blue.200' }}>
                  Login
                </Button>
              </a>
            </Link> */}
          </Box>
        </Flex>
      </Heading>
    </Box>
  )
}

export default Header
