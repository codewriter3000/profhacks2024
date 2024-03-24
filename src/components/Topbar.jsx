export default () => {
    return (
        <div className="p-6 bg-slate-200/30 rounded-3xl">
            <h1 className="text-center text-3xl">New Jersey Shoretown Profiles</h1>
            <br></br>
            <div class="flex">
                <div class="p-4 flex-1 w-64 rounded-lg flex items-center justify-center bg-slate-500/30 shadow-lg">
                    <select className="text-emerald-600 p-2 bg-slate-200/30 rounded-3xl">
                        <optgroup label="Counties">
                            <option selected disabled>Choose a County</option>
                            <option value="Cape May font-sans">Cape May</option>
                        </optgroup>
                    </select>
                </div>
                <div class="p-4 flex-1 w-32 rounded-lg flex items-center justify-center bg-slate-500/30 shadow-lg">
                    <select className="text-emerald-600 p-2 bg-slate-200/30 rounded-3xl">
                        <optgroup className="" label="Shore Towns">
                            <option selected disabled> Choose a Shore Town</option>
                            <option className="" value="Wildwood font-sans">Wildwood</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </div>
    )
}