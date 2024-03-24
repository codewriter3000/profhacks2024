export default (props) => {
    return (
        <button className="transition ease-in-out delay-150 border rounded-lg bg-white/30 px-4 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-white/60 duration-300">{props.children}</button>
    )
}