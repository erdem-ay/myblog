import Link from 'next/link';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { BsPenFill } from 'react-icons/bs';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer space-x-2 text-white hover:text-blue-300 transition">
            <FaHome className="text-3xl" />
            <span className="text-2xl font-bold">My Blog</span>
          </div>
        </Link>
        <div className="flex space-x-4">
          <CustomLink href="/about" label="About" icon={<FaInfoCircle className="text-xl" />} />
          <CustomLink href="/contact" label="Contact" icon={<FaEnvelope className="text-xl" />} />
          <CustomLink href="/add-blog" label="Add Blog" icon={<BsPenFill className="text-xl" />} />
          
        </div>
      </div>
    </nav>
  );
};

const CustomLink: React.FC<{ href: string; label: string; icon: JSX.Element }> = ({ href, label, icon }) => {
  return (
    <Link href={href}>
      <div className="flex items-center cursor-pointer space-x-2 text-white hover:text-blue-300 transition">
        {icon}
        <span className="text-lg">{label}</span>
      </div>
    </Link>
  );
};

export default Navbar;
