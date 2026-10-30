import Link from 'next/link'

function Navbar() {
  return (
    <nav><a href='/' className='nav-brand'>My Fav Boardgames</a><Link href="/blog">Blog</Link><Link href="/about">About</Link><button aria-label="Login or Sign Up">Login or Sign Up</button></nav>
  )
}

export default Navbar