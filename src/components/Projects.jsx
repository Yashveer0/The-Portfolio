import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={project.image.url} alt={project.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.title}</div>
          <p className="mt-2 text-gray-500">{project.description}</p>
          <div className="mt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {project.techStack.join(', ')}
            </span>
          </div>
          <div className="mt-4">
            <a href={project.liveurl} className="text-indigo-600 hover:text-indigo-900">Live URL</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href={project.githuburl} className="text-indigo-600 hover:text-indigo-900">GitHub URL</a>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          See More
        </button>
      </div>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <>
   <h2 className='text-2xl bg-black p-3 underline text-white text-center font-bold '>Projects</h2>
    <div className="grid grid-cols-1  bg-black p-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
    </>
  );
};

export default Projects;
