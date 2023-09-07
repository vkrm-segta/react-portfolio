import React from 'react'
import Image from './Vikas.png'
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

function App() {
  return (
    <div className='w-full h-full bg-black text-white p-5'>
      <div className='border p-10'>
        <div className='w-full px-[10%]'>
          <div className='flex flex-col pb-[10%]'>
            <h1 className='text-7xl font-semibold'>Vikas Khanna</h1>
            <p className='text-lg text-gray-400'>Technical Specialist</p>
            <hr className='w-[40%] mt-5' />
          </div>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='w-full md:w-[60%] mr-10'>
              <h1 className='text-7xl font-semibold'>About me</h1>
              <p className='mt-10 text-xl'>I am currently serving as a Technical Specialist at Privasec Singapore, where I am entrusted with the end-to-end delivery of security assessments.</p>
              <div className='md:flex hidden items-center mt-10'>
                <a href='https://www.linkedin.com/in/vikaskhanna01/' target='blank' className='mr-5'>
                  <BsLinkedin className='hover:text-gray-400' size={40} />
                </a>
                <a href='https://twitter.com/0xn00b' target='blank'>
                  <FaTwitterSquare className='hover:text-gray-400' size={45} />
                </a>
              </div>
            </div>
            <img className=' w-80 h-80 mt-5 rounded-3xl rounded-br-3xl object-cover' src={Image} alt='' />
            <div className='flex md:hidden items-center mt-10'>
                <a href='https://www.linkedin.com/in/vikaskhanna01/' target='blank' className='mr-5'>
                  <BsLinkedin className='hover:text-gray-400' size={40} />
                </a>
                <a href='https://twitter.com/0xn00b' target='blank'>
                  <FaTwitterSquare className='hover:text-gray-400' size={45} />
                </a>
              </div>
          </div>
          <hr className='my-10' />
          <div>
            <h1 className='text-xl font-semibold'>Upcoming Talks</h1>
            <h1 className='text-7xl font-semibold mt-5'>API Security 101</h1>
            <a href='https://www.hack.sydney/' target='blank' className='text-lg text-gray-400 hover:underline'>HCKSYD Sydney 2023: November 23-24</a>
            <p className='mt-10 text-xl'>I intend to deliver a session focusing on API security and the common vulnerabilities encountered in API implementations. In the course of my research, I've pinpointed two security issues within Apple's system, with a total estimated value of $10,000 USD. These particular concerns will be presented and thoroughly discussed as an essential component of my presentation.</p>
            <h1 className='mt-10 text-3xl font-semibold'>Unlocking the Gates - Understanding Authentication Bypass Vulnerabilities</h1>
            <a href='https://www.hack.sydney/' target='blank' className='text-lg text-gray-400 hover:underline'>HCKSYD Sydney 2023: November 23-24</a>
            <p className='mt-10 text-xl'>"Unlocking the Gates - Understanding Authentication Bypass Vulnerabilities" provides a captivating and informative experience for individuals engaged in securing digital systems. Participants will gain a heightened awareness of authentication vulnerabilities, along with practical strategies to strengthen their application's security. By fortifying the gates against unauthorized access, sensitive data, and user identities will be safeguarded. During the session, I will share my own discovery of an authentication bypass vulnerability in one of Apple's subdomains, offering a real-world example of its impact. Additionally, I will delve into over 15 techniques that can be employed to bypass authentication or gain control of user accounts. This comprehensive discussion will equip attendees with valuable insights into the methods attackers use and empower them to proactively defend against potential threats.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App