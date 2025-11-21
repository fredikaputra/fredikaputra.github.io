import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Markdown from "react-markdown";

const project = DATA.projects.find(p => p.title === "Noisely");

export default function NoiselyPage() {
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
                    <li>• Nuxt.js Vue framework</li>
                    <li>• Real-time audio visualization</li>
                    <li>• WebSocket client integration</li>
                    <li>• Responsive audio interface</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend & AI Processing</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Laravel API backend</li>
                    <li>• Python for AI processing</li>
                    <li>• YAMNet for sound classification</li>
                    <li>• Whisper for speech transcription</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Infrastructure</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• MySQL database for event storage</li>
                  <li>• Redis for real-time caching</li>
                  <li>• Docker containerization</li>
                  <li>• WebSocket for real-time communication</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Models & Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">YAMNet Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Google's YAMNet model provides real-time audio event detection, 
                    capable of identifying specific sounds like gunshots, glass breaking, 
                    alarms, and other environmental audio events with high accuracy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Whisper Transcription</h4>
                  <p className="text-sm text-muted-foreground">
                    OpenAI's Whisper model handles speech-to-text transcription, 
                    converting spoken language into written text with support for 
                    multiple languages and high accuracy rates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Security and surveillance monitoring</li>
                <li>• Environmental sound analysis</li>
                <li>• Speech recognition and transcription</li>
                <li>• Real-time audio event logging</li>
                <li>• Academic research at Batam International University</li>
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
                  Active research project with ongoing development and testing.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}