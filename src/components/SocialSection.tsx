'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFolder, FaUsers, FaBook, FaLanguage, FaPlus, FaExternalLinkAlt } from 'react-icons/fa';

export default function SocialSection() {
  const [githubUser, setGithubUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [contributionGrid, setContributionGrid] = useState<number[][]>([]);

  // Fallback static data in case of GitHub rate limiting
  const fallbackUser = {
    avatar_url: '/profile.jpg',
    login: 'GUHAN005',
    public_repos: 14,
    followers: 12,
    bio: 'AI Engineer | Full Stack Developer | Java Enthusiast',
  };

  const fallbackRepos = [
    {
      name: 'AI-Powered-Legal-Assistant',
      html_url: 'https://github.com/GUHAN005',
      language: 'JavaScript',
      description: 'MERN stack document analyzer.',
    },
    {
      name: 'IoT-Smart-Item-Tracker',
      html_url: 'https://github.com/GUHAN005',
      language: 'C++',
      description: 'ESP32 BLE tracker setup.',
    },
    {
      name: 'Amazon-Sales-Data-Analysis',
      html_url: 'https://github.com/GUHAN005',
      language: 'Tableau',
      description: 'Amazon sales analytics visualizer.',
    },
    {
      name: 'portfolio',
      html_url: 'https://github.com/GUHAN005',
      language: 'TypeScript',
      description: 'Next.js & Tailwind personal portfolio website.',
    },
  ];

  useEffect(() => {
    // Generate a mock contribution grid (7 rows, 22 columns) client-side only
    const grid = Array.from({ length: 7 }, () =>
      Array.from({ length: 22 }, () => Math.floor(Math.random() * 4))
    );
    setContributionGrid(grid);

    const fetchGithub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/GUHAN005');
        if (userRes.ok) {
          const userData = await userRes.json();
          setGithubUser(userData);
        } else {
          setGithubUser(fallbackUser);
        }

        const reposRes = await fetch('https://api.github.com/users/GUHAN005/repos?sort=updated&per_page=4');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData)) {
            setRepos(reposData);
          } else {
            setRepos(fallbackRepos);
          }
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        console.error('Error fetching github profile:', err);
        setGithubUser(fallbackUser);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGithub();
  }, []);

  const activeUser = githubUser || fallbackUser;
  const activeRepos = repos.length > 0 ? repos : fallbackRepos;

  // Use state grid on client, and a blank grid during SSR/hydration to prevent mismatches
  const activeGrid = contributionGrid.length > 0
    ? contributionGrid
    : Array.from({ length: 7 }, () => Array.from({ length: 22 }, () => 0));

  const getIntensityClass = (intensity: number) => {
    switch (intensity) {
      case 0:
        return 'bg-white/[0.03] border-white/[0.02]';
      case 1:
        return 'bg-indigo-600/30 border-indigo-500/10 shadow-[0_0_2px_rgba(79,70,229,0.2)]';
      case 2:
        return 'bg-indigo-500/60 border-indigo-400/20 shadow-[0_0_4px_rgba(79,70,229,0.4)]';
      case 3:
      default:
        return 'bg-cyan-400/95 border-cyan-300/40 shadow-[0_0_8px_rgba(6,182,212,0.8)]';
    }
  };

  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-[#030611]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-3">
            Synergy
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Connect <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">With Me</span>
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Dynamic Social Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card 1: GitHub Premium Profile Dashboard */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col gap-6 hover:border-indigo-500/25">
            <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/5 rounded-full blur-3xl" />
            
            {/* Header info with dynamic details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl p-[2px] bg-gradient-to-tr from-indigo-500 to-cyan-400">
                  <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#070b1e]">
                    <Image
                      src={activeUser.avatar_url}
                      alt="GitHub Avatar"
                      fill
                      sizes="56px"
                      className="object-cover"
                      unoptimized={activeUser.avatar_url === '/profile.jpg'}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {activeUser.login}
                  </h4>
                  <a
                    href="https://github.com/GUHAN005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-indigo-400 font-mono flex items-center gap-1 hover:underline mt-0.5"
                  >
                    @GUHAN005
                    <FaExternalLinkAlt className="text-[8px]" />
                  </a>
                </div>
              </div>

              {/* Badges counts */}
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-xs font-bold text-white font-mono">{activeUser.public_repos}</span>
                  <span className="text-[8px] text-gray-500 font-mono uppercase tracking-widest mt-0.5">Repos</span>
                </div>
                <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-xs font-bold text-white font-mono">{activeUser.followers}</span>
                  <span className="text-[8px] text-gray-500 font-mono uppercase tracking-widest mt-0.5">Followers</span>
                </div>
              </div>
            </div>

            {/* GitHub Top Languages and Subtitle */}
            <div className="py-2 border-y border-white/[0.04]">
              <h5 className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-2.5">
                Top Languages Distribution
              </h5>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[9px] text-indigo-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Java (55%)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 text-[9px] text-yellow-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  JavaScript (25%)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[9px] text-cyan-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Python (15%)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20 text-[9px] text-red-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  HTML/CSS (5%)
                </span>
              </div>
            </div>

            {/* Glowing Contribution Calendar mock */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                <span>Developer Contribution Grid</span>
                <span>Active Commit Activity</span>
              </div>
              <div className="p-3 bg-white/[0.015] border border-white/[0.03] rounded-xl overflow-x-auto">
                <div className="flex flex-col gap-[3px] min-w-[340px]">
                  {activeGrid.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-[3px]">
                      {row.map((intensity, cIdx) => (
                        <div
                          key={cIdx}
                          className={`w-[11px] h-[11px] rounded-[2px] border ${getIntensityClass(
                            intensity
                          )} transition-all duration-300 hover:scale-125 cursor-crosshair`}
                          title={`Commit intensity level: ${intensity}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-3 text-[9px] text-gray-500 font-mono mt-1">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[1px] bg-white/[0.03] border border-white/[0.02]" />
                <span className="w-2.5 h-2.5 rounded-[1px] bg-indigo-600/30" />
                <span className="w-2.5 h-2.5 rounded-[1px] bg-indigo-500/60" />
                <span className="w-2.5 h-2.5 rounded-[1px] bg-cyan-400/95 shadow-[0_0_4px_#06b6d4]" />
                <span>More</span>
              </div>
            </div>

            {/* Latest Repositories grid */}
            <div>
              <h5 className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-3.5 flex items-center gap-1.5">
                <FaBook />
                Latest & Pinned Repositories
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.03] hover:border-cyan-400/20 transition-all flex flex-col justify-between group/repo"
                  >
                    <div>
                      <span className="text-xs font-bold text-white group-hover/repo:text-cyan-400 transition-colors block tracking-wide truncate">
                        {repo.name}
                      </span>
                      <span className="text-[10px] text-gray-400 block mt-1 leading-snug line-clamp-1">
                        {repo.description || 'No summary configured.'}
                      </span>
                    </div>
                    <span className="text-[8px] font-mono text-indigo-400 block mt-2 bg-indigo-500/10 px-2 py-0.5 rounded self-start border border-indigo-500/20">
                      {repo.language || 'Unknown'}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Card 2: LinkedIn Premium Profile Card */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full hover:border-cyan-400/25 group/li">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <div>
              {/* Profile Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-[#0077b5]/15 border border-[#0077b5]/30 rounded-xl text-[#0077b5] text-xl">
                  <FaLinkedin />
                </div>
                <span className="text-[8px] font-mono tracking-widest text-[#0077b5] bg-[#0077b5]/10 px-2.5 py-0.5 rounded border border-[#0077b5]/20 uppercase font-bold">
                  Professional Card
                </span>
              </div>

              {/* Profile Avatar and Name */}
              <div className="flex flex-col items-center text-center my-6">
                <div className="relative w-20 h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#0077b5] to-cyan-400 mb-4 shadow-xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#070b1e]">
                    <Image
                      src="/profile.jpg"
                      alt="Guhan S Profile Photo"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-bold font-heading text-white tracking-wide">
                  GUHAN S
                </h4>
                
                <p className="text-[10px] text-gray-500 font-mono tracking-wide mt-1.5">
                  Erode, Tamil Nadu, India
                </p>

                <p className="text-xs font-semibold text-cyan-400 mt-4 px-4 leading-normal font-heading">
                  AI Engineer | Full Stack Developer | Java Developer | Machine Learning Enthusiast
                </p>
              </div>

              {/* Professional Description */}
              <p className="text-gray-300 text-xs leading-relaxed font-sans text-center px-2 my-6">
                Connect with me on LinkedIn to collaborate on innovative AI algorithms, system architecture audits, or full-stack software development projects. Let's build state-of-the-art tech systems together.
              </p>
            </div>

            {/* Action CTA Button */}
            <a
              href="https://www.linkedin.com/in/s-guhan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#0077b5] hover:bg-[#00629b] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#0077b5]/20"
            >
              <FaPlus className="text-xs" />
              Connect on LinkedIn
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
