import TableRow from "./tableRow";


function TopProducts() {
    return (
        <div className="w-full flex flex-col h-full rounded-xl bg-accent justify-between px-2 md:px-0">
            <h1 className="text-3xl font-bold p-6 ">Top Products</h1>
            <table className="md:w-full table-fixed border-separate border-spacing-y-5 border-spacing-x-2 md:border-spacing-x-0 text-xs md:text-sm">
                <thead className="text-gray lg:text-lg">
                    <tr>
                        <th className="w-1/4 text-start pl-2 md:pl-6 border-b-3 border-gray-600/35 pb-3">#</th>
                        <th className="w-2/4 text-start border-b-3 border-gray-600/35 pb-3">Name</th>
                        <th className="w-2/4 text-start border-b-3 border-gray-600/35 pb-3">Popularity</th>
                        <th className="w-1/4 border-b-3 border-gray-600/35 pb-3">Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow productNumber={1} productName={"Home Decore Range"} popularity={80} sales={46} color="yellow" showBorder={true}/>
                    <TableRow productNumber={2} productName={"Disney Princess Dress"} popularity={60} sales={17} color="primary" showBorder={true}/>
                    <TableRow productNumber={3} productName={"Bathroom Essentials"} popularity={50} sales={19} color="blue" showBorder={true}/>
                    <TableRow productNumber={4} productName={"Apple Smartwatch"} popularity={30} sales={29} color="pink" showBorder={false}/>
                </tbody>
            </table>
        </div>
    )
}

export default TopProducts;