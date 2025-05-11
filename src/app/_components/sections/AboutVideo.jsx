"use client"

import { useState } from 'react';
import 'react-modal-video/css/modal-video.css';
import Data from "@data/sections/about-video.json";
import ModalVideo from 'react-modal-video';
import Image from 'next/image';

const AboutVideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
        {/* video */}
        <div className="mil-about mil-p-120-0">
            <div className="container">
                <p className="mil-text mil-light mil-fs30 mil-mb120 mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                <div className="mil-video mil-up">
                    <Image src={Data.image.url} fill sizes="100vw" alt={Data.image.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.25" />
                    <a href={Data.link} target="_blank" className="mil-c-gone" onClick={() => setOpen(true)} style={{"cursor": "pointer"}}>
                        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.00204V11.359C0 12.148 0.871 12.626 1.537 12.203L9.674 7.02504C10.292 6.63204 10.292 5.73104 9.674 5.33804L1.537 0.158044C0.871 -0.265956 0 0.213044 0 1.00204Z" fill="black" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        {/* video end */}

        <ModalVideo channel='youtube' isOpen={isOpen} videoId={Data.youtube_video_id} onClose={() => setOpen(false)} />
    </>
  );
};

export default AboutVideoSection;