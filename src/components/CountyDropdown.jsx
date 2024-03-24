export default ({ counties, municipalities, setValue }) => {

    const handleCountyChange = (e) => {
        setValue(municipalities.filter(muni => muni.county_code === Number(e.target.value)))
    }

    return (
        <div className="flex flex-row justify-center items-center">
            <label htmlFor="counties">Counties</label>
            <select name="counties" className="rounded-3xl" onChange={handleCountyChange}>
                <option value={0}>Please select an option</option>
                {counties.map(county => {
                    return (
                        <option key={county.county_code} value={county.county_code}>{county.county_name}</option>
                    )
                })}
            </select>
        </div>
    )
}