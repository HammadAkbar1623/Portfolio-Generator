import { useState } from "react";



const colorPalettes = [
    { name: "Dark", primary: "#1E293B", secondary: "#334155", text: "#F8FAFC" },
    { name: "Light", primary: "#F8FAFC", secondary: "#E2E8F0", text: "#1E293B" },
    { name: "Blue", primary: "#2563EB", secondary: "#1E40AF", text: "#F8FAFC" },
    { name: "Purple", primary: "#7C3AED", secondary: "#6D28D9", text: "#F8FAFC" },
    { name: "Green", primary: "#10B981", secondary: "#047857", text: "#F8FAFC" },
];


const ColorPallete = () => {

    const [selectedPalette, setSelectedPalette] = useState(colorPalettes[0]);
    const [customPrimary, setCustomPrimary] = useState("");
    const [customSecondary, setCustomSecondary] = useState("");
    const [customText, setCustomText] = useState("");

    const applyCustomColors = () => {
        if (customPrimary && customSecondary && customText) {
            setSelectedPalette({
                name: "Custom",
                primary: customPrimary,
                secondary: customSecondary,
                text: customText,
            });
        }
    };

    return (
        <>
            <div className="p-6 bg-gray-800 rounded-2xl shadow-lg max-w-md mx-auto text-white">
            <div className="flex items-center gap-3 mb-5">
                        <span className="text-2xl text-amber-400 font-bold">7.</span>
                        <h1 className="text-2xl text-white font-semibold">Select Colors</h1>
                    </div>

                {/* Palette Buttons */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                    {colorPalettes.map((palette) => (
                        <button
                            key={palette.name}
                            onClick={() => setSelectedPalette(palette)}
                            className="p-3 rounded-lg cursor-pointer"
                            style={{
                                backgroundColor: palette.primary,
                                color: palette.text,
                            }}
                        >
                            {palette.name}
                        </button>
                    ))}
                </div>

                {/* Custom Color Pickers */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">Custom Colors</h3>
                    <div className="flex items-center gap-2">
                        <input
                            type="color"
                            value={customPrimary}
                            onChange={(e) => setCustomPrimary(e.target.value)}
                            className="w-10 h-10 cursor-pointer"
                        />
                        <input
                            type="color"
                            value={customSecondary}
                            onChange={(e) => setCustomSecondary(e.target.value)}
                            className="w-10 h-10 cursor-pointer"
                        />
                        <input
                            type="color"
                            value={customText}
                            onChange={(e) => setCustomText(e.target.value)}
                            className="w-10 h-10 cursor-pointer"
                        />
                        <button
                            onClick={applyCustomColors}
                            className="bg-amber-400 text-black px-3 py-1 rounded-lg cursor-pointer "
                        >
                            Apply
                        </button>
                    </div>
                </div>

                {/* Preview */}
                <div
                    className="p-4 rounded-xl text-center"
                    style={{
                        backgroundColor: selectedPalette.secondary,
                        color: selectedPalette.text,
                    }}
                >
                    <p className="text-lg font-semibold">Preview</p>
                    <div
                        className="mt-2 p-2 rounded-lg"
                        style={{ backgroundColor: selectedPalette.primary }}
                    >
                        Primary Color
                    </div>
                </div>
            </div>

        </>
    )
}

export default ColorPallete
