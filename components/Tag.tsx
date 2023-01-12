import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      // className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      className="mr-3 text-sm font-medium uppercase border-blue-200 text-blue-300 hover:bg-blue-400
      hover:text-white border p-1 rounded-md overflow-hidden transition-all"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
