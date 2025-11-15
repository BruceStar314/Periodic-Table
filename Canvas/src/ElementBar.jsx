const ElementBar = ({ elements, onSelectElement}) => {
    return (
        <div className="h-screen w-24 bg-(gray-200) overflow-y-auto p-2">
            {elements.map((element) => (
                <div
                    key={element.atomicNumber}
                    className="cursor-pointer p-2 mb-2 bg-white rounded shadow hover:bg-gray-100 text-center"
                    onClick={() => onSelectElement(element)}
                >
                    <div className="text-sm font-bold">{element.symbol}</div>
                    <div className="text-xs">{element.atomicNumber}</div>
                </div>
            ))}
        </div>
    )
}

export default ElementBar;