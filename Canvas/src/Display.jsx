const Display = ({ element, onClose }) => {
    if (!element) return null;

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
                <div>
                    <div className="font-bold text-xl text-black">{element.name}</div>
                    <div className="text-sm text-gray-600">{element.family}</div>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded cursor-pointer"
                    aria-label="Close details"
                >
                    ✕
                </button>
            </div>

            <div className="p-4 overflow-y-auto">
                <div className="mb-2"><span className="font-semibold">Symbol:</span> {element.symbol}</div>
                <div className="mb-2"><span className="font-semibold">Atomic Number:</span> {element.number}</div>
                <div className="mb-2"><span className="font-semibold">Atomic Mass:</span> {element.mass}</div>
                {element.group && (
                    <div className="mb-2"><span className="font-semibold">Group:</span> {element.group}</div>
                )}
                {element.period && (
                    <div className="mb-2"><span className="font-semibold">Period:</span> {element.period}</div>
                )}
                {element.family && (
                    <div className="mb-2"><span className="font-semibold">Family:</span> {element.family}</div>
                )}
                {element.melting && (
                    <div className="mb-2"><span className="font-semibold">Melting:</span> {element.melting}</div>
                )}
{element.boiling && (
                    <div className="mb-2"><span className="font-semibold">Boiling:</span> {element.boiling}</div>
                )}
                {element.discover && (
                    <div className="mb-2"><span className="font-semibold">Discoverd by:</span> {element.discover}</div>
                )}

        {/* Add any other fields you want to surface */}
            </div>
        </div>
    );
};

export default Display;
