"use client";
const ALL_SKILLS = [
  "Windows Server", "Linux", "Network Admin", "Help Desk", "System Monitoring",
  "Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems", "Accessibility",
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Next.js", "Tailwind CSS", "Three.js"
];

// Helper function to distribute skills evenly among 6 faces
const getCubeFaces = (skills: string[]) => {
  const numSkills = skills.length;
  const skillsPerFace = Math.ceil(numSkills / 6);
  const faces = [];
  for (let i = 0; i < numSkills; i += skillsPerFace) {
    faces.push(skills.slice(i, i + skillsPerFace));
  }
  return faces;
};

const CUBE_SIZE = 300; // New size constant
const HALF_CUBE_SIZE = CUBE_SIZE / 2;

const CubeFace = ({ skills, faceIndex }: { skills: string[], faceIndex: number }) => {
  // Define rotations for the 6 faces of the cube
  const transformStyles = [
    `translateZ(${HALF_CUBE_SIZE}px)`,
    `rotateY(90deg) translateZ(${HALF_CUBE_SIZE}px)`,
    `rotateY(180deg) translateZ(${HALF_CUBE_SIZE}px)`,
    `rotateY(-90deg) translateZ(${HALF_CUBE_SIZE}px)`,
    `rotateX(90deg) translateZ(${HALF_CUBE_SIZE}px)`,
    `rotateX(-90deg) translateZ(${HALF_CUBE_SIZE}px)`,
  ];

  return (
    <div
      className={`absolute w-[${CUBE_SIZE}px] h-[${CUBE_SIZE}px] bg-gray-900/80 border-2 border-teal-500/50 flex flex-wrap content-center justify-center p-6 rounded-xl shadow-2xl backdrop-blur-sm`}
      style={{
        transform: transformStyles[faceIndex],
        backfaceVisibility: 'hidden',
        width: `${CUBE_SIZE}px`, // Apply dynamic size
        height: `${CUBE_SIZE}px`, // Apply dynamic size
      }}
    >
      {skills.map((skill, i) => (
        <span
          key={i}
          className="text-white text-sm font-medium m-1 px-3 py-1.5 bg-gray-700 rounded-full transition-all duration-200 cursor-default
                     hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/50"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

const SkillsSection = () => {
  const faces = getCubeFaces(ALL_SKILLS);

  return (
    <section className="py-20 px-6" id="skills">
      <style>{`
        /* 1. Define the rotation keyframe animation */
        @keyframes cubeSpin {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }

        /* 2. Apply the animation to the cube */
        .cube-container {
          width: ${CUBE_SIZE}px; /* Must match face width */
          height: ${CUBE_SIZE}px; /* Must match face height */
          transform-style: preserve-3d;
          /* Increased speed to 30s */
          animation: cubeSpin 30s infinite linear; 
        }
      `}</style>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Building digital solutions with a multidisciplinary approach
          </p>
        </div>

        {/* --- 3D CSS CUBE IMPLEMENTATION --- */}
        <div 
          className="w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
          style={{
            background: "radial-gradient(circle at center, rgba(15,15,15,1) 0%, rgba(5,5,5,1) 100%)",
          }}
        >
          <div 
            className={`w-[${CUBE_SIZE}px] h-[${CUBE_SIZE}px]`}
            style={{ 
              perspective: '1000px', // Creates the 3D perspective effect
            }}
          >
            <div className="cube-container">
              {faces.map((skills, index) => (
                <CubeFace key={index} skills={skills} faceIndex={index} />
              ))}
            </div>
          </div>
        </div>
        {/* --- END CSS CUBE --- */}
        
        <p className="mt-8 text-center text-sm text-gray-500">
          This feature uses pure CSS 3D transforms for maximum compatibility and performance.
        </p>

      </div>
    </section>
  );
};

export default SkillsSection;