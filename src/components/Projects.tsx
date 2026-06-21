export function SelectedWork() {
  const projects = [
    { title: 'Project title', status: 'In progress' },
    { title: 'Project title', status: 'In progress' },
    { title: 'Project title', status: 'In progress' },
  ];

  return (
    <section className="editorial-container section" id="work">
      <h2 className="section-label">Selected work</h2>
      {projects.map((project, idx) => (
        <div key={idx} className="work-entry">
          <div>
            <span className="work-title">{project.title}</span>
            <span className="work-arrow">→</span>
          </div>
          <span className="work-meta">{project.status}</span>
        </div>
      ))}
    </section>
  );
}
