 import React from 'react'
 import { Heading, Text, Stack, VStack, Button, Image, Box, HStack } from "@chakra-ui/react"
 import './home.css';
//  import { Link } from 'react-router-dom';
 import vg from '../../assets/images/bg.png'; 
 import {CgGoogle, CgYoutube, CgInfinity} from 'react-icons/cg'; 
 import {SiFreecodecamp, SiKhanacademy } from 'react-icons/si'; 
 import {DiAndroid, DiLinux} from 'react-icons/di'
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
                <VStack width={'full'} alignItems={['center','center']} padding={'2'}>
                <Heading color={'darkgray'} children="Shotokan(松濤館) Karate" size={'2xl'}/>
                <p></p>
                <Text color={'darkgray'} textAlign={["center","left"]} children="Open Resource For Leaners" />
                <p></p>
                {/* <Link to=".inception"> */}
                    {/* <div> */}
                    {/* <a href="#about"></a> */}
                    {/* <li> */}
                        <a href={"#inception"}>
                            <Button color={'lightgray'} size={"lg"} bg={'red.500'}>
                                Explore Now
                            </Button>
                        </a>
                    {/* </li> */}
                    {/* </div> */}
                {/* </Link> */}
                </VStack>
                <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit={'contain'} />
            </Stack>
        </div>
        <Box padding={'8'}>
            <section className='inception' id='inception'>
                <Heading paddingBottom={6} paddingTop={4} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="Start From Here" />
            </section>
            <HStack className='brandsBanner' justifyContent={'space-between'} marginTop='4'>
                <CgGoogle/>
                <CgInfinity/>
                <CgYoutube/>
                <SiFreecodecamp/>
                <SiKhanacademy/>
                <DiAndroid/>
                {/* <SiUdemy/> */}
                {/* <SiCoursera/> */}
                {/* <DiAws/> */}
                {/* <DiIntellij/> */}
                <DiLinux aria-placeholder='LInux' />
            </HStack>
        </Box>

        <Heading  paddingTop={1} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="Yellow Belt (9 th Que)" />
        <Text fontSize='xl' textAlign={'center'} >In the Shotokan karate curriculum, the yellow belt is the second belt you will grade (for the 8th kyu rank).

The yellow color represents the first beam of sunlight which symbolizes hope.

When you are awarded the yellow belt, you have achieved some understanding of karate in both technical and mental aspects and there is hope for a future of potential growth.

A seedling has emerged from the ground to meet the sun, there’s a lot of room for growth but also a lot of challenges ahead.</Text>
        <Text fontSize='xl' textAlign={'center'} > ⇒ syllabus-yellow-belt summary : 1 kata, 6 kihon  </Text>



        <Heading  paddingTop={3} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="1) Heian Shodan  " />


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
                width="560" 
                height="315" 
                src='https://www.youtube.com/embed/q1Rg8rUpjjw'
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

        <Heading  paddingTop={1} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="1. OI ZUKI(Lunge Punch) " />
        <Stack spacing={3}>
        <Text fontSize='xl' textAlign={'center'} >Oi-Zuki is a basic punching technique taught by Karate styles such as Shotokan. It is also known in English as a lunge punch, step-in punch, front punch, forward punch, stepping punch, etc. You might also find this Karate technique spelled as Oizuki, Oi-Tsuki, etc.</Text>
        </Stack>
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
                width="560" 
                height="315" 
                src='https://www.youtube.com/embed/xKyTzCcVmfw'
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

        <Heading  paddingTop={3} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="2. AGE UKE (Rising Face Block)  " />
        <Text fontSize='xl' textAlign={'center'} >Age-uke (上げ受け), which translates to "rising block", or "upward block" is the Japanese term for a technique used in martial arts. There numerous variations in how the technique might be executed, and nothing implicit in the term itself restricts its use to unarmed techniques</Text>

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
                width="560" 
                height="315" 
                src='https://www.youtube.com/embed/XBVsOM2yqUE'
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




        <Heading  paddingTop={3} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="3.GEDAN BARAI (Downward Block)  " />
        <Text fontSize='xl' textAlign={'center'} >Age-uke (上げ受け), which translates to "rising block", or "upward block" is the Japanese term for a technique used in martial arts. There numerous variations in how the technique might be executed, and nothing implicit in the term itself restricts its use to unarmed techniques</Text>

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
                width="560" 
                height="315" 
                src='https://www.youtube.com/embed/7HbxJe1IhsQ'
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


        
        <Heading  paddingTop={3} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="4.SOTO UKE (Outside Block) " />
        <Text fontSize='xl' textAlign={'center'} >In Shotokan karate, soto uke is a blocking technique used for blocking mid-level incoming attacks. It is roughly translated as "From outside block", similar to Osotogari (leg throw from the outside), which comes from the block's final resting point centered on the blocker's body.</Text>

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
                width="560" 
                height="315" 
                src='https://www.youtube.com/embed/YbetlAnKqUk'
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


        <Heading  paddingTop={3} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="5.MAE GERI CHUDAN (Front Kick) " />
        <Text fontSize='xl' textAlign={'center'} >Mae Geri, known in English as "Front Kick," is the most basic of the many kicks in Shotokan karate. Since it's used so often, it's important to practice and really hone this technique.</Text>

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
                width="560" 
                height="315" 
                src='https://www.youtube.com/embed/cb921DbJhtI'
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


        <Heading  paddingTop={3} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="6.YOKO GERI  (Side Kick)" />
        <Text fontSize='xl' textAlign={'center'} >Reffer this below video</Text>

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
                width="560" 
                height="315" 
                src='https://www.youtube.com/embed/2N733WppSOU'
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


        <Heading  paddingTop={1} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="Orange Belt (8 th Que)" />
        

        {/* <Heading  paddingTop={3} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="6.YOKO GERI  (Side Kick)" /> */}
        {/* <Text fontSize='xl' textAlign={'center'} >Reffer this below video</Text> */}
        <Heading  paddingTop={3} textAlign={'center'} fontFamily={'body'} color={'darkgray'} children="2) Heian Nidan" />
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
                width="560" 
                height="315" 
                src='https://www.youtube.com/embed/UgDPJCmsXt0'
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                // src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                frameBorder="0"
            ></iframe>
        </div>


     </section>
   )
 }
 
 export default Home