import { type Project } from "@/types";

type ProjectRowProps = {
    project: Project;
};

export default function ProjectRow({ project }: ProjectRowProps) {
    return (
        <div>
            <h3>{project.name}</h3>
            <p>{project.location}</p>
            <span>{project.jobDescription}</span>
        </div>
    );
}