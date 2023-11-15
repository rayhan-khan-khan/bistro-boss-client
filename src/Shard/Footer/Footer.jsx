import moment from 'moment';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
const Footer = () => {
    return (
       <footer>
        <div className="flex  text-center">
            <div className="w-1/2 bg-[#1F2937]  p-6 ">
                <h3 className="text-2xl font-semibold text-white my-2">CONTACT US</h3>
                <div className='text-white font-bold'>
                <p className='mb-2'>{moment().format("+88 123456789")}</p>
                 <p className='mb-2'>{moment().format('ddd- LT')}</p>
                 <p className='mb-2'>{moment().format('ddd- LT')}</p>
                </div>
            </div>
            {/* 2 */}
            <div className="w-1/2 bg-[#111827] text-center">
                <p className="text-2xl text-white">Follow US</p>
                <p className="text-xl text-white">Join us on social media</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 lg:px-48 mt-4">
              <p className='text-3xl rounded bg-white text-[#080fcf]'><BsFacebook></BsFacebook></p>
              <p className='text-3xl bg-white text-orange-600 rounded'><BsInstagram></BsInstagram></p>
              <p className='text-3xl text-[#484ddb]'><GrTwitter></GrTwitter></p>
              </div>
            </div>
        </div>
        
       
        {/* 3 */}
        <div className="footer footer-center p-4 text-white bg-[#151515]">
        <aside>
            <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
        </div>
       </footer>

   

    );
};

export default Footer;