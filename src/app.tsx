
//@ts-check
//react-cool-ticker by Ian Macharia
import React, {useState, useEffect} from 'react';

type Size = 'tiny' | 'small' | 'medium' | 'large' | 'massive' | 'hero' | 'gigantic'
type TickerBlobStyle = {name: 'blob'}
type TickerGradientStyle = {name: 'gradient', gradient: string}
type TickerImageStyle = {name: 'image', src: string}
type TickerPopStyle = {name: 'pop'}
type TickerStyle =
    | TickerBlobStyle
    | TickerGradientStyle
    | TickerImageStyle
    | TickerPopStyle

//cubic-bezier(.95,.05,.8,.04) - suspense
//cubic-bezier(.68,-0.55,.27,1.55) - bounce
//cubic-bezier(.18,.89,.32,1.28) - overshoot
//cubic-bezier(1,0,0,1) - fast

interface IProps {
    autoplay?: boolean,
    staticText: string | number,
    movingText: string[] | number[],
    size: Size,
    tickerStyle?: TickerStyle,
    interval: number,
}

const sizeMap: Record<Size, [string, string]> = {
    tiny: ['text-xs', '1.6rem'],
    small: ['text-sm', '2.0rem'],
    medium: ['text-base', '2.4rem'],
    large: ['text-lg', '2.4rem'],
    massive: ['text-3xl', '3.2rem'],
    hero: ['text-4xl', '3.6rem'],
    gigantic: ['text-7xl', '4.8rem'],
}

const generateTickerStyle = (style: TickerStyle) => {
    switch (style.name) {
        case 'gradient':
            return {
                background: style.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }
        case 'image':
            return {
                background: `url(${style.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundClip: 'text',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }
        default:
            return {}
    }
}

const Ticker = (props: IProps) => {
    const [tickerIndex, setTickerIndex] = useState(0)
    const [tickerTranslate, setTickerTranslate] = useState(0)
    let interval: number | null = null
    useEffect(() => {
        if (props.autoplay !== false) {
            interval = setInterval(() => {
                if (tickerIndex >= props.movingText.length) {
                    setTickerTranslate(0)
                    setTickerIndex(0)
                } else {
                    setTickerIndex(tickerIndex + 1)
                    setTickerTranslate(tickerIndex * 100 / props.movingText.length)
                }
            }, props.interval)
        }
        return (() => {interval && clearInterval(interval)})
    }, [props.interval, tickerIndex, tickerTranslate, props.autoplay])

    return (
        <div 
            className="flex justify-center cursor-pointer top md:block">
            <div className="flex">
                <span
                    style={{maxHeight: sizeMap[props.size][1]}}
                    className={`relative inline-flex px-3 pl-6 mr-0 text-gray-800 overflow-hidden
                    ${sizeMap[props.size][0] || 'text-sm'}   
                        outline-none whitespace-nowrap font-body focus:shadow-outline`}>
                    <div className="pt-1" style={{height: '100%'}}>
                        {props.staticText}
                    </div>
                    <div
                        style={{height: `calc(100% * ${props.movingText.length})`}}
                        className={`relative flex flex-col px-1 ${props.size.match(/hero|gigantic/gi) ? 'pl-4' : 'pl-1'} text-left transform`}>
                        <div style={{transform: `translateY(-${tickerTranslate}%)`}}
                            className={`select-none overflow-hidden flex flex-col transition-all duration-500 ease-in-out`}>
                            {props.movingText.map(text => {
                                return (
                                    <React.Fragment>
                                        <strong
                                            key={text}
                                            className={`${sizeMap[props.size][0] || 'text-sm'} 
                                        ${props.tickerStyle?.name === 'blob' ? 'rc_text overflow-hidden' : ''} 
                                        py-1 flex items-center whitespace-nowrap`}
                                            style={{
                                                textOverflow: 'ellipsis',
                                                ...(props?.tickerStyle?.name ? generateTickerStyle(props.tickerStyle) : {})
                                            }}>
                                            {text}
                                            {props.tickerStyle?.name === 'blob' ?
                                                <>
                                                    <div className="rc_blob1"></div>
                                                    <div className="rc_blob2"></div>
                                                    <div className="rc_blob3"></div>
                                                </> : null}
                                        </strong>

                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </span>
                          </div>
        </div>
    )
}

export default Ticker
