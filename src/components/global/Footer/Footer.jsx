import { NavLink } from 'react-router-dom';

import './Footer.scss';

const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const whiteLineStyle = {
    fill: '#ffffff',
    fillOpacity: '1', 
    fillRule: 'nonzero', 
    stroke: 'none'
}

const nonWhiteLineStyle = {
    fill: '#000000',
    fillOpacity: '1',
    fillRule: 'nonzero',
    stroke: 'none'
}

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-row-top">
                <div className="up-arrow" onClick={scrollTop}>
                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-shift-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047z"/>
                    </svg>
                </div>
                <div
                    id="tQ-logo"
                >
                    <svg
                        version="1.1"
                        id="svg2"
                        //    xml:space="preserve"
                        width="91.936531"
                        height="62.631081"
                        viewBox="0 0 91.93653 62.631079"
                        xmlns="http://www.w3.org/2000/svg"
                        //    xmlns:svg="http://www.w3.org/2000/svg"
                    >
                        <defs
                            id="defs6">
                            <clipPath
                                clipPathUnits="userSpaceOnUse"
                                id="clipPath16">
                                <path
                                    d="M 0,792 H 612 V 0 H 0 Z"
                                    id="path14" />
                            </clipPath>
                            <clipPath
                                clipPathUnits="userSpaceOnUse"
                                id="clipPath32">
                                <path
                                    d="M 0,792 H 612 V 0 H 0 Z"
                                    id="path30" />
                            </clipPath>
                            <clipPath
                                clipPathUnits="userSpaceOnUse"
                                id="clipPath50">
                                <path
                                    d="M 0,792 H 612 V 0 H 0 Z"
                                    id="path48" />
                            </clipPath>
                            <clipPath
                                clipPathUnits="userSpaceOnUse"
                                id="clipPath74">
                                <path
                                    d="M 0,792 H 612 V 0 H 0 Z"
                                    id="path72" />
                            </clipPath>
                            </defs>
                            <g
                            id="g8"
                            transform="matrix(1.3333333,0,0,-1.3333333,-333.52039,511.92439)">
                            <g
                                id="g26"
                                transform="matrix(0.4,0,0,0.4,170.7699,216.27399)">
                                <g
                                    id="g28"
                                    clip-path="url(#clipPath32)">
                                    <g
                                        id="g34"
                                        transform="translate(335.4043,396.7217)">
                                        <path
                                        d="m 0,0 -0.154,-0.985 v -23.82 H -68.09 v 22.726 c 0.056,3.29 0.222,3.632 0.623,6.529 l 23.445,-1.044 c -0.775,-1.685 -0.715,-3.553 -0.852,-5.423 v -22.788 h 21.758 l 0.001,20.506 c 0.273,6.472 -1.207,9.971 -3.237,11.237 -2.441,1.521 -53.594,3.22 -53.594,3.22 v 11.529 c 9.209,0 30.182,0.009 45.104,0 13.576,-0.009 16.151,-0.373 17.426,-0.661 C -7.578,18.807 -1.275,10.801 0,0"
                                        style={whiteLineStyle}
                                        id="path36" />
                                    </g>
                                    <g
                                        id="g38"
                                        transform="translate(284.875,417.748)">
                                        <path
                                        d="m 0,0 c 1.275,0.288 3.85,0.651 17.426,0.66 14.922,0.01 35.894,0 45.103,0 v -11.528 c 0,0 -51.152,-1.699 -53.593,-3.221 -2.03,-1.265 -3.51,-4.765 -3.237,-11.236 L 5.7,-45.831 h 21.757 v 22.788 c -0.137,1.869 -0.076,3.737 -0.852,5.423 l 23.446,1.044 c 0.4,-2.898 0.566,-3.239 0.623,-6.529 v -22.726 h -67.936 v 23.819 l -0.154,0.986 C -16.141,-10.226 -9.838,-2.22 0,0"
                                        style={whiteLineStyle}
                                        id="path40" />
                                    </g>
                                </g>
                            </g>
                            <path
                                d="m 319.0927,336.96999 h -68.9524 v 23.3548 h 68.9524 z"
                                style={nonWhiteLineStyle}
                                id="path42" />
                            <g
                                id="g44"
                                transform="matrix(0.4,0,0,0.4,170.7699,216.27399)">
                                <g
                                    id="g46"
                                    clip-path="url(#clipPath50)">
                                    <g
                                        id="g52"
                                        transform="translate(335.4277,360.127)">
                                        <path
                                        d="m 0,0 v -22.726 c -0.057,-3.29 -0.223,-3.631 -0.623,-6.529 l -23.445,1.044 c 0.775,1.686 0.714,3.554 0.851,4.423 V 0 Z"
                                        style={whiteLineStyle}
                                        id="path54" />
                                    </g>
                                    <g
                                        id="g56"
                                        transform="translate(290.4541,360.127)">
                                        <path
                                        d="m 0,0 v -20.693 c -0.274,-6.285 1.207,-9.784 3.236,-11.049 2.44,-1.522 53.593,-3.221 53.593,-3.221 v -11.528 c -9.209,0 -30.182,-0.01 -45.103,0 -13.576,0.009 -16.15,0.372 -17.427,0.66 -9.837,2.22 -16.139,10.226 -17.416,21.026 l 0.156,0.986 V 0 Z"
                                        style={whiteLineStyle}
                                        id="path58" />
                                    </g>
                                    <g
                                        id="g60"
                                        transform="translate(245.2173,360.127)">
                                        <path
                                        d="m 0,0 -0.006,-23.203 c 0,-3.828 1.259,-6.744 3.78,-8.75 2.519,-2.008 4.806,-3.01 6.859,-3.01 h 2.12 v -11.62 H -0.006 c -6.349,0 -11.809,2.286 -16.38,6.86 -4.574,4.572 -6.861,10.08 -6.861,16.52 V 0 Z"
                                        style={whiteLineStyle}
                                        id="path62" />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="g64"
                                transform="matrix(0.4,0,0,0.4,259.54862,383.63727)">
                                <path
                                    d="M 0,0 H 23.24 V -23.38 H 35 V -35 H 23.24 l 0.018,-23.281 H 0.007 L 0,-35 h -11.76 v 11.62 H 0 Z"
                                    style={nonWhiteLineStyle}
                                    id="path66" />
                            </g>
                            <g
                                id="g68"
                                transform="matrix(0.39999918,0,0,0.40471088,170.77014,214.57731)">
                                <g
                                    id="g70"
                                    clip-path="url(#clipPath74)">
                                    <g
                                        id="g76"
                                        transform="translate(290.4658,396.7344)">
                                        <path
                                        d="m 0,0 0.003,-36.607 h -23 v 35.38 l -0.01,0.242 c -1.106,7.659 5.908,15.236 8.329,17.331 5.4,4.671 13.337,5.417 18.546,5.328 4.378,-0.075 13.916,0.315 20.373,-0.169 3.923,-0.295 7.53,-1.589 10.185,-3.589 4.621,-3.481 9.34,-8.525 10.536,-16.853 v -37.67 H 21.722 V 0 c -0.375,4.156 -2.253,6.785 -3.772,7.11 0,0 -2.8,0.614 -4.707,0.614 H 8.479 C 6.571,7.724 3.771,7.11 3.771,7.11 2.253,6.785 0.375,4.156 0,0"
                                        style={nonWhiteLineStyle}
                                        id="path78" />
                                    </g>
                                    <g
                                        id="g80"
                                        transform="translate(365.001,319)">
                                        <path
                                        d="m 0,0 c 0,3.222 -2.611,5.833 -5.833,5.833 -3.223,0 -5.834,-2.611 -5.834,-5.833 0,-3.223 2.611,-5.834 5.834,-5.834 C -2.611,-5.834 0,-3.223 0,0"
                                        style={whiteLineStyle}
                                        id="path82" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <NavLink
                    exact
                    to="./hobbies">
                    <div className="coffee">
                        <svg id="steam" width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-cup-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
                        </svg>
                    </div>
                </NavLink>
            </div>
            <div className="footer-row-bottom">
                <div>
                    <a className="footer-bottom-icon" href="https://www.github.com/tiQu" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a className="footer-bottom-icon" href="https://fi.linkedin.com/in/tilman-queitsch" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </a>
                </div>
                <div className="footer-section">
                    <div className="contact-me">
                        <a href="mailto:tqueitsch@my.bcit.ca">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                            </svg>
                            <span>Drop me a note.</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}