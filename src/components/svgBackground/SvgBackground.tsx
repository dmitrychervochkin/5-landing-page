import "./svgBackground.scss";

export const SvgBackground = () => {
    return (
        <>
            <svg
                height="1500px"
                width="100%"
                className="wave wave-top"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient
                        id="waveGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#BB2E97" />
                        <stop offset="100%" stopColor="#7834bf" />
                    </linearGradient>
                </defs>

                <path
                    fill="url(#waveGradient)"
                    d="M0,140 C490,260 900,110 1440,160 L1440,320 L0,320 Z"
                />
            </svg>
            <svg
                height="1600px"
                width="100%"
                className="wave wave-bottom"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#323055"
                    d="M0,120 C290,260 900,130 1440,150 L1440,320 L0,320 Z"
                />
            </svg>
        </>
    );
};
