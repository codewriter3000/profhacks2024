//import Information from "../pages/profile/Information/information.astro"

import { useRef } from 'react'
import { cn, getMunicipalityCode } from '../lib/utils'
import { Link } from 'react-router-dom';

export default ({ className = '', county, municipalities }) => {

    const localMunicipalities = useRef(municipalities)
    
    return (
        <div className={cn("p-6 bg-slate-200/30 rounded-3xl", className)}>
            <table className="table w-full text-sm text-left border-collapse w-lg border border-slate">
                <thead className="text-xs bg-gray-50/30 border-collapse w-auto border border-slate">
                    <th>Town</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {municipalities.map(muni => {
                        return (
                            <tr key={muni.municipality_code} className="bg-slate-100/30 border-b">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    {muni.municipality_name}
                                </th>
                                <th className="px-6 py-4">
                                    <button><a href={`/profile/${muni.municipality_code}`}>View</a></button>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}