import AppData from "@data/app.json";

const TransparentFooter = () => {
  return (
    <>
        {/* footer */}
        <div className="mil-slider-footer">
            <div className="container mil-relative">
                <p className="mil-fs14 mil-soft" dangerouslySetInnerHTML={{__html : AppData.footer.copy}} />
                <div className="mil-ct-frame">
                    <div className="mil-circle-text">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                            <defs>
                                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none" />
                            <g>
                                <use xlinkHref="#circlePath" fill="none" />
                                <text className="mil-link mil-dark" style={{"letterSpacing": "5.5px"}}>
                                    {/* circle text */}
                                    <textPath xlinkHref="#circlePath">About us - About us - about us - </textPath>
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        {/* footer end */}
    </>
  );
};
export default TransparentFooter;
