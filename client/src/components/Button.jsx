function Button(props) {
    return (
        <button
            className="bg-transparent hover:bg-amber-100 text-gray-700 font-normal hover:text-amber-700 py-1 px-4 border border-gray-500 rounded"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
export default Button;
