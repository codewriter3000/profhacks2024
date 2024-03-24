import Button from './Button'

export default ({ municipalities }) => {

    return (
        <div className={"mt-6 p-6 bg-slate-200/30 rounded-3xl"}>
            {!municipalities ? <div>Please select a county</div> :
                <table className="table w-full text-sm">
                    <thead className="text-xs bg-gray-50/30 border">
                        <tr>
                            <th className='p-6 text-2xl border-r'>Municipality</th>
                            <th className='text-2xl'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {municipalities.map(muni => {
                            return (
                                <tr key={muni.municipality_code} className="bg-slate-100/30 border">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-r">
                                        {muni.municipality_name}
                                    </th>
                                    <th className="px-6 py-4">
                                        <Button><a href={`/profile/${muni.municipality_code}`}>View</a></Button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}