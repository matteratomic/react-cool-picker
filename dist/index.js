var $iA2ta$reactjsxruntime = require("react/jsx-runtime");
var $iA2ta$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "ReactTicker", () => $4b7f4b18f5f15172$export$2e2bcd8739ae039);


const $4b7f4b18f5f15172$var$sizeMap = {
    tiny: [
        'text-xs',
        '1.6rem'
    ],
    small: [
        'text-sm',
        '2.0rem'
    ],
    medium: [
        'text-base',
        '2.4rem'
    ],
    large: [
        'text-lg',
        '2.4rem'
    ],
    massive: [
        'text-3xl',
        '3.2rem'
    ],
    hero: [
        'text-4xl',
        '3.6rem'
    ],
    gigantic: [
        'text-7xl',
        '4.8rem'
    ]
};
const $4b7f4b18f5f15172$var$generateTickerStyle = (style)=>{
    switch(style.name){
        case 'gradient':
            return {
                background: style.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            };
        case 'image':
            return {
                background: `url(${style.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundClip: 'text',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            };
        default:
            return {};
    }
};
const $4b7f4b18f5f15172$var$Ticker = (props)=>{
    const [tickerIndex, setTickerIndex] = $iA2ta$react.useState(0);
    const [tickerTranslate, setTickerTranslate] = $iA2ta$react.useState(0);
    let interval = null;
    $iA2ta$react.useEffect(()=>{
        if (props.autoplay !== false) interval = setInterval(()=>{
            if (tickerIndex >= props.movingText.length) {
                setTickerTranslate(0);
                setTickerIndex(0);
            } else {
                setTickerIndex(tickerIndex + 1);
                setTickerTranslate(tickerIndex * 100 / props.movingText.length);
            }
        }, props.interval);
        return ()=>{
            interval && clearInterval(interval);
        };
    }, [
        props.interval,
        tickerIndex,
        tickerTranslate,
        props.autoplay
    ]);
    return /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx("div", {
        className: "flex justify-center cursor-pointer top md:block",
        children: /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx("div", {
            className: "flex",
            children: /*#__PURE__*/ $iA2ta$reactjsxruntime.jsxs("span", {
                style: {
                    maxHeight: $4b7f4b18f5f15172$var$sizeMap[props.size][1]
                },
                className: `relative inline-flex px-3 pl-6 mr-0 text-gray-800 overflow-hidden
                    ${$4b7f4b18f5f15172$var$sizeMap[props.size][0] || 'text-sm'}   
                        outline-none whitespace-nowrap font-body focus:shadow-outline`,
                children: [
                    /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx("div", {
                        className: "pt-1",
                        style: {
                            height: '100%'
                        },
                        children: props.staticText
                    }),
                    /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx("div", {
                        style: {
                            height: `calc(100% * ${props.movingText.length})`
                        },
                        className: `relative flex flex-col px-1 ${props.size.match(/hero|gigantic/gi) ? 'pl-4' : 'pl-1'} text-left transform`,
                        children: /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx("div", {
                            style: {
                                transform: `translateY(-${tickerTranslate}%)`
                            },
                            className: `select-none overflow-hidden flex flex-col transition-all duration-500 ease-in-out`,
                            children: props.movingText.map((text)=>{
                                return /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx(($parcel$interopDefault($iA2ta$react)).Fragment, {
                                    children: /*#__PURE__*/ $iA2ta$reactjsxruntime.jsxs("strong", {
                                        className: `${$4b7f4b18f5f15172$var$sizeMap[props.size][0] || 'text-sm'} 
                                        ${props.tickerStyle?.name === 'blob' ? 'rc_text overflow-hidden' : ''} 
                                        py-1 flex items-center whitespace-nowrap`,
                                        style: {
                                            textOverflow: 'ellipsis',
                                            ...props?.tickerStyle?.name ? $4b7f4b18f5f15172$var$generateTickerStyle(props.tickerStyle) : {}
                                        },
                                        children: [
                                            text,
                                            props.tickerStyle?.name === 'blob' ? /*#__PURE__*/ $iA2ta$reactjsxruntime.jsxs($iA2ta$reactjsxruntime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx("div", {
                                                        className: "rc_blob1"
                                                    }),
                                                    /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx("div", {
                                                        className: "rc_blob2"
                                                    }),
                                                    /*#__PURE__*/ $iA2ta$reactjsxruntime.jsx("div", {
                                                        className: "rc_blob3"
                                                    })
                                                ]
                                            }) : null
                                        ]
                                    }, text)
                                });
                            })
                        })
                    })
                ]
            })
        })
    });
};
var $4b7f4b18f5f15172$export$2e2bcd8739ae039 = $4b7f4b18f5f15172$var$Ticker;




//# sourceMappingURL=index.js.map
