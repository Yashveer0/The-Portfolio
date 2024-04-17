import React from 'react';

function Skills({ skills }) {
    console.log(skills);
    return (
        <section id='skill'>
        <div className="skills bg-black text-white text-center ">
            <h2 className="text-2xl p-4 font-bold underline mb-4">Skills</h2>
            <div className="grid grid-cols-2 text-black md:grid-cols-4 gap-4">
                {skills ? (
                    skills.map(skill => (
                        <div key={skill._id} className="bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:rotate-12 transition-rotate duration-300">
                            <img className="w-16 h-16 mb-2" src={skill.image.url} alt={skill.name} />
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                            <div className="flex items-center">
                                <input type="range" defaultValue={skill.percentage} className="w-full mr-2" disabled />
                                <span>{skill.percentage}%</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No skills available</p>
                )}
            </div>
        </div>
        </section>
    );
}

export default Skills;
