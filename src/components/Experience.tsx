export function Experience() {
  return (
    <section className="editorial-container section" id="experience">
      <h2 className="section-label">Experience</h2>

      <div className="experience-entry">
        <h3>Full Stack Developer — Payments</h3>
        <p className="experience-dateline">doTERRA · Feb 2023 – Present</p>
        <p className="experience-body">
          Built payment fraud prevention workflows using CyberSource Decision Manager and maintained
          payment flows across more than 25 international markets. Used AI-assisted tooling,
          including Cursor and Claude, for debugging, refactoring, and documentation.
        </p>
      </div>

      <div className="experience-entry">
        <h3>Full Stack Developer</h3>
        <p className="experience-dateline">doTERRA · Jun 2021 – Feb 2023</p>
        <p className="experience-body">
          Built and maintained front-end UIs for platforms serving hundreds of thousands of users,
          and contributed to the team's AWS migration alongside DevOps.
        </p>
      </div>
    </section>
  );
}
