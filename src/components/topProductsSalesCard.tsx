import clsx from "clsx";

type TPSalesCardProps = {
    color: string;
    percentage: number;
}
function TPSalesCard(props: TPSalesCardProps){
    return (
        <div className={clsx({
            "w-fit mx-auto px-3 py-2 text-center text-yellow border border-yellow rounded-lg bg-yellow/5": props.color === "yellow",
            "w-fit mx-auto px-3 py-2 text-center text-blue border border-blue rounded-lg bg-blue/5": props.color === "blue",
            "w-fit mx-auto px-3 py-2 text-center text-pink border border-pink rounded-lg bg-pink/5": props.color === "pink",
            "w-fit mx-auto px-3 py-2 text-center text-primary border border-primary rounded-lg bg-primary/5": props.color === "primary",
        })}>
            {`${props.percentage}%`}
        </div>
    );
};

export default TPSalesCard;