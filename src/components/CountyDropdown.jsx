export default ({ counties, municipalities, setValue }) => {
    const handleCountyChange = (e) => {
        if(e.target.value == "0"){
            setValue(municipalities)
        }
        setValue(municipalities.filter(muni => muni.county_code === Number(e.target.value)))
    }

    return (
        <div className="flex flex-row justify-center items-center">
            <label className="whitespace-pre" htmlFor="counties">Select a county: </label>
            <select name="counties" className="p-2 bg-white/30 px-4 py-1 rounded-3xl" onChange={handleCountyChange}>
                <option value={0} disabled></option>
                {counties.map(county => {
                    return (
                        <option key={county.county_code} value={county.county_code}>{county.county_name}</option>
                    )
                })}
            </select>
        </div>
    )
}