export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Daniel Iseoluwa
      </h1>
      <p className="mb-4">
        {`I am a fourth year computer science student currently doing my PEY
        at Xero. I am very interested in Robotics, particularly in medical
        applications.`}
        <br />
        {`I am a big fan of the UTM Robotics club and I hope to do some good
        stuff with the club members next year.`}
      </p>
      <div className="mb-4">
        <p className='text-xl font-semibold py-2'>Relevant Experience</p>
        <ul className="list-disc ml-4 mb-4">
          <li className="py-2">
            Student Researcher @ <a href='https://medcvr.utm.utoronto.ca/' target='_blank' rel='noopener noreferrer' className='underline'>MedCVR</a> (Winter 2025)
            <br />
            [Working on medical simulation software for the Franka Robot]
          </li>
          <li className="py-2">
            Volunteer Researcher @ <a href='https://medcvr.utm.utoronto.ca/' target='_blank' rel='noopener noreferrer' className='underline'>MedCVR</a> (Fall 2024)
            <br />
            [Working on medical simulation software for the Franka Robot]
          </li>
          <li className="py-2">
            Technical Associate @ <a href='https://mcss.club/' target='_blank' rel='noopener noreferrer' className='underline'>MCSS</a> (August 2023 - present)
          </li>
          <li className="py-2">
            VP Communications @ <a href='https://robotics-club.utm.utoronto.ca/' target='_blank' rel='noopener noreferrer' className='underline'>UTM Robotics</a> (Fall 2022 - Winter 2023)
          </li>
        </ul>
      </div>
      <p className='text-xl font-semibold pt-2'>Campaign Video</p>
      <div className="my-8">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/B5yuX8RsxSU?si=Sx5mOURb4bMXptxL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <p className='text-xl font-semibold py-2'>Edited Transcript</p>
      <p className='mb-4'>
        {`What does the ideal robotics club look like? Regular workshops for beginners to learn new things?
        Open office hours for interested people to visit and build stuff? Hackathons, where people dedicate
        hours on end, hacking, to achieve a goal? Long running projects, where people spend hours each week
        trying to bring an idea to life? Competitions, within the club, and against other clubs? Mentorship
        opportunities with members of the department? Research projects, where dedicated students can devote
        months to cutting-edge research? collaborations with different clubs to make the robots *useful*?
        Self-driving robots moving around campus? automated drones surveying the green?
        The possibilities are endless, and the members are a big part of choosing the direction for the club.`}
        <br />
        <br />
        {`My name is Daniel and I hope to be the next president of the robotics club. I am a huge fan of the
        robotics club, and robotics in general. I am particularly thankful to the current exec team for reviving
        the club in many ways. I think it's fair to say that the club was much more *alive* this year than last year.
        Probably the most active it's been since Covid. I think we have not maxed out our potential yet, so I
        hope to continue that trend. When I mention self driving bots, or robot competitions, I am not just saying stuff.
        But I really do believe these ideas are within our reach. We have about 6 Quanser bots parked in the Hacklab,
        a 3d printer, 4 different robotics labs on the campus, and we have a community of curious minds. We really
        can build anything. The question is: Are we interested? Are you interested? If you are, please vote for me.
        And more importantly, let me know! DM me on discord, with ideas, questions, or anything you want to tell me!
        Let's build together!`}
      </p>
    </section>
  )
}
