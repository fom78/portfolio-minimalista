
import { language_to_show } from "@cv"
import { sections } from "@config"

export function getProjectsSection(section) {
    return language_to_show === "EN" ? sections[0][section] : sections[1][section];
}

