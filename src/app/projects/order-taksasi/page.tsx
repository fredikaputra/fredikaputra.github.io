import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Markdown from "react-markdown";

const project = DATA.projects.find(p => p.title === "Order Taksasi");

export default function OrderTaksasiPage() {
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
                  <h4 className="font-semibold mb-2">Workflow Management</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Streamlined property assessment ordering</li>
                    <li>• Real-time status tracking</li>
                    <li>• Automated task assignment</li>
                    <li>• Progress monitoring dashboard</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Role-Based Access</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Supervisor: Full overview and monitoring</li>
                    <li>• Marketing: Create and track orders</li>
                    <li>• Taksasi: Process assessments</li>
                    <li>• Secure permission system</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Reporting & Documentation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Detailed assessment reports</li>
                  <li>• Downloadable PDF generation</li>
                  <li>• Property evaluation records</li>
                  <li>• Historical data tracking</li>
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
                  <h4 className="font-semibold mb-2">Backend Architecture</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Laravel 12 framework foundation</li>
                    <li>• MySQL database with proper indexing</li>
                    <li>• RESTful API design</li>
                    <li>• Secure authentication system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Admin Interface</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Filament 3 admin panel</li>
                    <li>• Custom UI modifications</li>
                    <li>• Livewire 3 for dynamic interactions</li>
                    <li>• Real-time updates without page refresh</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Security & Compliance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Banking-grade security standards</li>
                  <li>• Role-based permission system</li>
                  <li>• Activity logging and audit trails</li>
                  <li>• Internal network deployment</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Streamlined property assessment workflow</li>
                <li>• Improved coordination between teams</li>
                <li>• Enhanced reporting capabilities</li>
                <li>• Reduced processing time for assessments</li>
                <li>• Better tracking of marketing team requests</li>
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
                  Actively used by BPR Dana Nusantara marketing and assessment teams.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}