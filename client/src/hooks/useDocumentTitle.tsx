import { useEffect } from 'react'

export const useDocumentTitle = (title: string) => {
  const titleBeforeChange = title
  useEffect(() => {
    document.title = title
  }, [title])

  return { titleBeforeChange, titleAfterChange: title }
}
