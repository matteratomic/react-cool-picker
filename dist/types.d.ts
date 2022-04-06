type Size = 'tiny' | 'small' | 'medium' | 'large' | 'massive' | 'hero' | 'gigantic';
type TickerBlobStyle = {
    name: 'blob';
};
type TickerGradientStyle = {
    name: 'gradient';
    gradient: string;
};
type TickerImageStyle = {
    name: 'image';
    src: string;
};
type TickerPopStyle = {
    name: 'pop';
};
type TickerStyle = TickerBlobStyle | TickerGradientStyle | TickerImageStyle | TickerPopStyle;
interface IProps {
    autoplay?: boolean;
    staticText: string | number;
    movingText: string[] | number[];
    size: Size;
    tickerStyle?: TickerStyle;
    interval: number;
}
export const ReactTicker: (props: IProps) => JSX.Element;

//# sourceMappingURL=types.d.ts.map
