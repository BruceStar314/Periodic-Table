const Display = ({ element }) => {
    if (!element) {
        return (
            <div className="border border-black flex items-center justify-center h-28 w-64">
                Click on an element to see its details
            </div>
        );
    }

    return (
        <div className="border border-black p-4 h-28 w-64">
            <div className="font-bold text-lg text-red-500">{element.name}</div>
            <div className="text-xs text-red-500">Symbol: {element.symbol}</div>
            <div className="text-xs text-red-500">Atomic Number: {element.number}</div>
            <div className="text-xs text-red-500">Atomic Mass: {element.mass}</div>
        </div>
    );
};

export default Display;
