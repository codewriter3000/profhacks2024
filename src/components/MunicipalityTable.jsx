import { useRef } from 'react'
import { cn } from '../lib/utils'

export default ({ className = '', county, municipalities }) => {

    const localMunicipalities = useRef(municipalities)
    
    return (
        <div className={cn("p-6 bg-slate-200/30 rounded-3xl", className)}>
            <table className="table w-full text-sm text-left">
                <thead className="text-xs bg-gray-50/30">
                    <th>Town</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {municipalities.map(muni => {
                        return (
                            <tr className="bg-slate-100/30 border-b">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    {muni.municipality_name}
                                </th>
                                <th className="px-6 py-4">
                                    <button>View</button>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}