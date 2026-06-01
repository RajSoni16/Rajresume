export default function RajSoniPortfolio() {
  const skills = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Linux",
    "Terraform",
    "VMware",
    "CI/CD",
    "Git",
    "Nginx",
    "Apache",
    "MySQL",
  ];

  const experiences = [
    {
      role: "DevOps Engineer",
      company: "Squad Technology",
      period: "Jan 2025 – Present",
      points: [
        "Built and optimized CI/CD pipelines using Jenkins reducing deployment time by 60%.",
        "Automated AWS deployments improving scalability and operational efficiency.",
        "Managed Docker and Podman based containerized environments.",
        "Handled production incidents, uptime monitoring, and infrastructure troubleshooting.",
      ],
    },
    {
      role: "Senior Technical Engineer",
      company: "CI Infotech (ONGC)",
      period: "Mar 2024 – Jan 2025",
      points: [
        "Managed VMware vSphere and ESXi virtualization environments.",
        "Administered Linux and Windows servers with security best practices.",
        "Implemented backup and disaster recovery using NAS and Veeam.",
        "Supported SAP HANA replication and HA configurations.",
      ],
    },
    {
      role: "Cloud Support Engineer",
      company: "Xcaliber Infotech",
      period: "Jan 2023 – Feb 2024",
      points: [
        "Maintained AWS infrastructure focusing on uptime and optimization.",
        "Configured Palo Alto Firewall and Active Directory services.",
        "Supported cloud troubleshooting and Linux server maintenance.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-400 uppercase tracking-widest mb-3 text-sm">
            DevOps Engineer | Cloud Engineer
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Raj Soni
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Results-driven DevOps Engineer with 3+ years of experience in AWS Cloud,
            CI/CD automation, Linux server administration, and scalable production
            deployments.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-medium"
            >
              Contact Me
            </a>

            <a
              href="#experience"
              className="border border-gray-700 hover:border-blue-400 transition px-6 py-3 rounded-2xl font-medium"
            >
              View Experience
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-10 border border-gray-800 shadow-2xl">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <h3 className="text-3xl font-bold text-blue-400">3+</h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <h3 className="text-3xl font-bold text-green-400">60%</h3>
              <p className="text-gray-400 mt-2">Deployment Time Reduced</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <h3 className="text-3xl font-bold text-purple-400">AWS</h3>
              <p className="text-gray-400 mt-2">Cloud Infrastructure</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <h3 className="text-3xl font-bold text-yellow-400">99.9%</h3>
              <p className="text-gray-400 mt-2">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Technical Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-14">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:border-blue-500 transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-blue-400 mt-1">{exp.company}</p>
                </div>

                <span className="text-gray-400 mt-3 lg:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 text-gray-300">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-20 bg-gray-900/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:border-blue-500 transition">
              <h3 className="text-2xl font-semibold mb-4">CI/CD Automation</h3>
              <p className="text-gray-400 leading-relaxed">
                Designed automated Jenkins pipelines for streamlined application deployment and delivery.
              </p>
            </div>

            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:border-blue-500 transition">
              <h3 className="text-2xl font-semibold mb-4">Docker Deployment</h3>
              <p className="text-gray-400 leading-relaxed">
                Containerized production applications using Docker for consistency and scalability.
              </p>
            </div>

            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:border-blue-500 transition">
              <h3 className="text-2xl font-semibold mb-4">Kubernetes POC</h3>
              <p className="text-gray-400 leading-relaxed">
                Deployed and managed sample workloads on Kubernetes clusters using Minikube.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Open to DevOps, Cloud, Infrastructure, and Site Reliability Engineering opportunities.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <a
            href="mailto:raj67231@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-medium"
          >
            raj67231@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/raj-soni-72b23b110"
            target="_blank"
            className="border border-gray-700 hover:border-blue-500 transition px-8 py-4 rounded-2xl font-medium"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
}