import clsx from "clsx";

type ProgressBarProps = {
    percentage: number;
    color: string;
}

function PopularityProgressBar(props: ProgressBarProps){
    return (
        <div className="w-full h-1.5 bg-gray rounded-full">
            <div className={clsx({
                            "bg-yellow h-full rounded-full ": props.color === "yellow",
                            "bg-primary h-full rounded-full": props.color === "primary",
                            "bg-pink h-full rounded-full": props.color === "pink",
                            "bg-blue h-full rounded-full": props.color === "blue"
                })}
                style={{ width: `${props.percentage}%` }}></div>
        </div>
    );
}

export default PopularityProgressBar;