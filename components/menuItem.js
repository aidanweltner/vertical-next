import Link from "next/link";

export default function MenuItem({ dark, title, href }) {
  return (
    <li>
      <Link href={href}>
        <a 
          className={`inline-block pr-4 py-2 border-none hover:underline ${dark ? 'text-white' : 'text-primary'}`}
          title={title}
        >
          {title}
        </a>
      </Link>
    </li>
  )
}