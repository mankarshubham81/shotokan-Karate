 import React from 'react'
 import { Heading,Text, Stack, VStack, Button, Image, Box, HStack } from "@chakra-ui/react"
 import './home.css';
 import { Link } from 'react-router-dom';
 import vg from '../../assets/images/bg.png'; 
 import {CgGoogle, CgYoutube, CgInfinity} from 'react-icons/cg'; 
 import {SiFreecodecamp, SiCoursera, SiKhanacademy, SiUdemy} from 'react-icons/si'; 
 import {DiAndroid, DiAws, DiIntellij, DiLinux} from 'react-icons/di'
//  import introVideo from '../../assets/videos/intro.mp4';
//  import introVideo from 'https://youtu.be/q1Rg8rUpjjw';
 
 function Home() {
   return (
    <section className='home' >
        <div className="container">

            <Stack 
            direction={["column","row"]}
            height="100%"
            justifyContent={["center","flex-end"]}
            alignItems="center"
            spacing={['16','56']}
            >
                <VStack width={'full'} alignItems={['center','flex-end']} >
                <Heading color={'gray.300'} children="Learn From The  Learners" size={'2xl'}/>
                <p></p>
                <Text color={'gray.300'} textAlign={["center","left"]} children="Open Resource For Leaners" />
                <p></p>
                <Link to="/courses">
                    <Button color={'gray.300'} size={"lg"} bg={'red.500'}>
                        Explore Now
                    </Button>
                </Link>
                </VStack>
                <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit={'contain'} />
            </Stack>
        </div>
        <Box padding={'8'} bg={'black'} borderRadius={'3xl'}>
            <Heading textAlign={'center'} fontFamily={'body'} color={'gray.300'} children="Our Source for Resources" />
            <HStack className='brandsBanner' justifyContent={'space-between'} marginTop='4'>
                <CgGoogle/>
                <CgInfinity/>
                <CgYoutube/>
                <SiFreecodecamp/>
                <SiKhanacademy/>
                <DiAndroid/>
                <SiUdemy/>
                <SiCoursera/>
                <DiAws/>
                <DiIntellij/>
                <DiLinux aria-placeholder='LInux' />
            </HStack>
        </Box>
        <div className="container2">
            {/* <video autoPlay controls src={introVideo}>
                
            </video> */}
            {/* <iframe src='https://www.youtube.com/embed/exBgWAIeIeg'
                frameBorder='0'
                // allow='autoplay; encrypted-media'
                // allowfullscreen
            /> */}
            <iframe
                title='video'
                id="ytplayer"
                // className={'ytVideo'}
                // type="text/html"
                width="90%"
                height="90%"
                src='https://www.youtube.com/embed/exBgWAIeIeg'
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                // src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                frameBorder="0"
      ></iframe>
            {/* <div className="video-responsive container2">
                <iframe
                width="853"
                height="480"
                // src={`https://www.youtube.com/embed/${embedId}`}
                src='https://www.youtube.com/embed/exBgWAIeIeg'
// /                src={`https://www.youtube.com/embed/exBgWAIeIeg`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
            </div> */}
            {/* <video 
            autoPlay 
            controls src={'https://www.youtube.com/watch?v=q1Rg8rUpjjw'} 
            // controlsList="nodownload nofullscreen no remoteplayback"
            // disablePictureInPicture
            disableRemotePlayback
            >    
            </video> */}
        </div>
     </section>
   )
 }
 
 export default Home