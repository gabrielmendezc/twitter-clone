import { useEffect } from 'react'

export const useDocumentTitle = (
  title: string,
  ...extraDependencies: any[]
) => {
  const titleBeforeChange = title
  useEffect(() => {
    document.title = title
  }, [title, extraDependencies])

  return { titleBeforeChange, titleAfterChange: title }
}
