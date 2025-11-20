import { useState } from "react";
import Display from "./Display";
import PeriodicTable from "./PeriodicTable";
import ElementBar from "./ElementBar";

const Container = () => {
    const [selectedElement, setSelectedElement] = useState(null);

    const handleElementClick = (element) => {
        setSelectedElement(element);
    };
    const closeDrawer = () => setSelectedElement(null);

    return (
        <>
            <div className="min-h-screen p-4">
                <h1 className="text-3xl font-bold text-black mb-6 text-center">The Periodic Table of Elements</h1>

                <div className="flex gap-4">

                    {/* Center: Periodic table */}
                    <main className="flex-1">
                        <PeriodicTable onClick={handleElementClick} />
                    </main>
                </div>
            </div>

            {/* Overlay when drawer is open */}
            {selectedElement && (
                <div
                    className="fixed inset-0 bg-opacity-30 bg-opacity-30 z-40"
                    onClick={closeDrawer}
                    aria-hidden
                />
            )}

            {/* Right-side drawer */}
            <aside
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${selectedElement ? 'translate-x-0' : 'translate-x-full'}`}>
                <Display element={selectedElement} onClose={closeDrawer} />
            </aside>
        </>
    )
}

export default Container;
