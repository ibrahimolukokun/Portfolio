"use client";

import {FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'next-share';

const ShareButtons = () => {
  return (
    <>
        <div className="mil-share mil-mb120 mil-up">
            <p>Share:</p>
            <ul className="mil-social">
                <li className="mil-c-gone">
                    <FacebookShareButton>
                        <i className="fab fa-facebook-f"></i>
                    </FacebookShareButton>
                </li>
                <li className="mil-c-gone">
                    <TwitterShareButton>
                        <i className="fab fa-twitter"></i>
                    </TwitterShareButton>
                </li>
                <li className="mil-c-gone">
                    <LinkedinShareButton>
                        <i className="fab fa-linkedin"></i>
                    </LinkedinShareButton>
                </li>
            </ul>
        </div>
    </>
  );
};
export default ShareButtons;