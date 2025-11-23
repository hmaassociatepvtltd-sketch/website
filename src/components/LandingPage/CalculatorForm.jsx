import { CheckCircle, Copy, Fan, Lightbulb, LocationEdit, Mail, MapPin, Pencil, Phone, Refrigerator, ThermometerSnowflake, Tv, UserRound, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";
import { useState } from "react";

const CalculationMode = {
    ByBill: "BY_BILL",
    ByAppliances: "BY_APPLIANCES"
}

export const CalculatorForm = (props) => {

    const calculateSolarNeeds = async (data) => {
        // Simulate a short delay for UX
        await new Promise(resolve => setTimeout(resolve, 600));

        let kw = 0;

        // FIX: Changed "ByBill" to CalculationMode.ByBill ("BY_BILL") to match the state
        if (data.mode === CalculationMode.ByBill) {
            // ESTIMATION LOGIC FOR PAKISTAN (PKR)
            const bill = data.monthlyBill || 0;
            kw = bill / 6500;
        } else {
            const apps = data.appliances || { fans: 0, ac: 0, fridge: 0, tv: 0, lights: 0 };

            const acLoad = apps.ac * 1.8;
            const fanLoad = apps.fans * 0.12;
            const fridgeLoad = apps.fridge * 0.35;
            const tvLoad = apps.tv * 0.15;
            const lightLoad = apps.lights * 0.02;

            kw = acLoad + fanLoad + fridgeLoad + tvLoad + lightLoad;

            if (kw > 0) kw = kw * 1.2;
        }

        kw = Math.ceil(kw * 2) / 2;

        if (kw < 1 && kw > 0) kw = 1;
        if (kw === 0) kw = 0;

        const dailyUnits = Math.round(kw * 4);
        const monthlySavings = Math.round(dailyUnits * 30 * 55);

        return {
            recommendedKw: kw,
            estimatedDailyProduction: `${dailyUnits} Units`,
            monthlySavingsEstimate: `Rs. ${monthlySavings.toLocaleString()}`,
            // FIX: Changed comparison here as well to display the correct explanation
            explanation: data.mode === CalculationMode.ByBill
                ? `Based on a bill of Rs. ${data.monthlyBill}, a ${kw}kW system is recommended.`
                : `To support your appliances (${data.appliances?.ac || 0} ACs, etc.), we recommend a ${kw}kW system.`
        };
    };


    const [mode, setMode] = useState(CalculationMode.ByBill);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [monthlyBill, setMonthlyBill] = useState('');
    const [appliances, setAppliances] = useState({
        fans: 0,
        ac: 0,
        fridge: 0,
        tv: 0,
        lights: 0
    });
    const [result, setResult] = useState(null);

    const handleCalculate = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // FIX: Ensure we parse the bill safely. If string is empty, default to 0.
        const parsedBill = parseFloat(monthlyBill);
        const safeBill = isNaN(parsedBill) ? 0 : parsedBill;

        try {
            // Simple math service (formerly geminiService)
            const data = await calculateSolarNeeds({
                mode,
                location: location, 
                // Passing safeBill ensures the math doesn't break with NaN
                monthlyBill: mode === CalculationMode.ByBill ? safeBill : undefined,
                appliances: mode === CalculationMode.ByAppliances ? appliances : undefined,
                currency: "PKR"
            });
            setResult(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const updateAppliance = (key, val) => {
        const num = parseInt(val);
        setAppliances(prev => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
    };


    return (
        <div id="contact" className={'w-full bg-secondary-background justify-center items-center flex flex-col py-24'}>
            <div className={'max-w-[1260px] w-full items-center grid grid-cols-1 lg:grid-cols-2 gap-20 px-5 xl:px-0'}>
                <div className={'bg-white rounded-xl w-full h-full px-7 py-10 space-y-5 shadow-2xl'}>
                    {!result ? (
                        <>
                            <h1 className={'text-4xl text-center font-bold font-josefin-sans'}>Get A Solar Quote</h1>

                            {/* Tab Switcher */}
                            <div className="flex justify-center gap-4 pb-2 w-full border-b border-gray-100">
                                <button
                                    type="button"
                                    onClick={() => setMode(CalculationMode.ByBill)}
                                    className={`text-sm font-bold px-4 py-2 transition-colors relative ${mode === CalculationMode.ByBill ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    By Bill
                                    {mode === CalculationMode.ByBill && <div className="absolute bottom-[-9px] left-0 w-full h-0.5 bg-primary"></div>}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMode(CalculationMode.ByAppliances)}
                                    className={`text-sm font-bold px-4 py-2 transition-colors relative ${mode === CalculationMode.ByAppliances ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    By Items
                                    {mode === CalculationMode.ByAppliances && <div className="absolute bottom-[-9px] left-0 w-full h-0.5 bg-primary"></div>}
                                </button>
                            </div>

                            <form className={'flex w-full flex-col gap-5 items-center'} onSubmit={handleCalculate}>

                            
                                {/* Dynamic Calculation Fields */}
                                {mode === CalculationMode.ByBill ? (
                                    <div className={'w-full rounded-lg flex flex-row gap-4 items-center bg-gray-100/80 py-4 px-5'}>
                                        <input
                                            className={'w-full outline-none focus:outline-none ring-0 bg-transparent text-gray-700 placeholder:text-gray-400'}
                                            type="number"
                                            placeholder={'Monthly Bill (Rs)*'}
                                            required
                                            value={monthlyBill}
                                            onChange={(e) => setMonthlyBill(e.target.value)}
                                        />
                                        <p className="text-gray-400 text-sm font-bold">PKR</p>
                                    </div>
                                ) : (
                                    <div className="w-full grid grid-cols-2 gap-3">
                                        <div className={'w-full rounded-lg flex flex-row gap-2 items-center bg-gray-100/80 py-3 px-3'}>
                                            <input
                                                className={'w-full outline-none focus:outline-none ring-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-sm'}
                                                type="number" placeholder={'No. of Fans'} min="0"
                                                value={appliances.fans || ''}
                                                onChange={(e) => updateAppliance('fans', e.target.value)}
                                            />
                                            <Fan size={18} className={'text-gray-400'} />
                                        </div>
                                        <div className={'w-full rounded-lg flex flex-row gap-2 items-center bg-gray-100/80 py-3 px-3'}>
                                            <input
                                                className={'w-full outline-none focus:outline-none ring-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-sm'}
                                                type="number" placeholder={'No. of ACs'} min="0"
                                                value={appliances.ac || ''}
                                                onChange={(e) => updateAppliance('ac', e.target.value)}
                                            />
                                            <ThermometerSnowflake size={18} className={'text-gray-400'} />
                                        </div>
                                        <div className={'w-full rounded-lg flex flex-row gap-2 items-center bg-gray-100/80 py-3 px-3'}>
                                            <input
                                                className={'w-full outline-none focus:outline-none ring-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-sm'}
                                                type="number" placeholder={'Fridges'} min="0"
                                                value={appliances.fridge || ''}
                                                onChange={(e) => updateAppliance('fridge', e.target.value)}
                                            />
                                            <Refrigerator size={18} className={'text-gray-400'} />
                                        </div>
                                        <div className={'w-full rounded-lg flex flex-row gap-2 items-center bg-gray-100/80 py-3 px-3'}>
                                            <input
                                                className={'w-full outline-none focus:outline-none ring-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-sm'}
                                                type="number" placeholder={'TVs'} min="0"
                                                value={appliances.tv || ''}
                                                onChange={(e) => updateAppliance('tv', e.target.value)}
                                            />
                                            <Tv size={18} className={'text-gray-400'} />
                                        </div>
                                        <div className={'col-span-2 w-full rounded-lg flex flex-row gap-2 items-center bg-gray-100/80 py-3 px-3'}>
                                            <input
                                                className={'w-full outline-none focus:outline-none ring-0 bg-transparent text-gray-700 placeholder:text-gray-400 text-sm'}
                                                type="number" placeholder={'Total Lights / Other'} min="0"
                                                value={appliances.lights || ''}
                                                onChange={(e) => updateAppliance('lights', e.target.value)}
                                            />
                                            <Lightbulb size={18} className={'text-gray-400'} />
                                        </div>
                                    </div>
                                )}


                                <Button className={'w-full bg-primary hover:bg-blue-700 text-white rounded-lg'} isLoading={loading}>
                                    Calculate Estimate
                                </Button>
                            </form>
                        </>
                    ) : (
                        <div className="flex flex-col h-full justify-center items-center space-y-6 animate-in fade-in zoom-in duration-300">
                            <div className="text-center space-y-2">
                                <h1 className={'text-5xl font-bold font-josefin-sans text-primary'}>
                                    {result.recommendedKw}kW
                                </h1>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Recommended System</p>
                            </div>

                            <div className="w-full bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-100">
                                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                    <span className="text-gray-500 text-sm flex gap-2 items-center font-medium"><Zap size={16} /> Daily Production</span>
                                    <span className="font-bold text-gray-800">{result.estimatedDailyProduction}</span>
                                </div>
                                <div className="flex justify-between items-center pb-1">
                                    <span className="text-gray-500 text-sm flex gap-2 items-center font-medium"><CheckCircle size={16} /> Est. Monthly Savings</span>
                                    <span className="font-bold text-green-600 text-lg">{result.monthlySavingsEstimate}</span>
                                </div>
                            </div>

                            <div className="text-center px-4">
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    This is an estimate based on standard usage in Pakistan. Actual requirements may vary.
                                </p>
                            </div>

                            <Button onClick={() => setResult(null)} className={'w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg'}>
                                Recalculate
                            </Button>
                        </div>
                    )}
                </div>
                <div className={'space-y-5'}>
                    <p data-tina-field={tinaField(props, "subheading")} className={'text-primary font-bold font-josefin-sans text-xl tracking-tighter flex flex-row gap-1'}><Copy /> {props.subheading || "Solar Calculator"}</p>
                    <p data-tina-field={tinaField(props, "heading")} className={'text-white font-bold font-josefin-sans text-4xl tracking-tighter '}>{props.heading || "Calculate Your Free Energy Potential"}</p>
                    <p data-tina-field={tinaField(props, "description")} className={'text-white text-md opacity-75'}>{props.description || "Unlock the potential of our cutting-edge solar solutions designed to energize your home or business sustainably. Connect with us today and take the first step toward a cleaner, smarter, and more eco-friendly future."}</p>
                </div>
            </div>
        </div>
    )
}