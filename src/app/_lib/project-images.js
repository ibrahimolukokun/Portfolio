export function getProjectThumbnail(project) {
  return project?.coverImage || project?.image;
}

export function getProjectGridImage(project) {
  return project?.gridImage || project?.image || project?.coverImage;
}
