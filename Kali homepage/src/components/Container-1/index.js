import React from 'react'
import "./container-1.css"

const ContainerOne = () => {
  return (
    <div className='container-one'>
    <section className='first'>
    <div>
      <div>
        <h1 className='first-text'>The Industry Standard</h1>
        </div>
        <div className='second-text'>
        Kali Linux is not about its tools, nor the operating <br></br>system. Kali Linux is a <b>platform</b>.
        </div>
          <div className='third-text'>
         Make Your Job Easier <br></br>
         <p className='para'>You can take any Linux and install pentesting <br></br>tools on it, but you have to set the tools up<br></br> manually and configure them. Kali is <br></br>optimized to reduce the amount of work, so a <br></br>professional can just sit down and go.</p>
          </div>
          <div className='fourth-text'>
         Kali Everywhere<br></br>
         <p className='para'>A version of Kali is always close to you, no <br></br>matter where you need it. Mobile devices,<br></br> Docker, ARM, Amazon Web Services, Windows <br></br>Subsystem for Linux, Virtual Machine, bare<br></br> metal, and others are all available.</p>
          </div>
          <div className='five-text'>
         Customization<br></br>
         <p className='para'>With the use of metapackages, optimized for <br></br> the specific tasks of a security professional, <br></br> and a highly accessible and well documented <br></br> ISO customization process, it's always easy to <br></br> generate an optimized version of Kali for your <br></br> specific needs.</p>
          </div>
          <div className='six-text'>
         Documentation<br></br>
         <p className='para'>Whether you are a seasoned veteran or a<br></br> novice, our documentation will have all the<br></br> information you will need to know about Kali <br></br> Linux. Multiple tips and “recipes” are available,<br></br> to help ease doubts or address any issues. All<br></br> documentation is open, so you can easily<br></br> contribute.</p>
          </div>
          <div className='seven-text'>
         Community<br></br>
         <p className='para'>Kali Linux, with its BackTrack lineage, has a<br></br>  vibrant and active  community. There are active<br></br>  Kali forums, IRC Channel, Kali Tools listings, an <br></br> open bug tracker system, and even community provided tool suggestions.</p>
          </div> </div>
    </section>
            
    </div>
  )
}

export default ContainerOne