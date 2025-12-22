import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Markdown from "react-markdown";

const project = DATA.projects.find(p => p.title === "Customer Care");

export default function CustomerCarePage() {
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
                    <li>• Bootstrap 5 responsive design</li>
                    <li>• Livewire 3 dynamic components</li>
                    <li>• Real-time UI updates</li>
                    <li>• Mobile-friendly interface</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Laravel 10 framework</li>
                    <li>• MySQL database</li>
                    <li>• Email notification system</li>
                    <li>• Role-based access control</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Complaint registration and tracking</li>
                  <li>• Division team routing system</li>
                  <li>• Status management and updates</li>
                  <li>• Multi-channel customer notifications</li>
                  <li>• Comprehensive audit trails</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workflow Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Customer Service</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Register customer complaints</li>
                    <li>• Route to appropriate divisions</li>
                    <li>• Monitor complaint progress</li>
                    <li>• Notify customers of resolution</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Division Teams</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Receive assigned complaints</li>
                    <li>• Process and resolve issues</li>
                    <li>• Update complaint status</li>
                    <li>• Return to customer service</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Communication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated email updates sent to customers regarding their complaint status and resolution details.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Direct phone calls from customer service representatives to inform customers of resolved issues.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">In-Person Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Face-to-face communication when customers return to the bank branch for other services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Development Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Completed
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Successfully deployed and actively used at BPR Dana Nusantara for customer complaint management.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}