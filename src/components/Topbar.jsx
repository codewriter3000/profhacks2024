export default () => {
    return (
        <div className="p-6 bg-slate-200/30 rounded-3xl">
            <h1 className="text-center text-3xl">New Jersey Shoretown Profiles</h1>
            <br></br>
            <label for="Counties">Choose a County: </label>
            <select className="p-2 bg-slate-200/30 rounded-3xl">
                <optgroup label="Counties">
                    <option value="Cape May font-sans">Cape May</option>
                </optgroup>
            </select>
            
            <label for="Shore Towns">Choose a Shore Town: </label>
            <select className="p-2 bg-slate-200/30 rounded-3xl">
                <optgroup label="Shore Towns">
                    <option value="Wildwood font-sans">Wildwood</option>
                </optgroup>
            </select>
        </div>
    )
}