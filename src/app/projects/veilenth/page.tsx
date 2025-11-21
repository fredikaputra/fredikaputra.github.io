import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Markdown from "react-markdown";

const project = DATA.projects.find(p => p.title === "Veilenth");

export default function VeilenthPage() {
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
              <CardTitle>Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vue.js with Composition API</li>
                    <li>• Inertia.js for SPA-like navigation</li>
                    <li>• shadcn/ui component library</li>
                    <li>• Tailwind CSS for styling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend & Infrastructure</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Laravel PHP framework</li>
                    <li>• WebSocket for real-time features</li>
                    <li>• SQLite database</li>
                    <li>• Real-time music synchronization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Real-time collaborative digital rooms</li>
                <li>• Music synchronization across all participants</li>
                <li>• Presence awareness and status indicators</li>
                <li>• Atmospheric room customization</li>
                <li>• Natural social interaction design</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Development Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                  In Progress
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Currently under active development with new features being added regularly.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}