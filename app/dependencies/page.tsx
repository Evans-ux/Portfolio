import React from "react";
import { 
  Package, 
  Terminal, 
  Shield, 
  PenTool, 
  Database, 
  Layers, 
  Cpu,
  Copy,
  CheckCircle2
} from "lucide-react";

export default function DependenciesPage() {
  const coreDependencies = [
    { name: "next", version: "16.1.6", description: "The React Framework for the Web" },
    { name: "react", version: "19.2.3", description: "JavaScript library for user interfaces" },
    { name: "react-dom", version: "19.2.3", description: "React package for working with the DOM" },
  ];

  const uiDependencies = [
    { name: "framer-motion", version: "^12.34.3", description: "Production-ready animation library" },
    { name: "lucide-react", version: "^0.575.0", description: "Beautiful & consistent icons" },
    { name: "tailwindcss", version: "^4", description: "Utility-first CSS framework", isDev: true },
    { name: "@tailwindcss/postcss", version: "^4", description: "Tailwind PostCSS plugin", isDev: true },
    { name: "tailwind-merge", version: "^3.5.0", description: "Merge Tailwind classes without conflicts" },
    { name: "clsx", version: "^2.1.1", description: "Utility for constructing className strings" },
    { name: "class-variance-authority", version: "^0.7.1", description: "CSS-in-TS library for component variance" },
    { name: "radix-ui", version: "^1.4.3", description: "Unstyled, accessible UI components" },
    { name: "shadcn", version: "^3.8.5", description: "High-quality, accessible UI components", isDev: true },
    { name: "sonner", version: "^2.0.7", description: "An opinionated toast component" },
    { name: "react-spinners", version: "^0.17.0", description: "A collection of loading spinners" },
    { name: "next-themes", version: "^0.4.6", description: "Perfect Next.js dark mode" },
    { name: "swiper", version: "^12.1.3", description: "Modern mobile touch slider" },
    { name: "tw-animate-css", version: "^1.4.0", description: "Animation utility library for Tailwind", isDev: true },
  ];

  const formDependencies = [
    { name: "react-hook-form", version: "^7.72.1", description: "Performant, flexible and extensible forms" },
    { name: "@hookform/resolvers", version: "^5.2.2", description: "Validation resolvers for React Hook Form" },
    { name: "zod", version: "^4.3.6", description: "TypeScript-first schema validation" },
  ];

  const dataDependencies = [
    { name: "@supabase/supabase-js", version: "^2.102.1", description: "Supabase client for JavaScript" },
    { name: "@supabase/ssr", version: "^0.10.0", description: "Supabase SSR utilities" },
    { name: "prisma", version: "^7.5.0", description: "Next-generation ORM", isDev: true },
  ];

  const securityDependencies = [
    { name: "bcrypt", version: "^6.0.0", description: "Library to help you hash passwords" },
    { name: "@types/bcrypt", version: "^6.0.0", description: "TypeScript definitions for bcrypt", isDev: true },
  ];

  const toolingDependencies = [
    { name: "typescript", version: "^5", description: "Typed superset of JavaScript", isDev: true },
    { name: "eslint", version: "^9", description: "Pluggable JavaScript linter", isDev: true },
    { name: "eslint-config-next", version: "16.1.6", description: "Next.js ESLint configuration", isDev: true },
    { name: "pnpm", version: "^10.30.2", description: "Fast, disk space efficient package manager" },
    { name: "@types/node", version: "^20", description: "TypeScript definitions for Node.js", isDev: true },
    { name: "@types/react", version: "^19", description: "TypeScript definitions for React", isDev: true },
    { name: "@types/react-dom", version: "^19", description: "TypeScript definitions for React DOM", isDev: true },
  ];

  type Dependency = { name: string; version: string; description: string; isDev?: boolean };

  const categories: { title: string; icon: React.ReactNode; items: Dependency[] }[] = [
    { title: "Core Framework", icon: <Cpu className="w-6 h-6 text-blue-400" />, items: coreDependencies },
    { title: "UI & Styling", icon: <PenTool className="w-6 h-6 text-pink-400" />, items: uiDependencies },
    { title: "Forms & Validation", icon: <CheckCircle2 className="w-6 h-6 text-green-400" />, items: formDependencies },
    { title: "Database & Backend", icon: <Database className="w-6 h-6 text-purple-400" />, items: dataDependencies },
    { title: "Security", icon: <Shield className="w-6 h-6 text-red-400" />, items: securityDependencies },
    { title: "Tooling & Types", icon: <Terminal className="w-6 h-6 text-amber-400" />, items: toolingDependencies },
  ];

  const runProdInstall = `npm install next react react-dom framer-motion lucide-react tailwind-merge clsx class-variance-authority radix-ui sonner react-spinners next-themes swiper react-hook-form @hookform/resolvers zod @supabase/supabase-js @supabase/ssr bcrypt pnpm`;
  const runDevInstall = `npm install -D tailwindcss @tailwindcss/postcss tw-animate-css shadcn prisma typescript @types/node @types/react @types/react-dom @types/bcrypt eslint eslint-config-next`;

  // We are creating a simple client component for the copy functionality
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 lg:p-24 selection:bg-purple-500/30">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 ring-1 ring-white/10 shadow-lg">
            <Layers className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            Project Stack & Dependencies
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            A comprehensive overview of every library, extension, and tool powering this application.
          </p>
        </div>

        {/* Installation Commands */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <Terminal className="w-7 h-7 text-green-400" />
            <h2 className="text-2xl font-bold">Installation Commands</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <InstallCommandCard title="Production Dependencies" command={runProdInstall} type="npm install" />
            <InstallCommandCard title="Development Dependencies" command={runDevInstall} type="npm install -D" />
          </div>
        </section>

        {/* Categories Grid */}
        <section className="space-y-8">
          <div className="flex items-center space-x-3 mb-8">
            <Package className="w-7 h-7 text-indigo-400" />
            <h2 className="text-2xl font-bold">Library Breakdown</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div 
                key={category.title} 
                className="group relative flex flex-col p-6 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent blur-2xl -mr-16 -mt-16 group-hover:from-white/10 transition-colors" />
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 shadow-xl rounded-xl bg-black/50 ring-1 ring-white/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">{category.title}</h3>
                </div>

                <div className="flex-1 space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex flex-col space-y-1 group/item">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-medium text-white/80 group-hover/item:text-blue-400 transition-colors">
                          {item.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          {item.isDev && (
                            <span className="px-2 py-0.5 text-[0.65rem] uppercase font-bold text-amber-300 bg-amber-400/10 rounded-full">
                              dev
                            </span>
                          )}
                          <span className="font-mono text-xs text-neutral-500">
                            {item.version}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-neutral-400">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function InstallCommandCard({ title, command, type }: { title: string, command: string, type: string }) {
  return (
    <div className="relative group p-6 rounded-3xl bg-black/40 border border-white/10 hover:border-blue-500/30 transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex flex-col h-full space-y-4">
        <h3 className="text-lg font-semibold text-white/90">{title}</h3>
        <div className="flex-1 bg-black/80 rounded-xl p-4 ring-1 ring-white/5 group-hover:ring-white/10 relative overflow-hidden">
          <code className="text-sm font-mono text-neutral-300 block break-words">
            <span className="text-pink-500">{type.split(' ')[0]}</span>{' '}
            <span className="text-yellow-300">{type.split(' ').slice(1).join(' ')}</span>{' '}
            <span className="text-blue-300">{command.replace(type, '').trim()}</span>
          </code>
          {/* Note: In a real app we'd add copy-to-clipboard interactivity here using a client component. 
              Keeping static here to avoid "use client" unless requested. */}
        </div>
      </div>
    </div>
  );
}
