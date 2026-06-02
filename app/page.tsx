import { 
  SiDocker, 
  SiKubernetes, 
  SiJenkins, 
  SiLinux, 
  SiTerraform, 
  SiVmware, 
  SiGit, 
  SiNginx, 
  SiApache, 
  SiMysql, 
  SiNodedotjs, 
  SiReact, 
  SiPhp,
  SiWordpress, 
  SiMariadb, 
  SiMongodb, 
  SiPodman 
} from "react-icons/si";
import { FaAws, FaInfinity, FaMagento } from "react-icons/fa6";

export default function RajSoniPortfolio() {
  const skills = [
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "Podman", icon: <SiPodman className="text-[#892CA0]" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
    { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" /> },
    { name: "Linux", icon: <SiLinux className="text-[#FCC624]" /> },
    { name: "Terraform", icon: <SiTerraform className="text-[#844FBA]" /> },
    { name: "VMware", icon: <SiVmware className="text-[#607078]" /> },
    { name: "CI/CD", icon: <FaInfinity className="text-[#000000] dark:text-white" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
    { name: "Apache", icon: <SiApache className="text-[#D22128]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "MariaDB", icon: <SiMariadb className="text-[#003545]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
    { name: "WordPress", icon: <SiWordpress className="text-[#21759B]" /> },
    { name: "Magento", icon: <FaMagento className="text-[#EE672F]" /> },
  ];

  const experiences = [
    {
      role: "DevOps Engineer",
      company: "Squad Technology",
      period: "Jan 2025 – Present",
      points: [
        "Architected and optimized CI/CD pipelines using Jenkins, Git, and AWS DevOps, significantly improving deployment reliability and system uptime.",
        "Designed and managed scalable server architectures across Linux (RedHat/Ubuntu), optimizing deployments for Node.js, React, PHP, and various database stacks.",
        "Orchestrated containerized infrastructure (Docker, Podman) and virtualized server environments (VMware) to enhance resource utilization.",
        "Administered web servers (Nginx, Apache, LiteSpeed) and implemented proactive monitoring using Prometheus, New Relic, and Monit.",
        "Resolved escalated infrastructure incidents, providing cross-team troubleshooting for server issues, website outages, and database connectivity.",
        "Strengthened security and business continuity by implementing automated server patching, Veeam/S3 backups, and disaster recovery plans.",
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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">Raj Soni</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white hover:text-blue-400 transition-colors">About Us</a>
            <a href="#skills" className="hover:text-white hover:text-blue-400 transition-colors">Technical Skills</a>
            <a href="#projects" className="hover:text-white hover:text-blue-400 transition-colors">My Projects</a>
            <a href="#contact" className="hover:text-white hover:text-blue-400 transition-colors">Contact Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="px-8 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
        <div>
          <p className="text-blue-400 uppercase tracking-widest mb-3 text-sm animate-fade-in-up">
            DevOps Engineer | Cloud Engineer
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Raj Soni
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
            Results-driven DevOps Engineer with 3.6 years of experience in AWS Cloud,
            CI/CD automation, Linux server administration, and scalable production
            deployments.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
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

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-10 border border-gray-800 shadow-2xl animate-fade-in animation-delay-400">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-blue-400">3+</h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-green-400">60%</h3>
              <p className="text-gray-400 mt-2">Deployment Time Reduced</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-purple-400">AWS</h3>
              <p className="text-gray-400 mt-2">Cloud Infrastructure</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-yellow-400">99.9%</h3>
              <p className="text-gray-400 mt-2">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Technical Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
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
      <section id="projects" className="py-20 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-8 pb-10 hide-scrollbar max-w-7xl mx-auto">
          <div className="min-w-[300px] md:min-w-[400px] snap-center shrink-0 bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">CI/CD Automation</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed automated Jenkins pipelines for streamlined application deployment and delivery.
            </p>
          </div>

          <div className="min-w-[300px] md:min-w-[400px] snap-center shrink-0 bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">Docker Deployment</h3>
            <p className="text-gray-400 leading-relaxed">
              Containerized production applications using Docker for consistency and scalability.
            </p>
          </div>

          <div className="min-w-[300px] md:min-w-[400px] snap-center shrink-0 bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">Kubernetes POC</h3>
            <p className="text-gray-400 leading-relaxed">
              Deployed and managed sample workloads on Kubernetes clusters using Minikube.
            </p>
          </div>
          
          {/* Decorative end spacer to allow the last item to scroll into center if needed */}
          <div className="min-w-[1px] md:min-w-[8px] shrink-0"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>

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
            href="tel:9879066497"
            className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-medium"
          >
            +919879066497
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