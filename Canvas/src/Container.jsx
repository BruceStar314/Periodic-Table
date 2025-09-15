import { useState } from "react";
import Elements from "./Elements";
import { elements } from "./Elements";
import Display from "./Display";

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
                <div className="grid grid-cols-18 gap-1 max-w-6xl text-black">
                    {elements.map((element) => (
                        <Elements 
                            key={element.number} 
                            element={element} 
                            onClick={handleElementClick}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Container;
