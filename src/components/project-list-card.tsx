"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectListCard({
  title,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const router = useRouter();
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 ease-out">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Left: Image/Video */}
          <div className="flex-shrink-0">
            <div className={cn("w-32 h-24 sm:w-40 sm:h-28", className)}>
              {video && (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-md"
                />
              )}
              {image && (
                <Image
                  src={image}
                  alt={title}
                  width={160}
                  height={112}
                  className="w-full h-full object-cover rounded-md"
                />
              )}
            </div>
          </div>

          {/* Middle: Content */}
          <div className="flex-1 min-w-0">
            <CardHeader className="p-0 mb-3">
              <div className="space-y-1">
                <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
                <time className="font-sans text-xs text-muted-foreground">{dates}</time>
              </div>
            </CardHeader>
            
            <div className="space-y-3">
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {description}
              </Markdown>
              
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {tags?.map((tag) => (
                    <Badge
                      className="px-2 py-1 text-xs"
                      variant="secondary"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col justify-center gap-2">
            {link && (
              <Button 
                variant="outline" 
                size="sm" 
                className="whitespace-nowrap"
                onClick={() => router.push(link)}
              >
                View Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            )}
            
            {links && links.length > 0 && (
              <div className="flex flex-col gap-1">
                {links?.map((linkItem, idx) => (
                  <Button 
                    key={idx}
                    variant="ghost" 
                    size="sm" 
                    className="whitespace-nowrap justify-start"
                    onClick={() => window.open(linkItem?.href, '_blank')}
                  >
                    {linkItem.icon}
                    {linkItem.type}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}