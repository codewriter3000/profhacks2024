export default () => {
    return (
        <div className="p-6 bg-slate-200/30 rounded-3xl">
            <h1 className="text-center text-3xl">New Jersey Shoretown Profiles</h1>
            <br></br>
            <div class="flex">
                <select class="text-emerald-600 p-4 flex-1 w-64 rounded-lg flex items-center justify-center bg-slate-200/30 shadow-lg" >
                    <optgroup label="Counties">
                        <option selected disabled>Choose a County</option>
                        <option value="Cape May font-sans">Cape May</option>
                    </optgroup>
                </select>

                <select class="text-emerald-600 p-4 flex-1 w-32 rounded-lg flex items-center justify-center bg-slate-200/30 shadow-lg" >
                    <optgroup className="font-sans" label="Shore Towns">
                        <option selected disabled> Choose a Shore Town</option>
                        <option  value="Wildwood">Wildwood</option>
                    </optgroup>
                </select>
            </div>
        </div>
    )
}