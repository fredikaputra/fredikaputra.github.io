import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Markdown from "react-markdown";

const project = DATA.projects.find(p => p.title === "Tracking Project");

export default function TrackingProjectPage() {
  if (!project) return <div>Project not found</div>;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton />

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">{project.title}</h1>

            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.video && (
            <div className="w-full">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Markdown 
                className="text-muted-foreground leading-relaxed prose max-w-none"
                components={{
                  a: ({ href, children }) => {
                    if (href?.startsWith("/")) {
                      return (
                        <Link href={href}>
                          {children}
                        </Link>
                      );
                    }
                    if (href?.startsWith("#")) {
                      return <a href={href}>{children}</a>;
                    }
                    return <a target="_blank" rel="noopener noreferrer" href={href}>{children}</a>;
                  },
                }}
              >
                {project.description}
              </Markdown>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Project Management</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Create and manage multiple projects</li>
                    <li>• Timeline creation and tracking</li>
                    <li>• Progress percentage (0-100%)</li>
                    <li>• Status updates and milestones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Team Collaboration</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Assign team members to projects</li>
                    <li>• Meeting notes documentation</li>
                    <li>• Project history tracking</li>
                    <li>• Role-based access control</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Reporting & Export</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Export project history</li>
                  <li>• Generate progress reports</li>
                  <li>• Timeline visualization</li>
                  <li>• Comprehensive audit trails</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Backend Framework</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Laravel 8 framework foundation</li>
                    <li>• MySQL database design</li>
                    <li>• RESTful API architecture</li>
                    <li>• Authentication and authorization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frontend & UI</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Livewire 2 for dynamic interactions</li>
                    <li>• Bootstrap 4 for responsive design</li>
                    <li>• Real-time updates without page refresh</li>
                    <li>• Interactive progress tracking</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Data Management</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Project timeline database schema</li>
                  <li>• User assignment and permissions</li>
                  <li>• Meeting notes storage</li>
                  <li>• Export functionality with data formatting</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Value</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Centralized project tracking platform</li>
                <li>• Improved team coordination and visibility</li>
                <li>• Enhanced project documentation</li>
                <li>• Better resource allocation and planning</li>
                <li>• Historical data for future project planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Development Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Production
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Actively used for project management and tracking across multiple teams.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}