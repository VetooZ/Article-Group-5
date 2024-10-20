'use client'
import Typewriter from 'typewriter-effect';


const Members = () => {

    return (
        <div className="bg-white dark:bg-primary absolute top-0 left-0 w-full min-h-full z-[-1]">
            <div className="mx-5 md:mx-20 mt-36">
                <div className="block md:hidden mb-11">
                    <div className="flex justify-center items-center text-4xl dark:text-white font-semibold mx-10 md:col-start-3 md:col-span-2">
                        <Typewriter
                            options={{
                                strings: ['Members', 'Group 5', '┌( ಠ_ಠ)┘', '(⊙_◎)'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-6 md:grid-cols-6 gap-8">
                    <div className="bg-primary dark:bg-white rounded-lg shadow-2xl shadow-blue p-6 flex items-center justify-center text-center transform hover:scale-105 transition-transform duration-300 col-start-2 col-span-4 md:col-start-2 md:col-span-4">
                        <h1 className="text-xl font-bold text-white dark:text-primary">Elisabeth</h1>
                    </div>

                    <div className="bg-primary dark:bg-white rounded-lg shadow-xl shadow-blue p-6 flex items-center justify-center text-center transform hover:scale-105 transition-transform duration-300 col-start-1 col-span-3 md:col-start-1 md:col-span-2">
                        <h1 className="text-xl font-bold text-white dark:text-primary">Grecia</h1>
                    </div>

                    <div className="hidden md:block md:col-start-3 md:col-span-2">
                        <div className="flex justify-center items-center text-4xl dark:text-white font-semibold mx-10">

                            <Typewriter
                                options={{
                                    strings: ['Members', 'Group 5', '┌( ಠ_ಠ)┘', '(⊙_◎)'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>

                    <div className="bg-primary dark:bg-white rounded-lg shadow-xl shadow-blue p-6 flex items-center justify-center text-center transform hover:scale-105 transition-transform duration-300 col-end-7 col-span-3 md:col-end-7 md:col-span-2">
                        <h1 className="text-xl font-bold text-white dark:text-primary">Joel</h1>
                    </div>

                    <div className="bg-primary dark:bg-white rounded-lg shadow-xl shadow-blue p-6 flex items-center justify-center text-center transform hover:scale-105 transition-transform duration-300 col-start-1 col-span-3 md:col-start-2 md:col-span-2">
                        <h1 className="text-xl font-bold text-white dark:text-primary">Marshall</h1>
                    </div>

                    <div className="bg-primary dark:bg-white rounded-lg shadow-xl shadow-blue p-6 flex items-center justify-center text-center transform hover:scale-105 transition-transform duration-300 col-end-7 col-span-3 md:col-end-6 md:col-span-2">
                        <h1 className="text-xl font-bold text-white dark:text-primary">Veto</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;
