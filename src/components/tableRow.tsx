import clsx from "clsx";
import PopularityProgressBar from "./popularityProgress";
import TPSalesCard from "./topProductsSalesCard";

type TableRowProps = {
    productNumber: number;
    productName: string;
    popularity: number;
    sales: number;
    color: string;
    showBorder: boolean;
}

function TableRow(props: TableRowProps){
    return(
        <tr>
            <td className={clsx({
                "border-b-3 border-gray-600/35 pb-3 pl-2 md:pl-6": props.showBorder === true,
                "pb-3 pl-2 md:pl-6": props.showBorder === false,
            })}>{`0${props.productNumber}`}</td>
            <td className={clsx({
                "border-b-3 border-gray-600/35 pb-3": props.showBorder === true,
                "pb-3 ": props.showBorder === false,
            })}>{props.productName}</td>
            <td className={clsx({
                "border-b-3 border-gray-600/35 pb-3": props.showBorder === true,
                "pb-3 ": props.showBorder === false,
            })}>
                <PopularityProgressBar color={props.color} percentage={props.popularity} />
            </td>
            <td className={clsx({
                "border-b-3 border-gray-600/35 pb-3": props.showBorder === true,
                "pb-3 ": props.showBorder === false,
            })}>
                <TPSalesCard color={props.color} percentage={props.sales}/>
            </td>
        </tr>
    );
};

export default TableRow;