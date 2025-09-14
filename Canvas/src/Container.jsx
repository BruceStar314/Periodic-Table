import Elements from "./Elements";
import { elements } from "./Elements";

const Container = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-screen p-4">
            <h1 className="text-3xl font-bold text-black mb-8">The Periodic Table of Elements</h1>
            <div className="grid grid-cols-18 gap-1 max-w-6xl text-black">
                {elements.map((element) => (
                    <Elements key={element.number} element={element} />
                ))}
            </div>
        </div>
    )
}

export default Container
