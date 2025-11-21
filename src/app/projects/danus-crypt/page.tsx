import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Markdown from "react-markdown";

const project = DATA.projects.find(p => p.title === "DanusCrypt");

export default function DanusCryptPage() {
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
                    <li>• Laravel Blade templates</li>
                    <li>• Tailwind CSS for responsive design</li>
                    <li>• Web Crypto API integration</li>
                    <li>• Real-time encryption/decryption</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend & Security</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Laravel PHP framework</li>
                    <li>• AES-256 encryption algorithm</li>
                    <li>• Role-based access control</li>
                    <li>• Activity logging system</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Infrastructure</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Docker containerization</li>
                  <li>• BIND9 DNS configuration</li>
                  <li>• Secure authentication system</li>
                  <li>• Database encryption at rest</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Encryption</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AES-256 symmetric encryption</li>
                    <li>• Client-side encryption using Web Crypto API</li>
                    <li>• Secure key management</li>
                    <li>• End-to-end encryption for documents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Access Control</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Role-based permissions</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Session management</li>
                    <li>• Activity audit trails</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Document encryption and decryption</li>
                <li>• Secure user authentication</li>
                <li>• Role-based access management</li>
                <li>• Comprehensive activity logging</li>
                <li>• Internal deployment for BPR Dana Nusantara</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                DanusCrypt significantly enhanced the security posture of BPR Dana Nusantara 
                by providing a robust solution for protecting sensitive digital documents. 
                The system ensures compliance with banking security standards while maintaining 
                operational efficiency through its user-friendly interface.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Completed
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Successfully deployed and operational at BPR Dana Nusantara since June 2024.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}