export default () => {
    return (
        <div className="p-6 bg-slate-200/30 rounded-3xl">
            <table className="table w-full text-sm text-left border-collapse w-lg border border-slate">
                <thead className="text-xs bg-gray-50/30 border-collapse w-auto border border-slate">
                    <th>Town</th>
                    <th>County</th>
                    <th>Population</th>
                    <th>Cost of Living Index</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr className="bg-slate-100/30 border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            West Wildwood
                        </th>
                        <th className="px-6 py-4">
                            Cape May
                        </th>
                        <th className="px-6 py-4">
                            35,076
                        </th>
                        <th className="px-6 py-4">
                            107
                        </th>
                        <th className="px-6 py-4">
                            <button>View</button>
                        </th>
                    </tr>
                    <tr className="bg-slate-200/30 border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            Seaside
                        </th>
                        <th className="px-6 py-4">
                            Ocean
                        </th>
                        <th className="px-6 py-4">
                            47,189
                        </th>
                        <th className="px-6 py-4">
                            104
                        </th>
                        <th className="px-6 py-4">
                            <button>View</button>
                        </th>
                    </tr>
                    <tr className="bg-slate-100/30 border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            Harvey Cedars
                        </th>
                        <th className="px-6 py-4">
                            Ocean
                        </th>
                        <th className="px-6 py-4">
                            12,123
                        </th>
                        <th className="px-6 py-4">
                            200
                        </th>
                        <th className="px-6 py-4">
                            <button>View</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}