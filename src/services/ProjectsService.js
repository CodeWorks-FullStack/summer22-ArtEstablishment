import { AppState } from "../AppState.js";
import { Project } from "../models/Project.js";
import { bcwSandbox } from "./AxiosService.js";

class ProjectsService {

  async getProjects() {
    const res = await bcwSandbox.get('api/projects')
    AppState.projects = res.data.map(p => new Project(p))
  }

  async getProjectsByCreatorId(creatorId) {
    const res = await bcwSandbox.get('api/projects', {
      params: {
        creatorId
      }
    })
    AppState.profileProjects = res.data.map(p => new Project(p))
  }

  async createProject(projectData) {
    const res = await bcwSandbox.post('/api/projects', projectData)
    AppState.projects.unshift(new Project(res.data))
  }

  async editProject(projectData) {
    const res = await bcwSandbox.put(`api/projects/${projectData.id}`, projectData)

    const index = AppState.projects.findIndex(p => p.id == projectData.id)

    AppState.projects.splice(index, 1, new Project(res.data))

  }


  async deleteProject(projectId) {
    const res = await bcwSandbox.delete(`api/projects/${projectId}`)
    AppState.projects = AppState.projects.filter(p => p.id != projectId)
  }

}


export const projectsService = new ProjectsService()
