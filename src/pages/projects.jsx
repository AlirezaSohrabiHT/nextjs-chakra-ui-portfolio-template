import React, { useState , useEffect } from "react";



export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  
  // Fetch projects.json from public folder
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div style={{ minHeight: "100vh", color: "white", padding: "20px" }}>

      {/* Grid Layout (5 Columns) */}
      <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 5 items per row
          gap: "15px",
          maxWidth: "100%",
          margin: "0 auto",
      }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{ 
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            onClick={() => setSelectedProject(project)}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div style={{ 
          position: "fixed", 
          top: 0, left: 0, right: 0, bottom: 0, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: "20px",
        }}>
          <div style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            borderRadius: "12px",
            maxWidth: "500px",
            width: "100%",
            position: "relative",
            boxShadow: "0 6px 15px rgba(0,0,0,0.3)"
          }}>
            <button 
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "18px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#555",
              }}
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>{selectedProject.title}</h2>
            <p style={{ color: "#555", marginTop: "8px" }}>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
