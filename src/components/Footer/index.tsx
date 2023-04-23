import { motion } from 'framer-motion'
import Link from 'next/link'

type FooterProps = {
  companyName: string
}

const footerLinks = [
  { title: 'Home', href: '/' },
  {
    title: 'Software Principles',
    href: 'https://gohorseprocess.com.br/extreme-go-horse-xgh/',
  },
  { title: 'Development Philosophy', href: 'https://grugbrain.dev' },
]

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-500 text-white py-6 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-lg font-semibold">{companyName}</div>
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-6">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm font-medium hover:text-gray-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {companyName} By{' '}
          <Link href="https://theza.co">
            <span className="text-lg text-white font-bold">MecBonjourno</span>
          </Link>
          . All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
