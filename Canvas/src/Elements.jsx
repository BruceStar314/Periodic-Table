// Elements component that renders a single element
const Elements = ({ element, onClick }) => {
    return (
        <button 
            className="border p-2 text-center cursor-pointer hover:bg-gray-100 transition-colors" 
            onClick={() => onClick(element)}
        >
            <div className="font-bold">{element.symbol}</div>
            <div className="text-xs">{element.number}</div>
            <div className="text-xs">{element.name}</div>
            <div className="text-xs">{element.mass}</div>
        </button>
    );
};

// Elements data array
export const elements = [
    // Period 1
    {number: 1, name: "Hydrogen", symbol: "H", mass: 1.008, group: 1, period: 1},
    {number: 2, name: "Helium", symbol: "He", mass: 4.003, group: 18, period: 1},
    
    // Period 2
    {number: 3, name: "Lithium", symbol: "Li", mass: 6.94, group: 1, period: 2},
    {number: 4, name: "Beryllium", symbol: "Be", mass: 9.012, group: 2, period: 2},
    {number: 5, name: "Boron", symbol: "B", mass: 10.81, group: 13, period: 2},
    {number: 6, name: "Carbon", symbol: "C", mass: 12.01, group: 14, period: 2},
    {number: 7, name: "Nitrogen", symbol: "N", mass: 14.01, group: 15, period: 2},
    {number: 8, name: "Oxygen", symbol: "O", mass: 16.00, group: 16, period: 2},
    {number: 9, name: "Fluorine", symbol: "F", mass: 19.00, group: 17, period: 2},
    {number: 10, name: "Neon", symbol: "Ne", mass: 20.18, group: 18, period: 2},
    
    // Period 3
    {number: 11, name: "Sodium", symbol: "Na", mass: 22.99, group: 1, period: 3},
    {number: 12, name: "Magnesium", symbol: "Mg", mass: 24.31, group: 2, period: 3},
    {number: 13, name: "Aluminum", symbol: "Al", mass: 26.98, group: 13, period: 3},
    {number: 14, name: "Silicon", symbol: "Si", mass: 28.09, group: 14, period: 3},
    {number: 15, name: "Phosphorus", symbol: "P", mass: 30.97, group: 15, period: 3},
    {number: 16, name: "Sulfur", symbol: "S", mass: 32.07, group: 16, period: 3},
    {number: 17, name: "Chlorine", symbol: "Cl", mass: 35.45, group: 17, period: 3},
    {number: 18, name: "Argon", symbol: "Ar", mass: 39.95, group: 18, period: 3},
    
    // Period 4
    {number: 19, name: "Potassium", symbol: "K", mass: 39.10, group: 1, period: 4},
    {number: 20, name: "Calcium", symbol: "Ca", mass: 40.08, group: 2, period: 4},
    {number: 21, name: "Scandium", symbol: "Sc", mass: 44.96, group: 3, period: 4},
    {number: 22, name: "Titanium", symbol: "Ti", mass: 47.87, group: 4, period: 4},
    {number: 23, name: "Vanadium", symbol: "V", mass: 50.94, group: 5, period: 4},
    {number: 24, name: "Chromium", symbol: "Cr", mass: 52.00, group: 6, period: 4},
    {number: 25, name: "Manganese", symbol: "Mn", mass: 54.94, group: 7, period: 4},
    {number: 26, name: "Iron", symbol: "Fe", mass: 55.85, group: 8, period: 4},
    {number: 27, name: "Cobalt", symbol: "Co", mass: 58.93, group: 9, period: 4},
    {number: 28, name: "Nickel", symbol: "Ni", mass: 58.69, group: 10, period: 4},
    {number: 29, name: "Copper", symbol: "Cu", mass: 63.55, group: 11, period: 4},
    {number: 30, name: "Zinc", symbol: "Zn", mass: 65.41, group: 12, period: 4},
    {number: 31, name: "Gallium", symbol: "Ga", mass: 69.72, group: 13, period: 4},
    {number: 32, name: "Germanium", symbol: "Ge", mass: 72.63, group: 14, period: 4},
    {number: 33, name: "Arsenic", symbol: "As", mass: 74.92, group: 15, period: 4},
    {number: 34, name: "Selenium", symbol: "Se", mass: 78.96, group: 16, period: 4},
    {number: 35, name: "Bromine", symbol: "Br", mass: 79.90, group: 17, period: 4},
    {number: 36, name: "Krypton", symbol: "Kr", mass: 83.80, group: 18, period: 4},
    
    // Period 5
    {number: 37, name: "Rubidium", symbol: "Rb", mass: 85.47, group: 1, period: 5},
    {number: 38, name: "Strontium", symbol: "Sr", mass: 87.62, group: 2, period: 5},
    {number: 39, name: "Yttrium", symbol: "Y", mass: 88.91, group: 3, period: 5},
    {number: 40, name: "Zirconium", symbol: "Zr", mass: 91.22, group: 4, period: 5},
    {number: 41, name: "Niobium", symbol: "Nb", mass: 92.91, group: 5, period: 5},
    {number: 42, name: "Molybdenum", symbol: "Mo", mass: 95.95, group: 6, period: 5},
    {number: 43, name: "Technetium", symbol: "Tc", mass: 98.00, group: 7, period: 5},
    {number: 44, name: "Ruthenium", symbol: "Ru", mass: 101.07, group: 8, period: 5},
    {number: 45, name: "Rhodium", symbol: "Rh", mass: 102.91, group: 9, period: 5},
    {number: 46, name: "Palladium", symbol: "Pd", mass: 106.42, group: 10, period: 5},
    {number: 47, name: "Silver", symbol: "Ag", mass: 107.87, group: 11, period: 5},
    {number: 48, name: "Cadmium", symbol: "Cd", mass: 112.41, group: 12, period: 5},
    {number: 49, name: "Indium", symbol: "In", mass: 114.82, group: 13, period: 5},
    {number: 50, name: "Tin", symbol: "Sn", mass: 118.71, group: 14, period: 5},
    {number: 51, name: "Antimony", symbol: "Sb", mass: 121.76, group: 15, period: 5},
    {number: 52, name: "Tellurium", symbol: "Te", mass: 127.60, group: 16, period: 5},
    {number: 53, name: "Iodine", symbol: "I", mass: 126.90, group: 17, period: 5},
    {number: 54, name: "Xenon", symbol: "Xe", mass: 131.29, group: 18, period: 5},
    
    // Period 6
    {number: 55, name: "Cesium", symbol: "Cs", mass: 132.91, group: 1, period: 6},
    {number: 56, name: "Barium", symbol: "Ba", mass: 137.33, group: 2, period: 6},
    // Lanthanides
    {number: 57, name: "Lanthanum", symbol: "La", mass: 138.91, group: 3, period: 6},
    {number: 58, name: "Cerium", symbol: "Ce", mass: 140.12, group: null, period: 6},
    {number: 59, name: "Praseodymium", symbol: "Pr", mass: 140.91, group: null, period: 6},
    {number: 60, name: "Neodymium", symbol: "Nd", mass: 144.24, group: null, period: 6},
    {number: 61, name: "Promethium", symbol: "Pm", mass: 145.00, group: null, period: 6},
    {number: 62, name: "Samarium", symbol: "Sm", mass: 150.36, group: null, period: 6},
    {number: 63, name: "Europium", symbol: "Eu", mass: 151.96, group: null, period: 6},
    {number: 64, name: "Gadolinium", symbol: "Gd", mass: 157.25, group: null, period: 6},
    {number: 65, name: "Terbium", symbol: "Tb", mass: 158.93, group: null, period: 6},
    {number: 66, name: "Dysprosium", symbol: "Dy", mass: 162.50, group: null, period: 6},
    {number: 67, name: "Holmium", symbol: "Ho", mass: 164.93, group: null, period: 6},
    {number: 68, name: "Erbium", symbol: "Er", mass: 167.26, group: null, period: 6},
    {number: 69, name: "Thulium", symbol: "Tm", mass: 168.93, group: null, period: 6},
    {number: 70, name: "Ytterbium", symbol: "Yb", mass: 173.05, group: null, period: 6},
    {number: 71, name: "Lutetium", symbol: "Lu", mass: 174.97, group: 3, period: 6},
    
    // Continue with Period 6
    {number: 72, name: "Hafnium", symbol: "Hf", mass: 178.49, group: 4, period: 6},
    {number: 73, name: "Tantalum", symbol: "Ta", mass: 180.95, group: 5, period: 6},
    {number: 74, name: "Tungsten", symbol: "W", mass: 183.84, group: 6, period: 6},
    {number: 75, name: "Rhenium", symbol: "Re", mass: 186.21, group: 7, period: 6},
    {number: 76, name: "Osmium", symbol: "Os", mass: 190.23, group: 8, period: 6},
    {number: 77, name: "Iridium", symbol: "Ir", mass: 192.22, group: 9, period: 6},
    {number: 78, name: "Platinum", symbol: "Pt", mass: 195.08, group: 10, period: 6},
    {number: 79, name: "Gold", symbol: "Au", mass: 196.97, group: 11, period: 6},
    {number: 80, name: "Mercury", symbol: "Hg", mass: 200.59, group: 12, period: 6},
    {number: 81, name: "Thallium", symbol: "Tl", mass: 204.38, group: 13, period: 6},
    {number: 82, name: "Lead", symbol: "Pb", mass: 207.2, group: 14, period: 6},
    {number: 83, name: "Bismuth", symbol: "Bi", mass: 208.98, group: 15, period: 6},
    {number: 84, name: "Polonium", symbol: "Po", mass: 209.00, group: 16, period: 6},
    {number: 85, name: "Astatine", symbol: "At", mass: 210.00, group: 17, period: 6},
    {number: 86, name: "Radon", symbol: "Rn", mass: 222.00, group: 18, period: 6},
    
    // Period 7
    {number: 87, name: "Francium", symbol: "Fr", mass: 223.00, group: 1, period: 7},
    {number: 88, name: "Radium", symbol: "Ra", mass: 226.00, group: 2, period: 7},
    // Actinides
    {number: 89, name: "Actinium", symbol: "Ac", mass: 227.00, group: 3, period: 7},
    {number: 90, name: "Thorium", symbol: "Th", mass: 232.04, group: null, period: 7},
    {number: 91, name: "Protactinium", symbol: "Pa", mass: 231.04, group: null, period: 7},
    {number: 92, name: "Uranium", symbol: "U", mass: 238.03, group: null, period: 7},
    {number: 93, name: "Neptunium", symbol: "Np", mass: 237.00, group: null, period: 7},
    {number: 94, name: "Plutonium", symbol: "Pu", mass: 244.00, group: null, period: 7},
    {number: 95, name: "Americium", symbol: "Am", mass: 243.00, group: null, period: 7},
    {number: 96, name: "Curium", symbol: "Cm", mass: 247.00, group: null, period: 7},
    {number: 97, name: "Berkelium", symbol: "Bk", mass: 247.00, group: null, period: 7},
    {number: 98, name: "Californium", symbol: "Cf", mass: 251.00, group: null, period: 7},
    {number: 99, name: "Einsteinium", symbol: "Es", mass: 252.00, group: null, period: 7},
    {number: 100, name: "Fermium", symbol: "Fm", mass: 257.00, group: null, period: 7},
    {number: 101, name: "Mendelevium", symbol: "Md", mass: 258.00, group: null, period: 7},
    {number: 102, name: "Nobelium", symbol: "No", mass: 259.00, group: null, period: 7},
    {number: 103, name: "Lawrencium", symbol: "Lr", mass: 262.00, group: 3, period: 7},
    
    // Continue with Period 7
    {number: 104, name: "Rutherfordium", symbol: "Rf", mass: 267.00, group: 4, period: 7},
    {number: 105, name: "Dubnium", symbol: "Db", mass: 270.00, group: 5, period: 7},
    {number: 106, name: "Seaborgium", symbol: "Sg", mass: 271.00, group: 6, period: 7},
    {number: 107, name: "Bohrium", symbol: "Bh", mass: 270.00, group: 7, period: 7},
    {number: 108, name: "Hassium", symbol: "Hs", mass: 277.00, group: 8, period: 7},
    {number: 109, name: "Meitnerium", symbol: "Mt", mass: 276.00, group: 9, period: 7},
    {number: 110, name: "Darmstadtium", symbol: "Ds", mass: 281.00, group: 10, period: 7},
    {number: 111, name: "Roentgenium", symbol: "Rg", mass: 282.00, group: 11, period: 7},
    {number: 112, name: "Copernicium", symbol: "Cn", mass: 285.00, group: 12, period: 7},
    {number: 113, name: "Nihonium", symbol: "Nh", mass: 286.00, group: 13, period: 7},
    {number: 114, name: "Flerovium", symbol: "Fl", mass: 289.00, group: 14, period: 7},
    {number: 115, name: "Moscovium", symbol: "Mc", mass: 289.00, group: 15, period: 7},
    {number: 116, name: "Livermorium", symbol: "Lv", mass: 293.00, group: 16, period: 7},
    {number: 117, name: "Tennessine", symbol: "Ts", mass: 294.00, group: 17, period: 7},
    {number: 118, name: "Oganesson", symbol: "Og", mass: 294.00, group: 18, period: 7}
];

export default Elements;