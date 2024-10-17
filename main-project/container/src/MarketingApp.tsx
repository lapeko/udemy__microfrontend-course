import {useEffect, useRef} from "react";
import {init} from "marketing-mf/app";

export const MarketingApp = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current && init(ref.current)
    }, []);

    return <div ref={ref}></div>
}