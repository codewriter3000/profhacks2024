import { useRef, useState } from 'react'
import MunicipalityTable from './MunicipalityTable'

export default ({ counties, municipalities }) => {
    const county = useRef(0)

    const handleCountyChange = () => {
        console.log(county.current['value'])
    }

    return (
        <div className="p-6 bg-slate-200/30 rounded-3xl">
            <h1 className="text-center text-3xl">New Jersey Shoretown Profiles</h1>
            <br></br>
            <label htmlFor="counties">Counties</label>
            <select name="counties" className="Counties rounded-3x1" ref={county} onChange={handleCountyChange}>
                <option value={0}>Please select an option</option>
                    {counties.map(county => {
                        return (
                            <option value={county.county_code}>{county.county_name}</option>
                        )
                    })}
            </select>
        </div>
        <div className="p-6 bg-slate-200/30 rounded-3xl">
            <h1 className="text-3xl">New Jersey Shoretown Profiles</h1>
        </div>
        <MunicipalityTable municipalities={municipalities} county={county} />
    </>
    )
}