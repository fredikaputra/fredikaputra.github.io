import { ProjectListCard } from "@/components/project-list-card";
import { BackButton } from "@/components/back-button";
import { DATA } from "@/data/resume";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 py-12">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <BackButton />
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            All Projects
          </h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A comprehensive collection of my work, including personal projects, 
            client work, and open source contributions.
          </p>
        </div>
        
        <div className="space-y-4">
          {DATA.projects.map((project, id) => (
            <ProjectListCard
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}