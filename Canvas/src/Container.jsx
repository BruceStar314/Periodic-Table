import { useState } from "react";
import Display from "./Display";
import PeriodicTable from "./PeriodicTable";

const Container = () => {
    const [selectedElement, setSelectedElement] = useState(null);

    const handleElementClick = (element) => {
        setSelectedElement(element);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen w-screen p-4">
                <Display element={selectedElement} />
                <h1 className="text-3xl font-bold text-black my-8">The Periodic Table of Elements</h1>
                <div className="max-w-6xl text-black">
                    <PeriodicTable onClick={handleElementClick} />
                </div>
            </div>
        </>
    )
}

export default Container;
