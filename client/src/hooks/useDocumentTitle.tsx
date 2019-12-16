import { useEffect } from 'react'

interface IUseDocumentTitle {
  title: string
}

export const useDocumentTitle = ({ title }: IUseDocumentTitle) => {
  const titleBeforeChange = title
  useEffect(() => {
    document.title = title
  }, [])

  return { titleBeforeChange, titleAfterChange: title }
}
