import MunicipalityTable from './MunicipalityTable'
import CountyDropdown from './CountyDropdown'
import { useState } from 'react'

export default ({ counties, municipalities }) => {
    const [localMunicipalities, setLocalMunicipalities] = useState(municipalities)

    return (
        <>
            <div className="p-6 bg-slate-200/30 rounded-3xl">
                <h1 className="text-3xl mb-4 text-center">New Jersey Shoretown Water Quality Profiles</h1>
                <CountyDropdown counties={counties} municipalities={municipalities} setValue={setLocalMunicipalities} />
            </div>
            <MunicipalityTable municipalities={localMunicipalities} />
        </>
    )
}