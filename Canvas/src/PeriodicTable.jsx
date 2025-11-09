// PeriodicTable.jsx
import Elements, { elements } from "./Elements";

const PeriodicTable = ({ onClick }) => {
    // Step 1: Create arrays for main groups and special elements
    const mainGroups = Array.from({ length: 18 }, () => []);
    const lanthanides = [];
    const actinides = [];

    // Step 2: Sort elements into appropriate arrays
    elements.forEach(el => {
        if (el.number >= 58 && el.number <= 71) {
            lanthanides.push(el);
        } else if (el.number >= 90 && el.number <= 103) {
            actinides.push(el);
        } else {
            const groupIndex = el.group ? el.group - 1 : 17;
            mainGroups[groupIndex].push(el);
        }
    });

    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-5">
                {mainGroups.map((groupElems, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        {groupElems.map(el => (
                            <Elements key={el.number} element={el} onClick={onClick} />
                        ))}
                    </div>
                ))}
            </div>
            
            <div className="flex flex-col gap-4 mt-8">
                <div className="flex gap-1">
                    {lanthanides.map(el => (
                        <Elements key={el.number} element={el} onClick={onClick} />
                    ))}
                </div>
                <div className="flex gap-1">
                    {actinides.map(el => (
                        <Elements key={el.number} element={el} onClick={onClick} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeriodicTable;