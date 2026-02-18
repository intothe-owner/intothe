
const Footer = () => {
    return (
         <footer className="border-t border-white/10 bg-[#0b0f17] p-20">
        <div className="container flex flex-col items-start justify-between gap-3 py-8 md:flex-row md:items-center">
          <div className="text-sm text-white/55">
            © {new Date().getFullYear()} INTO THE. All rights reserved.
          </div>
          <div className="text-sm text-white/55">
            <span className="mr-3">Email: intotheb@kakao.com</span>
            <span>Phone: 010-4242-1950</span>
          </div>
        </div>
      </footer>
    )
}

export default Footer;