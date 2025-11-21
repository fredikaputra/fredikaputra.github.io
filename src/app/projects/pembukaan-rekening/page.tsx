import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Markdown from "react-markdown";

const project = DATA.projects.find(p => p.title === "Pembukaan Rekening");

export default function PembukaanRekeningPage() {
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
                  <h4 className="font-semibold mb-2">Digital Workflow</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Paperless account opening process</li>
                    <li>• Digital form submission</li>
                    <li>• Automated data validation</li>
                    <li>• Real-time status tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Role Management</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Admin: System configuration</li>
                    <li>• Customer Service: Data input</li>
                    <li>• Head CS: Review and approval</li>
                    <li>• Hierarchical approval workflow</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Compliance & Security</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Audit trail for all actions</li>
                  <li>• Secure data handling</li>
                  <li>• Regulatory compliance features</li>
                  <li>• Document management system</li>
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
                    <li>• MySQL database with proper relationships</li>
                    <li>• RESTful API design</li>
                    <li>• Secure authentication system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Admin Interface</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Filament 3 admin panel</li>
                    <li>• Custom form builders</li>
                    <li>• Livewire 3 for dynamic interactions</li>
                    <li>• Real-time validation feedback</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Digital Transformation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Elimination of paper forms</li>
                  <li>• Reduced processing time</li>
                  <li>• Improved data accuracy</li>
                  <li>• Enhanced customer experience</li>
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
                <li>• Transformed traditional banking operations</li>
                <li>• Reduced account opening time from days to hours</li>
                <li>• Eliminated paperwork and manual errors</li>
                <li>• Improved compliance and audit capabilities</li>
                <li>• Enhanced customer service efficiency</li>
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
                  Successfully deployed and actively used for new account openings at BPR Dana Nusantara.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}