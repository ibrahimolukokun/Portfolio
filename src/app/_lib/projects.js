import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'src/data/projects')

export function getProjectThumbnail(project) {
  return project?.coverImage || project?.image;
}

export function getProjectGridImage(project) {
  return project?.gridImage || project?.image || project?.coverImage;
}

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory)
  const allData = fileNames.filter((fileName) => fileName.includes('.md') && !fileName.includes('project-template')).map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Filename is the canonical route id (case-sensitive on Linux hosting).
    return {
      ...matterResult.data,
      id,
    }
  })
  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getRelatedProjects(current_id) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory)
  const allData = [];

  fileNames.filter((fileName) => fileName.includes('.md') && !fileName.includes('project-template')).map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Exclude current id from result

    if ( id != current_id ) {
      allData.push({
        ...matterResult.data,
        id,
      });
    }
  })

  // Sort projects by category
  return allData.sort((a, b) => {
    if (a.category > b.category) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory)

  return fileNames
    .filter((fileName) => fileName.includes('.md') && !fileName.includes('project-template'))
    .map((fileName) => ({
      id: fileName.replace(/\.md$/, ''),
    }))
}

function resolveProjectFileName(id) {
  const exactPath = path.join(projectsDirectory, `${id}.md`)
  if (fs.existsSync(exactPath)) {
    return `${id}.md`
  }

  const match = fs
    .readdirSync(projectsDirectory)
    .find(
      (fileName) =>
        fileName.endsWith('.md') &&
        fileName.replace(/\.md$/, '').toLowerCase() === String(id).toLowerCase()
    )

  return match || null
}

export async function getProjectData(id) {
  const fileName = resolveProjectFileName(id)

  if (fileName) {
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const canonicalId = fileName.replace(/\.md$/, '')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      ...matterResult.data,
      id: canonicalId,
      contentHtml,
    }
  }
}