import type { JSX } from "react";
import clsx from "clsx";

type SalesCardProps = {color: string, icon: JSX.Element, mainText: string, cardName: string, diff: string, key?: number}

function SalesCard(props: SalesCardProps){
    return (
        <div className="bg-secondary w-full flex flex-col md:flex-row-reverse md:justify-between md:items-center lg:items-start lg:flex-col rounded-xl p-3 gap-3">
            <div className={clsx({
                "text-yellow": props.color === "yellow",
                "text-primary": props.color === "primary",
                "text-pink": props.color === "pink",
                "text-blue": props.color === "blue"
            })}>
                {props.icon}
            </div>
            <div className="flex flex-col gap-1.5">
                <h2 className="text-2xl font-bold">{props.mainText}</h2>
                <h3>{props.cardName}</h3>
                <h4 className={clsx(`text-${props.color} text-xs`)}>{`${props.diff} from yesterday`}</h4>
            </div>
        </div>
    )
}

export default SalesCard;



